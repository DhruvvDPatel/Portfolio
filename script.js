const typingElement = document.getElementById("typing");

const words = [
  "Frontend Developer",
  "Web Developer",
  "Problem Solver",
  "Tech Enthusiast",
  "IT Undergraduate",
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];

  if (!deleting) {
    typingElement.textContent = currentWord.substring(0, charIndex + 1);

    charIndex++;

    if (charIndex === currentWord.length) {
      deleting = true;

      setTimeout(typeEffect, 1500);

      return;
    }
  } else {
    typingElement.textContent = currentWord.substring(0, charIndex - 1);

    charIndex--;

    if (charIndex === 0) {
      deleting = false;

      wordIndex++;

      if (wordIndex === words.length) wordIndex = 0;
    }
  }

  setTimeout(typeEffect, deleting ? 50 : 120);
}

typeEffect();

/*=========================================
        MOBILE MENU
=========================================*/

const menu = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-links");

menu.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

/*=========================================
        BACK TO TOP BUTTON
=========================================*/

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

topBtn.onclick = () => {
  window.scrollTo({
    top: 0,

    behavior: "smooth",
  });
};

/*=========================================
        ACTIVE NAV LINK
=========================================*/

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const top = section.offsetTop - 150;

    if (pageYOffset >= top) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

/*=========================================
        SCROLL REVEAL
=========================================*/

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show-animation");
      }
    });
  },
  {
    threshold: 0.15,
  },
);

document
  .querySelectorAll(".card,.project-card,.stat,.timeline-item,.skill")
  .forEach((el) => {
    el.classList.add("hidden-animation");

    observer.observe(el);
  });

/*=========================================
        CURRENT YEAR
=========================================*/

const year = new Date().getFullYear();

const footerText = document.querySelector("footer p:last-child");

if (footerText) {
  footerText.innerHTML = `© ${year} Dhruv Patel | All Rights Reserved`;
}
