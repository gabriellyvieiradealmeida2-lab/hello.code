/* =====================================================
  BERNOULLI — ADA LOVELACE
  ===================================================== */

/* MENU MOBILE */
const menuButton = document.getElementById("menuButton");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
   navigation.classList.toggle("active");
});

/* FECHAR MENU AO CLICAR */
const links = document.querySelectorAll(".navigation a");

links.forEach(link => {
   link.addEventListener("click", () => {
       navigation.classList.remove("active");
   });
});

/* =====================================================
  ANIMAÇÃO DOS ELEMENTOS
  ===================================================== */
const elements = document.querySelectorAll(
   ".study-card, .fact, .biography-content, .contribution-content"
);

const observer = new IntersectionObserver(
   (entries) => {
       entries.forEach(entry => {
           if (entry.isIntersecting) {
               entry.target.style.opacity = "1";
               entry.target.style.transform =
                   "translateY(0)";
               observer.unobserve(entry.target);
           }
       });
   },
   {
       threshold: 0.15
   }
);

elements.forEach(element => {
   element.style.opacity = "0";
   element.style.transform = "translateY(25px)";
   element.style.transition =
       "opacity 0.7s ease, transform 0.7s ease";
   observer.observe(element);
});


