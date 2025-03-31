// JavaScript pour le menu déroulant
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

// Fermer le menu si on clique en dehors
window.onclick = function(event) {
    const menu = document.getElementById('menu');
    if (!event.target.matches('.menu-button')) {
        if (menu.classList.contains('active')) {
            menu.classList.remove('active');
        }
    }
};

// Slider manuel
let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  if (index >= slides.length) currentSlide = 0;
  if (index < 0) currentSlide = slides.length - 1;
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === currentSlide);
  });
}

function nextSlide() {
  currentSlide++;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide--;
  showSlide(currentSlide);
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
  showSlide(currentSlide);
});

// Liste des messages publicitaires
const messages = [
  "Nouvel achat +509******35",
  "Nouvel achat plan 30jou +509******19",
  "Nouvel achat +509******99",
  "Nouvel achat plan 15jou +509******00",
  "Nouvel achat +509******54",
  "Nouvel achat plan à Vie +509******76",
  "Nouvel achat +509******28",
  "Nouvel achat plan à Vie +509******89",
  "Nouvel achat +509******40",
  "Nouvel achat plan à Vie +509******05",
  "Nouvel achat +509******20",
  "Nouvel achat +509******11",
  "Nouvel achat plan 15jou +509******39",
  "Nouvel achat +509******13",
  "Nouvel achat plan 5jou +509******09",
  "Nouvel achat +509******22",
  "Nouvel achat plan à Vie +509******15",
  "Nouvel achat +509******90",
  "Nouvel achat +509******62",
  "Nouvel achat plan 30jou +509******35"
];

// Fonction pour afficher un message aléatoire
function afficherPub() {
  const pubText = document.getElementById("pub-text");
  const randomIndex = Math.floor(Math.random() * messages.length);
  pubText.textContent = messages[randomIndex];

  // Afficher le texte
  pubText.classList.add("show");

  // Disparaître après 3 secondes
  setTimeout(() => {
    pubText.classList.remove("show");
  }, 3000);
}


// Afficher une pub toutes les 25 secondes après la première
setInterval(afficherPub, 20000);

// Désactiver le clic droit sur la page
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

// Désactiver les raccourcis clavier (Ctrl+S, Ctrl+Shift+I, etc.)
document.addEventListener('keydown', function (e) {
    // Empêcher Ctrl+S (enregistrer)
    if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
    }
    // Empêcher Ctrl+Shift+I (outils de développement)
    if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        e.preventDefault();
    }
    // Empêcher Ctrl+U (afficher le code source)
    if (e.ctrlKey && e.key === 'u') {
        e.preventDefault();
    }
});
// Animation supplémentaire pour le badge de réduction
const discountBadge = document.querySelector('.discount-badge');

setInterval(() => {
    discountBadge.style.transform = 'scale(1.1)';
    setTimeout(() => {
        discountBadge.style.transform = 'scale(1)';
    }, 300);
}, 3000);