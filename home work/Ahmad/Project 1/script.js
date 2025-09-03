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
const BlogSection = document.getElementById("BlogSection");
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
// Blog links
const blogLinks = document.querySelectorAll("#openBlog");

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



// Show Blog section
blogLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    // hide all sections
    mainContent.classList.add("hidden");
    contactSection.classList.add("hidden");
    aboutSection.classList.add("hidden");
    tourSection.classList.add("hidden");
    addReviewSection.classList.add("hidden");
    addFAQsSection.classList.add("hidden");
    gallerySection.classList.add("hidden");
    feedbackSection.classList.add("hidden");
    bookingSection.classList.add("hidden");
    // show blog
    BlogSection.classList.remove("hidden");

    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

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
    BlogSection.classList.add("hidden");
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
    BlogSection.classList.add("hidden");
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
    BlogSection.classList.add("hidden");
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
    BlogSection.classList.add("hidden");
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
    BlogSection.classList.add("hidden");
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
    BlogSection.classList.add("hidden");
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
    BlogSection.classList.add("hidden");
    tourSection.classList.add("hidden");
    addFAQsSection.classList.add("hidden");
    feedbackSection.classList.add("hidden")
    gallerySection.classList.add("hidden");   // ✅ FIX
    addReviewSection.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
const openToursFromBlogBtn = document.getElementById("openToursFromBlog");

openToursFromBlogBtn.addEventListener("click", (e) => {
  e.preventDefault();
  mainContent.classList.add("hidden");
  contactSection.classList.add("hidden");
  aboutSection.classList.add("hidden");
  bookingSection.classList.add("hidden");
  addReviewSection.classList.add("hidden");
  addFAQsSection.classList.add("hidden");
  gallerySection.classList.add("hidden");
  feedbackSection.classList.add("hidden");
  BlogSection.classList.add("hidden");
  tourSection.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Show FAQs
addFAQsLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    mainContent.classList.add("hidden");
    aboutSection.classList.add("hidden");
    BlogSection.classList.add("hidden");
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
    BlogSection.classList.add("hidden");
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

const marquee = document.getElementById("marquee");
let scrollX = 0;
const speed = 0.5; // 👈 adjust speed

function autoScroll() {
  scrollX -= speed;
  marquee.style.transform = `translateX(${scrollX}px)`;

  const firstCard = marquee.children[0];   // first card element
  const cardWidth = firstCard.offsetWidth + 24; // width + gap (gap-6 = 24px)

  // if the first card fully left the screen
  if (Math.abs(scrollX) >= cardWidth) {
    marquee.appendChild(firstCard); // move it to the end
    scrollX += cardWidth; // reset position so it’s seamless
  }

  requestAnimationFrame(autoScroll);
}

autoScroll();

const marquee1 = document.getElementById("marquee1");
let scrolly = 0;
const speed2 = 0.3; // 👈 control speed

function autoScroll2() {
  scrolly -= speed2;
  marquee1.style.transform = `translateX(${scrolly}px)`;

  const firstCard = marquee1.children[0]; // get the first card
  const cardWidth = firstCard.offsetWidth + 24; // width + gap (gap-6 = 24px)

  // When first card fully leaves, move it to the end
  if (Math.abs(scrolly) >= cardWidth) {
    marquee1.appendChild(firstCard);
    scrolly += cardWidth; // fix position to avoid jump
  }

  requestAnimationFrame(autoScroll2);
}

autoScroll2();

function toggleFAQ(card) {
  card.classList.toggle("open");
}

// make sure all start collapsed
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".faq-card").forEach(card => {
    card.classList.remove("open");
  });
});

// Pages data with descriptions
const pages = [
  [
    {
      title: "Sakhi Shrine Of Kabul",
      img: "https://i.redd.it/gsr5radf6t691.jpg",
      desc: "The Sakhi Shrine is one of Kabul’s most important religious and cultural landmarks. It is particularly visited during the Persian New Year, Nowruz, when thousands of people gather to celebrate. The shrine is associated with deep spirituality and is a symbol of hope, resilience, and unity for Afghans. Its beautiful blue dome and peaceful courtyards create a serene atmosphere for worshippers and visitors alike."
    },
    {
      title: "Shah-Do Shamshira Mosque",
      img: "https://af.shafaqna.com/wp-content/uploads/2021/05/182583146_2166243513511642_6186507714809595936_n.jpg",
      desc: "The Shah-Do Shamshira Mosque, often called the 'Mosque of the King with Two Swords,' is a famous yellow-colored mosque in the heart of Kabul. Built during the reign of King Amanullah Khan, it stands out for its European-inspired baroque architecture, which is unusual in Afghanistan. The mosque is not only a center of prayer but also a historical reminder of the modernization era in the early 20th century."
    }
  ],
  [
    {
      title: "Band-e-Amir",
      img: "https://afghansafari.com/wp-content/uploads/2024/04/11%DB%8C%D8%A7%D9%81%D8%AA%D9%85-%DA%A9%D8%B1%D8%A7%D9%81%DB%8C%DA%A9-%DA%A9%D8%A7%D8%A8%D9%84-afghansafari.jpeg",
      desc: "Band-e-Amir, often called the 'Grand Canyon of Afghanistan,' is the country’s first national park. Located in Bamyan Province, it consists of six breathtakingly blue lakes separated by natural dams made of travertine. The stunning scenery attracts both local and international visitors, making it one of Afghanistan’s top tourist destinations. Its peaceful waters and surrounding mountains provide a perfect place for reflection, photography, and relaxation."
    },
    {
      title: "Wakhan Corridor",
      img: "https://samvadaworld.com/wp-content/uploads/2025/01/output-1.png",
      desc: "The Wakhan Corridor is a narrow strip of land in northeastern Afghanistan that stretches between the Pamir and Karakoram mountains. It has served as an ancient trade route connecting Central Asia, China, and South Asia. The corridor is home to the Wakhi and Kyrgyz people, who maintain traditional lifestyles in one of the most remote regions on Earth. With its high-altitude valleys, rugged terrain, and snow-capped peaks, it is a paradise for adventurous travelers and explorers."
    }
  ],
  [
    {
      title: "Herat Citadel",
      img: "https://media-cdn.tripadvisor.com/media/photo-s/06/b0/72/7e/herat-citadel.jpg",
      desc: "The Herat Citadel, also known as the Citadel of Alexander, is one of the oldest surviving fortresses in Afghanistan. Its origins date back to the time of Alexander the Great in 330 BC. Over the centuries, it has been rebuilt and expanded by different rulers, including the Timurids. The citadel offers panoramic views of the historic city of Herat and contains museums showcasing Afghanistan’s rich cultural heritage, ancient manuscripts, and artifacts."
    },
    {
      title: "Blue Mosque of Mazar-i-Sharif",
      img: "https://pbs.twimg.com/media/CYH8YzqWwAAb7Y_.jpg:large",
      desc: "The Blue Mosque, officially known as the Shrine of Ali, is one of Afghanistan’s most iconic and sacred sites. Located in Mazar-i-Sharif, it is believed by many to house the tomb of Imam Ali, the cousin and son-in-law of Prophet Muhammad. The mosque is adorned with thousands of blue tiles that shimmer under the sun, creating a magnificent sight. The surrounding courtyard is home to hundreds of white pigeons, which are considered symbols of peace and spirituality. It is also the center of the famous Nowruz celebrations in northern Afghanistan."
    }
  ]
];


