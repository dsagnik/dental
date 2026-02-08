# Sri Dental Clinic Website

A modern, responsive dental clinic website built with pure HTML, CSS, and JavaScript.

---

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [Pages Overview](#pages-overview)
- [Design System](#design-system)
- [JavaScript Features](#javascript-features)
- [Image Assets](#image-assets)
- [Making Changes](#making-changes)
- [Deployment](#deployment)
- [Contact Information](#contact-information)

---

## 🏥 Project Overview

**Sri Dental Clinic** is a premium dental care website for a clinic located in Hyderabad, Telangana, India. The website showcases the clinic's services, team, gallery, and contact information. It features WhatsApp integration for quick appointment booking.

### Key Features

- ✅ Fully responsive design (Mobile, Tablet, Desktop)
- ✅ Modern UI with smooth animations
- ✅ WhatsApp booking integration
- ✅ Image lightbox gallery
- ✅ Sticky navigation with scroll effects
- ✅ Mobile hamburger menu
- ✅ SEO optimized with meta tags
- ✅ Google Maps integration

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **HTML5** | Page structure and semantics |
| **CSS3** | Styling with CSS variables, flexbox, grid |
| **JavaScript (ES6+)** | Interactivity and animations |
| **Google Fonts** | Poppins & Inter fonts |
| **Font Awesome 6.5** | Icons |

### External Dependencies

```html
<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">

<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
```

---

## 📁 Project Structure

```
dental-main/
├── index.html          # Home page
├── about.html          # About Us page
├── services.html       # Services page
├── gallery.html        # Gallery page
├── contact.html        # Contact page
├── README.md           # This documentation
│
├── css/
│   └── style.css       # Main stylesheet (2500+ lines)
│
├── js/
│   └── script.js       # Main JavaScript file
│
└── images/
    ├── favicon.png     # Browser favicon
    ├── logo.png        # Clinic logo
    ├── hero.jpg        # Hero section background
    ├── clinic.jpg      # Clinic exterior image
    ├── doctor1.jpg     # Dr. Bharath Kumar photo
    │
    ├── gallery/        # Gallery images
    │   ├── gallery1.jpg
    │   ├── gallery2.jpg
    │   ├── gallery3.jpg
    │   ├── gallery4.jpg
    │   ├── gallery5.jpg
    │   └── gallery6.jpg
    │
    └── services/       # Service card images
        ├── service1.jpg   # Teeth Cleaning
        ├── service2.jpg   # Dental Implants
        ├── service3.jpg   # Cosmetic Dentistry
        ├── service4.jpg   # Root Canal
        ├── service5.jpg   # Teeth Whitening
        └── service6.jpg   # Orthodontics & Braces
```

---

## ⚙️ Installation & Setup

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A code editor (VS Code recommended)
- Optional: Live Server extension for VS Code

### Setup Steps
1. **Open in Browser** - Simply open `index.html` in your browser, OR

2. **Use Live Server** (Recommended):
   - Install VS Code extension "Live Server"
   - Right-click on `index.html` → "Open with Live Server"
   - Website will be available at `http://localhost:5500`

### No Build Process Required

This is a static website with no build steps. All files are ready to use as-is.

---

## 📄 Pages Overview

### 1. Home Page (`index.html`)

**Sections:**
- Hero banner with WhatsApp booking CTA
- Trust indicators (Years, Patients, Equipment stats)
- Featured services grid
- Doctor introduction
- Clinic gallery preview
- Patient testimonials
- Call-to-action section
- Contact information with Google Maps

### 2. About Page (`about.html`)

**Content:**
- Dr. Bharath Kumar profile and qualifications
- Clinic mission and values
- Why choose us section

### 3. Services Page (`services.html`)

**Services Listed:**
1. Teeth Cleaning
2. Dental Implants
3. Cosmetic Dentistry
4. Root Canal Treatment
5. Teeth Whitening
6. Orthodontics (Braces)

Each service card has a direct WhatsApp booking link.

### 4. Gallery Page (`gallery.html`)

- Clinic interior photos
- Treatment room images
- Modern equipment showcase
- Lightbox feature for enlarged viewing

### 5. Contact Page (`contact.html`)

- Contact Informations
- Clinic address and phone
- Business hours
- Embedded Google Maps

---

## 🎨 Design System

### CSS Variables (Defined in `:root`)

```css
/* Primary Colors */
--primary-blue: #2A4FA3;
--primary-teal: #2BB7A8;
--light-teal: #7ED6CF;
--bg-light: #F4F7FA;
--text-dark: #1A1A1A;
--whatsapp-green: #25D366;

/* Extended Palette */
--white: #FFFFFF;
--gray-100 to --gray-600: Gray scale colors

/* Spacing */
--section-padding: 100px;
--container-max: 1280px;

/* Border Radius */
--radius-sm: 6px;
--radius-md: 12px;
--radius-lg: 20px;
--radius-xl: 28px;

/* Transitions */
--transition-fast: 0.2s ease;
--transition-normal: 0.3s ease;
--transition-slow: 0.5s ease;
```

### Button Classes

| Class | Usage |
|-------|-------|
| `.btn--primary` | Blue gradient buttons |
| `.btn--whatsapp` | Green WhatsApp buttons |
| `.btn--outline` | Outlined buttons |
| `.btn--white` | White buttons (for dark backgrounds) |
| `.btn--sm` | Small size |
| `.btn--lg` | Large size |

### Common CSS Classes

| Class | Purpose |
|-------|---------|
| `.container` | Max-width wrapper (1280px) |
| `.section` | Section padding |
| `.section--light` | Light gray background |
| `.section-header` | Centered section title |
| `.subtitle` | Teal uppercase subtitle |

---

## ⚡ JavaScript Features

### File: `js/script.js`

#### 1. Mobile Navigation Toggle
```javascript
// Classes: .nav__toggle, .nav__menu, .nav-overlay
// Toggles hamburger menu on mobile
```

#### 2. Sticky Header Scroll Effect
```javascript
// Adds .scrolled class to header when page scrolls
// Creates shadow and blur effect
```

#### 3. Smooth Scrolling
```javascript
// Handles anchor links with offset for fixed header
```

#### 4. Active Navigation Highlighting
```javascript
// Automatically highlights current page in nav
```

#### 5. Scroll Animations (Intersection Observer)
```javascript
// Elements animate in when scrolled into view
// Targets: .service-card, .testimonial-card, .gallery__item
```

#### 6. Gallery Lightbox
```javascript
// Click any gallery image to view enlarged
// Close with X button, overlay click, or Escape key
```

---

## 🖼️ Image Assets

### Required Images

| File | Recommended Size | Purpose |
|------|------------------|---------|
| `logo.png` | 200x48px | Header/Footer logo |
| `favicon.png` | 32x32px | Browser tab icon |
| `hero.jpg` | 1920x1080px | Hero section background |
| `doctor1.jpg` | 600x800px | Dr. Bharath photo |
| `clinic.jpg` | 800x600px | Clinic photo |

### Gallery Images
- Recommended: 800x600px (4:3 aspect ratio)
- Format: JPG (optimized for web)

### Service Images
- Recommended: 600x400px
- Each service card uses these images
- Format: JPG (optimized for web)

### Image Optimization Tips

1. Use tools like [TinyPNG](https://tinypng.com/) to compress images
2. Keep file sizes under 150KB for faster loading
3. Use JPG for photos, PNG for logos with transparency

---

## 🔧 Making Changes

### Updating Content

#### Change Clinic Information

**Address, Phone, Hours:** Edit in `index.html` lines 252-275 and footer section.

```html
<!-- Phone Number -->
<p>+91 79932 83062</p>

<!-- Address -->
<p>1-1-296/124, Hi-tension line, Arul Colony
   Prasanthi Nagar, Kapra
   Hyderabad, Secunderabad, Telangana 500062</p>
```

#### Update WhatsApp Links

All WhatsApp links use wa.link format:
```html
<a href="https://wa.link/ar98lh" target="_blank">Book Appointment</a>
```

To create new links:
1. Go to [wa.link](https://wa.link/) or [api.whatsapp.com](https://api.whatsapp.com)
2. Generate link with your phone number and message

#### Modify Services

Edit `services.html` - each service follows this pattern:
```html
<div class="service-card">
    <div class="service-card__image">
        <img src="images/services/serviceX.jpg" alt="Service Name">
    </div>
    <div class="service-card__content">
        <h4 class="service-card__title">Service Name</h4>
        <p class="service-card__description">Description text here.</p>
        <a href="https://wa.link/XXXXX" class="btn btn--whatsapp btn--sm">Book on WhatsApp</a>
    </div>
</div>
```

### Modifying Styles

#### Changing Brand Colors

Edit `css/style.css` lines 8-67 to update CSS variables:
```css
:root {
    --primary-blue: #YOUR_COLOR;
    --primary-teal: #YOUR_COLOR;
    /* etc. */
}
```

#### Adjusting Section Spacing

```css
:root {
    --section-padding: 100px;        /* Desktop */
    --section-padding-mobile: 60px;  /* Mobile */
}
```

### Adding New Pages

1. Copy an existing HTML file as template
2. Update the `<title>` tag
3. Update meta description
4. Change the `active` class in navigation:
   ```html
   <li><a href="newpage.html" class="nav__link active">New Page</a></li>
   ```
5. Add corresponding nav link to all other pages
6. Update footer Quick Links if needed

---

## 🚀 Deployment

### Option 1: Static Hosting (Recommended)

Upload all files to:
- **Netlify** (Free): Drag & drop folder to deploy
- **Vercel** (Free): Connect GitHub repo
- **GitHub Pages** (Free): Enable in repo settings
- **cPanel/FTP**: Upload to public_html folder

### Option 2: Traditional Web Hosting

1. Connect via FTP (FileZilla recommended)
2. Upload all files to `public_html` or `www` folder
3. Ensure `index.html` is at root level

### Pre-Deployment Checklist

- [ ] Update all WhatsApp links with correct numbers
- [ ] Verify Google Maps embed URL
- [ ] Test all navigation links
- [ ] Optimize images for web
- [ ] Test on mobile devices
- [ ] Update copyright year in footer

---

## 📞 Contact Information

**Sri Dental Clinic**

- **Address:** 1-1-296/124, Hi-tension line, Arul Colony, Prasanthi Nagar, Kapra, Hyderabad, Secunderabad, Telangana 500062
- **Phone:** +91 79932 83062
- **Email:** sridentalclinic2024@gmail.com
- **Hours:** Mon-Sat: 10AM-9PM, Sunday: 10AM-2PM

**Social Media:**
- [Facebook](https://www.facebook.com/bharathmaxillofacialsurgeon/)
- [Instagram](https://www.instagram.com/dr.bharath_uppuluri)
- [Google Maps](https://maps.app.goo.gl/5Kq1aYdeu5UJnBaz5)

---

## 📝 Changelog

### Version 1.0 (February 2026)
- Initial release
- Responsive navigation with mobile hamburger menu
- WhatsApp CTA integration
- Gallery lightbox feature
- Contact form with validation

---

## 👨‍💻 For Developers

### Common Tasks Quick Reference

| Task | Location |
|------|----------|
| Change colors | `css/style.css` → `:root` variables |
| Edit navigation | All HTML files → `<nav class="nav">` |
| Update footer | All HTML files → `<footer class="footer">` |
| Add animations | `js/script.js` → Intersection Observer section |
| Mobile responsive | `css/style.css` → `@media` queries (search for breakpoints) |

### Responsive Breakpoints

```css
/* Mobile First Approach */
@media (max-width: 768px)  { /* Tablets */ }
@media (max-width: 480px)  { /* Mobile phones */ }
@media (min-width: 1024px) { /* Desktop */ }
```

### Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome for Android)

---

**Last Updated:** February 2026

**Made with ❤️ by Shrionik Branding Agency Development Team**
