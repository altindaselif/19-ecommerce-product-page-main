# E-Commerce Product Page 👟

A responsive e-commerce product page built with **Vanilla JavaScript**. This project focuses on DOM manipulation and state logic without relying on external libraries.

## 🚀 Overview

The goal was to build a functional product page with a cart system, image gallery and responsive layout. The project handles state synchronization between the cart and the main display using pure JavaScript.

## 🔗 Links

- **Live Site:** [View Live Demo](https://altindaselif.github.io/19-ecommerce-product-page-main/)
- **Code:** [View GitHub Repository](https://github.com/altindaselif/19-ecommerce-product-page-main)

## 💡 Key Features

- **🛒 Cart Logic:** Add/remove functionality with synchronized quantity updates.
- **🖼️ Desktop Lightbox:** Modal gallery that only activates on larger screens (>768px).
- **📱 Mobile Slider:** Button-controlled image slider for smaller screens.
- **🔢 State Synchronization:** Cart quantity is controlled by a single source of truth to prevent UI mismatches.
- **📐 Responsive Design:** Adapts to different screen sizes using CSS Grid and Flexbox.

## 🛠️ Technical Implementation

### 1. Centralized State Management

To prevent bugs where the cart count didn't match the actual items, I separated the logic from the UI.

- **Solution:** A central `updateAmount()` function controls the state, while `updateDropdown()` only handles the rendering. This ensures the cart and main display are always in sync.

### 2. Conditional Event Listeners

The lightbox gallery is designed for desktop interaction.

- **Solution:** Implemented a `window.innerWidth` check. The lightbox script only executes on screens wider than **768px**, preventing UX issues on mobile devices.

## 📸 Screenshots

- [View Desktop Version](./desktop-screenshot.png)
- [View Tablet Version](./tablet-screenshot.png)
- [View Mobile Version](./mobile-screenshot.png)

## 🧰 Built With

- **Semantic HTML5**
- **CSS3 (Custom Properties)**
- **Flexbox & CSS Grid**
- **Vanilla JavaScript (ES6+)**
- **Desktop-First Workflow**

## ✍️ Author

- **LinkedIn:** [Elif Altındaş](https://www.linkedin.com/in/elifaltindas/)
- **Frontend Mentor:** [@altindaselif](https://www.frontendmentor.io/profile/altindaselif)
- **GitHub:** [@altindaselif](https://github.com/altindaselif)