let currentPage = 0;
const postsContainer = document.getElementById("postsContainer");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const pageNumbersContainer = document.getElementById("pageNumbers");

// Render list of posts
function renderPosts() {
  postsContainer.innerHTML = "";
  pages[currentPage].forEach((post, idx) => {
    postsContainer.innerHTML += `
          <div class="relative w-full cursor-pointer" onclick="showDetails(${currentPage}, ${idx})">
            <img src="${post.img}" alt="${post.title}"
                 class="h-[562px] w-full object-cover rounded-3xl shadow-xl border border-gray-200">
            <div class="absolute inset-0 bg-black/30 rounded-3xl"></div>
            <h1 class="absolute bottom-10 left-6 font-bold text-4xl text-white drop-shadow-lg">${post.title}</h1>
          </div>
        `;
  });

  renderPageNumbers();

  prevBtn.disabled = currentPage === 0;
  nextBtn.disabled = currentPage === pages.length - 1;
}

// Show details of a post
function showDetails(pageIndex, postIndex) {
  const post = pages[pageIndex][postIndex];
  postsContainer.innerHTML = `
        <div class="relative w-full">
          <img src="${post.img}" alt="${post.title}"
               class="h-[562px] w-full object-cover rounded-3xl shadow-xl border border-gray-200">
          <div class="absolute inset-0 bg-black/20 rounded-3xl"></div>
          <h1 class="absolute bottom-10 left-6 font-bold text-4xl text-white drop-shadow-lg">${post.title}</h1>
        </div>
        <div class="p-6 bg-white rounded-2xl shadow">
          <h2 class="text-2xl font-bold mb-4">${post.title}</h2>
          <p class="text-gray-700">${post.desc}</p>
          <button onclick="renderPosts()" class="mt-4 px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700">
            ← Back to Posts
          </button>
        </div>
      `;
}

// Render page numbers
function renderPageNumbers() {
  pageNumbersContainer.innerHTML = "";
  pages.forEach((_, index) => {
    const btn = document.createElement("button");
    btn.textContent = index + 1;
    btn.className =
      "px-3 py-1 rounded " +
      (index === currentPage
        ? "bg-cyan-600 text-white font-bold"
        : "bg-gray-200 hover:bg-gray-300");

    btn.addEventListener("click", () => {
      currentPage = index;
      renderPosts();
    });

    pageNumbersContainer.appendChild(btn);
  });
}

// Prev / Next
prevBtn.addEventListener("click", () => {
  if (currentPage > 0) {
    currentPage--;
    renderPosts();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentPage < pages.length - 1) {
    currentPage++;
    renderPosts();
  }
});

// Initial load
renderPosts();
// --- SEARCH FUNCTION ---
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase().trim();

  if (!query) {
    // reset when cleared (including when ❌ is pressed)
    renderPosts();
    return;
  }

  postsContainer.innerHTML = "";
  pages.forEach((page, pageIndex) => {
    page.forEach((post, postIndex) => {
      if (post.title.toLowerCase().includes(query) || post.desc.toLowerCase().includes(query)) {
        postsContainer.innerHTML += `
          <div class="relative w-full cursor-pointer" onclick="showDetails(${pageIndex}, ${postIndex})">
            <img src="${post.img}" alt="${post.title}"
                 class="h-[400px] w-full object-cover rounded-3xl shadow-xl border border-gray-200">
            <div class="absolute inset-0 bg-black/30 rounded-3xl"></div>
            <h1 class="absolute bottom-10 left-6 font-bold text-3xl text-white drop-shadow-lg">${post.title}</h1>
          </div>
        `;
      }
    });
  });
});
