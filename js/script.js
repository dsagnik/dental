/* =====================================================
   DENTAL CLINIC WEBSITE - JAVASCRIPT
   ===================================================== */

document.addEventListener('DOMContentLoaded', function () {

    // =====================================================
    // MOBILE NAVIGATION TOGGLE
    // =====================================================
    const navToggle = document.querySelector('.nav__toggle');
    const navMenu = document.querySelector('.nav__menu');
    const navOverlay = document.querySelector('.nav-overlay');
    const navLinks = document.querySelectorAll('.nav__link');

    function toggleMenu() {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        navOverlay.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    }

    function closeMenu() {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        navOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (navToggle) {
        navToggle.addEventListener('click', toggleMenu);
    }

    if (navOverlay) {
        navOverlay.addEventListener('click', closeMenu);
    }

    // Close menu when clicking on nav links
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Close menu on escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            closeMenu();
        }
    });

    // =====================================================
    // STICKY HEADER SCROLL EFFECT
    // =====================================================
    const header = document.querySelector('.header');
    let lastScroll = 0;

    function handleScroll() {
        const currentScroll = window.pageYOffset;

        // Add scrolled class when page is scrolled
        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    }

    window.addEventListener('scroll', handleScroll);

    // Run on load in case page is already scrolled
    handleScroll();

    // =====================================================
    // SMOOTH SCROLLING FOR ANCHOR LINKS
    // =====================================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');

            // Skip if it's just "#"
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                e.preventDefault();

                const headerHeight = header.offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // =====================================================
    // ACTIVE NAV LINK HIGHLIGHTING
    // =====================================================
    function setActiveNavLink() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';

        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === currentPage || (currentPage === '' && href === 'index.html')) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    setActiveNavLink();

    // =====================================================
    // INTERSECTION OBSERVER FOR ANIMATIONS
    // =====================================================
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements that should animate on scroll
    document.querySelectorAll('.service-card, .testimonial-card, .gallery__item, .trust__item, .contact__item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add animate-in styles
    const style = document.createElement('style');
    style.textContent = `
    .animate-in {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
  `;
    document.head.appendChild(style);

    /* Counter Code Here
        // =====================================================
        // COUNTER ANIMATION FOR TRUST NUMBERS
        // =====================================================
        function animateCounter(element, target, suffix = '') {
        ...
    }
    
    const trustNumbers = document.querySelectorAll('.trust__number');
    const trustObserver = new IntersectionObserver((entries) => {
        ...
    });
    
    trustNumbers.forEach(num => trustObserver.observe(num));
    
    
    // =====================================================
    // FLOATING WHATSAPP BUTTON VISIBILITY
    // =====================================================
    const whatsappFloat = document.querySelector('.whatsapp-float');
    
    if (whatsappFloat) {
        // Hide initially and show after scrolling a bit
        whatsappFloat.style.opacity = '0';
        whatsappFloat.style.visibility = 'hidden';
        whatsappFloat.style.transition = 'opacity 0.3s ease, visibility 0.3s ease';
    
        window.addEventListener('scroll', function () {
            if (window.pageYOffset > 300) {
                whatsappFloat.style.opacity = '1';
                whatsappFloat.style.visibility = 'visible';
            } else {
                whatsappFloat.style.opacity = '0';
                whatsappFloat.style.visibility = 'hidden';
            }
        });
    }
        */

    // =====================================================
    // FORM VALIDATION (if contact form exists)
    // =====================================================
    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Basic validation
            const name = this.querySelector('input[name="name"]');
            const email = this.querySelector('input[name="email"]');
            const message = this.querySelector('textarea[name="message"]');
            let isValid = true;

            if (name && name.value.trim() === '') {
                isValid = false;
                name.classList.add('error');
            }

            if (email && !isValidEmail(email.value)) {
                isValid = false;
                email.classList.add('error');
            }

            if (message && message.value.trim() === '') {
                isValid = false;
                message.classList.add('error');
            }

            if (isValid) {
                // Form is valid, you can submit it
                alert('Thank you for your message! We will get back to you soon.');
                this.reset();
            }
        });
    }

    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Remove error class on input
    document.querySelectorAll('input, textarea').forEach(input => {
        input.addEventListener('input', function () {
            this.classList.remove('error');
        });
    });

    // =====================================================
    // GALLERY LIGHTBOX (Simple implementation)
    // =====================================================
    const galleryItems = document.querySelectorAll('.gallery__item');

    if (galleryItems.length > 0) {
        // Create lightbox elements
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
      <div class="lightbox__overlay"></div>
      <div class="lightbox__content">
        <button class="lightbox__close">&times;</button>
        <img src="" alt="" class="lightbox__image">
      </div>
    `;
        document.body.appendChild(lightbox);

        // Add lightbox styles
        const lightboxStyles = document.createElement('style');
        lightboxStyles.textContent = `
      .lightbox {
        position: fixed;
        inset: 0;
        z-index: 2000;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
      }
      .lightbox.active {
        opacity: 1;
        visibility: visible;
      }
      .lightbox__overlay {
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.9);
      }
      .lightbox__content {
        position: relative;
        max-width: 90vw;
        max-height: 90vh;
      }
      .lightbox__image {
        max-width: 100%;
        max-height: 90vh;
        border-radius: 8px;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
      }
      .lightbox__close {
        position: absolute;
        top: -40px;
        right: 0;
        width: 40px;
        height: 40px;
        background: none;
        border: none;
        color: white;
        font-size: 32px;
        cursor: pointer;
        transition: transform 0.2s ease;
      }
      .lightbox__close:hover {
        transform: scale(1.2);
      }
    `;
        document.head.appendChild(lightboxStyles);

        const lightboxImage = lightbox.querySelector('.lightbox__image');
        const lightboxClose = lightbox.querySelector('.lightbox__close');
        const lightboxOverlay = lightbox.querySelector('.lightbox__overlay');

        function openLightbox(imgSrc) {
            lightboxImage.src = imgSrc;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeLightbox() {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        }

        galleryItems.forEach(item => {
            item.addEventListener('click', function () {
                const img = this.querySelector('img');
                if (img) {
                    openLightbox(img.src);
                }
            });
        });

        lightboxClose.addEventListener('click', closeLightbox);
        lightboxOverlay.addEventListener('click', closeLightbox);

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && lightbox.classList.contains('active')) {
                closeLightbox();
            }
        });
    }

});
