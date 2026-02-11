# E-Commerce Product Page 👟

A fully responsive, interactive e-commerce product page built with **Vanilla JavaScript**. This project focuses on complex DOM manipulation, state management logic, and accessibility standards without relying on external libraries or frameworks.

## 🚀 Overview

The goal of this project was to build a functional product page that mirrors real-world e-commerce complexity. It features a dynamic lightbox gallery, a cart management system with logic synchronization, and a mobile-first responsive layout.

This project demonstrates my ability to handle **state management** (shopping cart logic) and **responsive UI components** using pure JavaScript and CSS.

## 🔗 Links

- **Live Site:** [View Live Demo](https://altindaselif.github.io/19-ecommerce-product-page-main/)
- **Code:** [View GitHub Repository](https://github.com/altindaselif/19-ecommerce-product-page-main)

## 💡 Key Features

- **🛒 Smart Cart System:** dynamic add/remove functionality with real-time calculations.
- **🖼️ Lightbox Gallery:** Desktop-specific modal gallery with thumbnail synchronization.
- **📱 Mobile Image Slider:** Touch-friendly slider optimized for smaller screens.
- **🔢 Logic Synchronization:** Cart quantity updates are synchronized across the UI (Main display & Cart dropdown).
- **♿ Accessibility First:** Full ARIA label support, semantic HTML5, and keyboard navigability.
- **📱 Fluid Design:** Adaptive layout that prevents overflow on all devices.

## 🛠️ Technical Highlights (What I Learned)

This project was a deep dive into **JavaScript Logic** and **CSS Architecture**. Here are the key engineering decisions I made:

### 1. State Management & Logic Isolation

Instead of updating the DOM from multiple functions (which causes bugs), I implemented a **"Single Source of Truth"** approach for the cart state.

- **Problem:** Updating the cart count from both the "Add" button and the "Delete" button caused synchronization issues.
- **Solution:** I separated the `updateAmount()` (logic) from `updateDropdown()` (UI rendering). The state variable `currentAmount` is controlled centrally, preventing logic mismatches.

### 2. Mobile Optimization & Conditional Events

The lightbox gallery is great for desktops but terrible for mobile UX.

- **Solution:** I implemented a `window.innerWidth` check within the event listeners. The lightbox script only activates on screens wider than **768px**, ensuring mobile users get a native slider experience instead of a broken modal.

### 3. Robust CSS Architecture

- **Fluid Layouts:** Used `width: min(36rem, 95vw)` for the cart dropdown to ensure it never overflows the screen on small mobile devices.
- **Z-Index Hierarchy:** Established a strict z-index layering system (Lightbox > Mobile Menu > Overlay > Cart) to prevent visual stacking context errors.

## 📸 Screenshots

| ![Desktop](./desktop-screenshot.png) | ![Tablet](./tablet-screenshot.png) | ![Mobile](./mobile-screenshot.png) |

## 🧰 Built With

- **Semantic HTML5** - For SEO and Accessibility structure.
- **CSS3 (Custom Properties)** - For consistent theming and maintainability.
- **Flexbox & CSS Grid** - For complex layout alignments.
- **Vanilla JavaScript (ES6+)** - For all interactive logic (No jQuery or Plugins).
- **BEM Naming Convention** - For clean and scalable CSS classes.

## ✍️ Author

- **LinkedIn:** [Elif Altındaş](https://www.linkedin.com/in/elifaltindas/)
- **Frontend Mentor:** [@altindaselif](https://www.frontendmentor.io/profile/altindaselif)
- **GitHub:** [@altindaselif](https://github.com/altindaselif)
