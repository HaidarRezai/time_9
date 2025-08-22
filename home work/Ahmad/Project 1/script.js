const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("translate-y-full");
  mobileMenu.classList.add("translate-y-0");
});

closeBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("translate-y-0");
  mobileMenu.classList.add("translate-y-full");
});

const swiper = new Swiper('.swiper', {
  loop: true,                // infinite loop
  autoplay: { delay: 3000 }, // auto-slide
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const mainContent = document.getElementById("mainContent");
const contactSection = document.getElementById("contactSection");
const addReviewSection = document.getElementById("addReviewSection");
const addFAQsSection = document.getElementById("addFAQsSection");
const gallerySection = document.getElementById("gallerySection");
const feedbackSection = document.getElementById("feedbackSection");
const tourSection = document.getElementById("tourSection");
const aboutSection = document.getElementById("about");
const bookingSection = document.getElementById("bookingsection");
// booking
const bookingLinks = document.querySelectorAll("#openBooking, .viewItineraryBtn");
// Contact links
const contactLinks = document.querySelectorAll("a[href='#contactSection'], #openContact");

// About links
const aboutLinks = document.querySelectorAll("a[href='#about'], #openAbout");

// Add Review links
const addReviewLinks = document.querySelectorAll("a[href='#addReviewSection'], #openAddReview");

// FAQs links
const addFAQsLinks = document.querySelectorAll("a[href='#addFAQsSection'], #openFAQsReview");

// gallery
const galleryLinks = document.querySelectorAll("a[href='#gallerySection'], #openGallery");
// feedback
const feedbackLinks = document.querySelectorAll("a[href='#feedbackSection'], #openfeedback");


// Show Booking form
bookingLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    mainContent.classList.add("hidden");
    contactSection.classList.add("hidden");
    aboutSection.classList.add("hidden");
    tourSection.classList.add("hidden");
    addReviewSection.classList.add("hidden");
    addFAQsSection.classList.add("hidden");
    gallerySection.classList.add("hidden");
    feedbackSection.classList.add("hidden");
    bookingSection.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
// tour
const tourlink = document.querySelectorAll("a[href='#tourSection'], #openTours");
aboutLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    mainContent.classList.add("hidden");
    contactSection.classList.add("hidden");
    addReviewSection.classList.add("hidden");
    bookingSection.classList.add("hidden");
    addFAQsSection.classList.add("hidden");
    gallerySection.classList.add("hidden");
    feedbackSection.classList.add("hidden");
    tourSection.classList.add("hidden");
    aboutSection.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
// Show Gallery
galleryLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    mainContent.classList.add("hidden");
    aboutSection.classList.add("hidden");
     bookingSection.classList.add("hidden");
    contactSection.classList.add("hidden");
    addReviewSection.classList.add("hidden");
    addFAQsSection.classList.add("hidden");
    gallerySection.classList.remove("hidden");
    tourSection.classList.add("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
// Tours
tourlink.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    mainContent.classList.add("hidden");
    contactSection.classList.add("hidden");
    aboutSection.classList.add("hidden");
     bookingSection.classList.add("hidden");
    addReviewSection.classList.add("hidden");
    addFAQsSection.classList.add("hidden");
    gallerySection.classList.add("hidden");
    feedbackSection.classList.add("hidden");
    tourSection.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

// Show Feedback
feedbackLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    mainContent.classList.add("hidden");
    aboutSection.classList.add("hidden");
    tourSection.classList.add("hidden");
     bookingSection.classList.add("hidden");
    contactSection.classList.add("hidden");
    addReviewSection.classList.add("hidden");
    addFAQsSection.classList.add("hidden");
    gallerySection.classList.add("hidden");   // Gallery ausblenden
    feedbackSection.classList.remove("hidden"); // ✅ Feedback einblenden
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
// Show Contact
contactLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    mainContent.classList.add("hidden");
     bookingSection.classList.add("hidden");
    tourSection.classList.add("hidden");
    aboutSection.classList.add("hidden");
    addReviewSection.classList.add("hidden");
    addFAQsSection.classList.add("hidden");
    gallerySection.classList.add("hidden");   // ✅ FIX
    contactSection.classList.remove("hidden");
    feedbackSection.classList.add("hidden")
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

// Show Add Review
addReviewLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    mainContent.classList.add("hidden");
     bookingSection.classList.add("hidden");
    contactSection.classList.add("hidden");
    aboutSection.classList.add("hidden");
    tourSection.classList.add("hidden");
    addFAQsSection.classList.add("hidden");
    feedbackSection.classList.add("hidden")
    gallerySection.classList.add("hidden");   // ✅ FIX
    addReviewSection.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

// Show FAQs
addFAQsLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    mainContent.classList.add("hidden");
    aboutSection.classList.add("hidden");
     bookingSection.classList.add("hidden");
    contactSection.classList.add("hidden");
    tourSection.classList.add("hidden");
    feedbackSection.classList.add("hidden")
    addReviewSection.classList.add("hidden");
    gallerySection.classList.add("hidden");   // ✅ FIX
    addFAQsSection.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

// Home link → show main
const homeLinks = document.querySelectorAll("a[href='#homeSection'], #openHome");
homeLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    contactSection.classList.add("hidden");
    addReviewSection.classList.add("hidden");
     bookingSection.classList.add("hidden");
    tourSection.classList.add("hidden");
    feedbackSection.classList.add("hidden")
    aboutSection.classList.add("hidden");
    addFAQsSection.classList.add("hidden");
    gallerySection.classList.add("hidden");   // ✅ FIX
    mainContent.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});


AOS.init({
  duration: 1000, // animation duration (ms)
  once: true      // animation happens only once
});

