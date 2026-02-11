const menuOpenButton = document.querySelector(".header-menu-open-button");
const menuCloseButton = document.querySelector(".navbar-menu-close-button");
const navbarMenu = document.querySelector(".header-navbar");
const overlay = document.querySelector(".overlay");

const imgSliderTrack = document.querySelector(".img-slider-track");
const mainImages = document.querySelectorAll(".main-img");
const mainImagePrevButton = document.querySelector(".main-img-previous-button");
const mainImageNextButton = document.querySelector(".main-img-next-button");
const sideImageButtons = document.querySelectorAll(".side-img-button");

const lightboxOverlay = document.querySelector(".lightbox-overlay");
const lightboxMainImages = document.querySelectorAll(".lightbox-main-img");
const lightboxPrevButton = document.querySelector(".lightbox-previous-button");
const lightboxNextButton = document.querySelector(".lightbox-next-button");
const lightboxCloseButton = document.querySelector(".lightbox-close-button");
const lightboxSideImageButtons = document.querySelectorAll(
  ".lightbox-side-img-button",
);

const amountMinusButton = document.querySelector(".minus-button");
const amountInfoDisplay = document.querySelector(".amount-info");
const amountPlusButton = document.querySelector(".plus-button");
const addCartButton = document.querySelector(".add-cart-button");

const dropdownContainer = document.querySelector(".dropdown-container");
const dropdownEmptyContainer = document.querySelector(
  ".dropdown-empty-container",
);
const dropdownFullContainer = document.querySelector(
  ".dropdown-full-container",
);
const headerCartButton = document.querySelector(".header-cart-button");
const headerCartCount = document.querySelector(".header-cart-count");
const cartItemCount = document.querySelector(".item-count");
const cartItemPriceTotal = document.querySelector(".item-price-total");
const deleteButton = document.querySelector(".item-delete-button");

let currentIndex = 0;
let currentAmount = 0;
const totalSlides = mainImages.length;

const updateGallery = (newIndex) => {
  // If index goes below 0, jump to the last slide
  if (newIndex < 0) newIndex = totalSlides - 1;
  // If index exceeds the total, jump back to the first slide
  if (newIndex >= totalSlides) newIndex = 0;

  // Update the global index state
  currentIndex = newIndex;

  // A) Update Main Desktop Image
  mainImages.forEach((img) => img.classList.remove("active"));
  mainImages[currentIndex].classList.add("active");

  // B) Update Mobile Slider
  const movePercentage = (currentIndex * 100) / totalSlides;
  imgSliderTrack.style.transform = `translateX(-${movePercentage}%)`;

  // C) Update Lightbox Image
  lightboxMainImages.forEach((img) => img.classList.remove("active"));
  lightboxMainImages[currentIndex].classList.add("active");

  // D) Update Thumbnails (Both Main Page and Lightbox)
  const updateActiveSideImage = (buttons) => {
    buttons.forEach((button) => button.classList.remove("active"));
    buttons[currentIndex].classList.add("active");
  };

  updateActiveSideImage(sideImageButtons);
  updateActiveSideImage(lightboxSideImageButtons);
};

const updateAmount = (newAmount) => {
  if (newAmount < 0) return;
  if (newAmount >= 0) {
    currentAmount = newAmount;
    amountInfoDisplay.textContent = currentAmount;
  }
};

const updateDropdown = (newAmount) => {
  dropdownEmptyContainer.classList.remove("active");
  dropdownFullContainer.classList.remove("active");

  if (newAmount === 0) {
    dropdownEmptyContainer.classList.add("active");
    headerCartCount.classList.remove("active");
  }
  if (newAmount > 0) {
    currentAmount = newAmount;

    dropdownFullContainer.classList.add("active");
    headerCartCount.classList.add("active");

    headerCartCount.textContent = currentAmount;
    cartItemCount.textContent = currentAmount;
    cartItemPriceTotal.textContent = `$${(125 * currentAmount).toFixed(2)}`;
  }
};

const toggleNavbarMenu = () => {
  navbarMenu.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("scroll-lock");
};

const toggleLightboxOverlay = () => {
  lightboxOverlay.classList.toggle("active");
  document.body.classList.toggle("scroll-lock");
};

const toggleDropdownContainer = () => {
  dropdownContainer.classList.toggle("active");
};

/* 1. Navbar Listeners */
menuOpenButton.addEventListener("click", toggleNavbarMenu);
menuCloseButton.addEventListener("click", toggleNavbarMenu);
overlay.addEventListener("click", toggleNavbarMenu);

/* 2. Slider & Thumbnail Listeners */
// Next - Previous Buttons
mainImagePrevButton.addEventListener("click", () =>
  updateGallery(currentIndex - 1),
);
mainImageNextButton.addEventListener("click", () =>
  updateGallery(currentIndex + 1),
);
lightboxPrevButton.addEventListener("click", () =>
  updateGallery(currentIndex - 1),
);
lightboxNextButton.addEventListener("click", () =>
  updateGallery(currentIndex + 1),
);

// Side Image Clicks (Main Page)
sideImageButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    updateGallery(index);
  });
});

// Side Image Clicks (Lightbox)
lightboxSideImageButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    updateGallery(index);
  });
});

/* 3. Lightbox Toggle Listeners */
mainImages.forEach((image) => {
  image.addEventListener("click", toggleLightboxOverlay);
});

lightboxCloseButton.addEventListener("click", toggleLightboxOverlay);
lightboxOverlay.addEventListener("click", (e) => {
  if (e.target === e.currentTarget) toggleLightboxOverlay();
});

/* 4. Add to Cart Listeners */
amountMinusButton.addEventListener("click", () =>
  updateAmount(currentAmount - 1),
);

amountPlusButton.addEventListener("click", () =>
  updateAmount(currentAmount + 1),
);

addCartButton.addEventListener("click", () => {
  updateDropdown(currentAmount);
  if (!dropdownContainer.classList.contains("active"))
    toggleDropdownContainer();
});

/* 5. Dropdown Listeners */
headerCartButton.addEventListener("click", toggleDropdownContainer);

deleteButton.addEventListener("click", () => {
  currentAmount = 0;

  updateDropdown(0);

  updateAmount(0);
});
