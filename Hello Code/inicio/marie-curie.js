/* =====================================================
  BERNOULLI — MARIE CURIE
  JavaScript
  ===================================================== */

/* ================= MENU MOBILE ================= */
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
if (menuToggle && nav) {
   menuToggle.addEventListener("click", function () {
       nav.classList.toggle("active");
   });
}

/* ================= FECHAR MENU ================= */
const navLinks = document.querySelectorAll(".nav a");
navLinks.forEach(function (link) {
   link.addEventListener("click", function () {
       nav.classList.remove("active");
   });
});

/* ================= ANIMAÇÕES ================= */
const animatedElements = document.querySelectorAll(
   ".section, .radioactivity, .nobel-card, .study-card, .contribution, .curiosity-card, .legacy"
);

const observer = new IntersectionObserver(
   function (entries) {
       entries.forEach(function (entry) {
           if (entry.isIntersecting) {
               entry.target.classList.add("show");
               observer.unobserve(entry.target);
           }
       });
   },
   {
       threshold: 0.12
   }
);

animatedElements.forEach(function (element) {
   element.classList.add("hidden");
   observer.observe(element);
});

/* ================= BOTÃO VOLTAR ================= */
const backButton = document.querySelector(".back-button");
if (backButton) {
   backButton.addEventListener("click", function () {
       window.location.href = "index.html";
   });
}
