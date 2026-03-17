// ================= DIAPORAMA AUTOMATIQUE =================
document.addEventListener("DOMContentLoaded", function() {
  const slides = document.querySelectorAll(".slide");
  let currentIndex = 0;

  function showNextSlide() {
    // Retirer la classe active de la slide actuelle
    slides[currentIndex].classList.remove("active");
    
    // Passer à la slide suivante
    currentIndex = (currentIndex + 1) % slides.length;
    
    // Ajouter la classe active à la nouvelle slide
    slides[currentIndex].classList.add("active");
  }

  // Changer de slide toutes les 5 secondes
  setInterval(showNextSlide, 5000);
});

// ================= AVIONS ANIMÉS =================
function createPlanes() {
  const planesContainer = document.createElement('div');
  planesContainer.className = 'planes-container';
  document.body.appendChild(planesContainer);

  const planeEmojis = ['✈️', '🛩️', '🛫'];
  const numberOfPlanes = 8;

  for (let i = 0; i < numberOfPlanes; i++) {
    const plane = document.createElement('div');
    plane.className = 'plane';
    plane.textContent = planeEmojis[Math.floor(Math.random() * planeEmojis.length)];
    
    // Position verticale aléatoire
    plane.style.top = Math.random() * 100 + '%';
    
    // Durée d'animation aléatoire (entre 15 et 30 secondes)
    const duration = 5 + Math.random() * 5;
    plane.style.animationDuration = duration + 's';
    
    // Délai aléatoire pour le démarrage
    plane.style.animationDelay = Math.random() * 10 + 's';
    
    // Opacité aléatoire
    plane.style.opacity = 0.2 + Math.random() * 0.3;
    
    planesContainer.appendChild(plane);
  }
}

// Créer les avions au chargement
createPlanes();

// ================= ANIMATION BOUTON CTA =================
const ctaButton = document.querySelector('.cta-button');

if (ctaButton) {
  const colors = [
    'linear-gradient(135deg, #ff6b6b, #ee5a6f)',
    'linear-gradient(135deg, #4ecdc4, #44a08d)',
    'linear-gradient(135deg, #45b7d1, #2980b9)',
    'linear-gradient(135deg, #f39c12, #e67e22)',
    'linear-gradient(135deg, #9b59b6, #8e44ad)'
  ];
  let colorIndex = 0;

  ctaButton.addEventListener('mouseenter', function() {
    colorIndex = (colorIndex + 1) % colors.length;
    this.style.background = colors[colorIndex];
  });

  ctaButton.addEventListener('mouseleave', function() {
    this.style.background = 'linear-gradient(135deg, #ffa500, #ff6347)';
  });
}

// ================= SMOOTH SCROLLING =================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ================= ANIMATION MENU NAVIGATION =================
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
  link.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-3px)';
  });
  link.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
  });
});

// ================= ANIMATION DES CARTES AU SCROLL =================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observer les cartes
document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.card, .promo-card');
  cards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `all 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
  });
});

// ================= PARALLAX EFFECT SUR LE HERO =================
window.addEventListener('scroll', function() {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector('.hero-content');
  
  if (hero && scrolled < window.innerHeight) {
    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    hero.style.opacity = 1 - (scrolled / window.innerHeight);
  }
});