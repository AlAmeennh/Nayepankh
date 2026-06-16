// =========================
// Dark Mode Toggle
// =========================

const themeToggle = document.getElementById("themeToggle");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    localStorage.setItem("theme", "light");
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  }
});

// =========================
// Animated Counters
// =========================

const counters = document.querySelectorAll(".counter");

const startCounter = (counter) => {
  const target = +counter.getAttribute("data-target");
  let count = 0;

  const increment = target / 100;

  const updateCounter = () => {
    count += increment;

    if (count < target) {
      counter.innerText = Math.floor(count);
      requestAnimationFrame(updateCounter);
    } else {
      counter.innerText = target + "+";
    }
  };

  updateCounter();
};

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        startCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 },
);

counters.forEach((counter) => {
  counterObserver.observe(counter);
});

// =========================
// Volunteer Registration
// =========================

const volunteerForm = document.getElementById("volunteerForm");

if (volunteerForm) {
  volunteerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputs = volunteerForm.querySelectorAll("input, textarea");

    const volunteerData = {
      name: inputs[0].value,
      email: inputs[1].value,
      phone: inputs[2].value,
      city: inputs[3].value,
      skills: inputs[4].value,
      availability: inputs[5].value,
    };

    let volunteers = JSON.parse(localStorage.getItem("volunteers")) || [];

    volunteers.push(volunteerData);

    localStorage.setItem("volunteers", JSON.stringify(volunteers));

    alert("Thank you for registering as a volunteer!");

    volunteerForm.reset();
  });
}

// =========================
// Donation Cards
// =========================

const donationCards = document.querySelectorAll(".donation-card");

let selectedAmount = "";

donationCards.forEach((card) => {
  card.addEventListener("click", () => {
    donationCards.forEach((c) => {
      c.style.border = "none";
    });

    card.style.border = "3px solid #2E7D32";

    selectedAmount = card.textContent;
  });
});

const donateBtn = document.querySelector(".donate-btn");

if (donateBtn) {
  donateBtn.addEventListener("click", () => {
    if (selectedAmount === "") {
      alert("Please select a donation amount.");
      return;
    }

    alert(`Thank you for donating ${selectedAmount} to NayePankh Foundation!`);
  });
}

// =========================
// Testimonials Slider
// =========================

const testimonials = document.querySelectorAll(".testimonial");

let currentTestimonial = 0;

function showTestimonial() {
  testimonials.forEach((item) => {
    item.classList.remove("active");
  });

  testimonials[currentTestimonial].classList.add("active");

  currentTestimonial++;

  if (currentTestimonial >= testimonials.length) {
    currentTestimonial = 0;
  }
}

if (testimonials.length > 0) {
  showTestimonial();

  setInterval(showTestimonial, 4000);
}

// =========================
// Back To Top Button
// =========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// =========================
// Navbar Active Link
// =========================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;

    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// =========================
// Gallery Lightbox
// =========================

const galleryImages = document.querySelectorAll(".gallery img");

galleryImages.forEach((img) => {
  img.addEventListener("click", () => {
    const overlay = document.createElement("div");

    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.background = "rgba(0,0,0,0.9)";
    overlay.style.display = "flex";
    overlay.style.justifyContent = "center";
    overlay.style.alignItems = "center";
    overlay.style.zIndex = "9999";

    const image = document.createElement("img");

    image.src = img.src;
    image.style.maxWidth = "90%";
    image.style.maxHeight = "90%";
    image.style.borderRadius = "15px";

    overlay.appendChild(image);

    document.body.appendChild(overlay);

    overlay.addEventListener("click", () => {
      overlay.remove();
    });
  });
});

// =========================
// Contact Form
// =========================

const contactForm = document.querySelector("#contact form");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    alert("Thank you! Your message has been sent successfully.");

    contactForm.reset();
  });
}

// =========================
// Welcome Message
// =========================

window.addEventListener("load", () => {
  console.log("Welcome to NayePankh Foundation Website");
});
