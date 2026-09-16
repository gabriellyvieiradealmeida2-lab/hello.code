/* =====================================================
  BERNOULLI — JAVASCRIPT
  ===================================================== */

/* =====================================================
  MENU MOBILE
  ===================================================== */
const menuButton = document.getElementById("menuButton");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
   navigation.classList.toggle("active");
});

/* Fechar menu ao clicar em um link */
const navigationLinks =
   document.querySelectorAll(".navigation a");

navigationLinks.forEach(link => {
   link.addEventListener("click", () => {
       navigation.classList.remove("active");
   });
});

/* =====================================================
  BUSCA DE CIENTISTAS
  ===================================================== */
const searchInput =
   document.getElementById("searchInput");
const searchButton =
   document.getElementById("searchButton");
const scientistCards =
   document.querySelectorAll(".scientist-card");
const noResults =
   document.getElementById("noResults");

function searchScientists() {
   const search =
       searchInput.value
           .toLowerCase()
           .trim();

   let found = false;

   scientistCards.forEach(card => {
       const name =
           card.dataset.name.toLowerCase();

       if (
           name.includes(search) ||
           search === ""
       ) {
           card.style.display = "block";
           found = true;
       } else {
           card.style.display = "none";
       }
   });

   if (found) {
       noResults.style.display = "none";
   } else {
       noResults.style.display = "block";
   }
}

/* Buscar enquanto digita */
searchInput.addEventListener(
   "input",
   searchScientists
);

/* Buscar ao clicar na lupa */
searchButton.addEventListener(
   "click",
   searchScientists
);

/* =====================================================
  ANIMAÇÃO AO ENTRAR NA TELA
  ===================================================== */
const animatedElements =
   document.querySelectorAll(
       ".scientist-card, .blog-card, .about-content"
   );

const observer =
   new IntersectionObserver(
       (entries) => {
           entries.forEach(entry => {
               if (entry.isIntersecting) {
                   entry.target.classList.add("visible");
                   observer.unobserve(entry.target);
               }
           });
       },
       {
           threshold: 0.15
       }
   );

animatedElements.forEach(element => {
   observer.observe(element);
});

/* =====================================================
  EFEITO DE ATRASO NOS CARDS
  ===================================================== */
scientistCards.forEach(
   (card, index) => {
       card.style.transitionDelay =
           `${index * 0.12}s`;
   }
);

const blogCards =
   document.querySelectorAll(".blog-card");

blogCards.forEach(
   (card, index) => {
       card.style.transitionDelay =
           `${index * 0.12}s`;
   }
);


