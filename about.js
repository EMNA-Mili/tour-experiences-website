// about.js

// Animation des statistiques au scroll
function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    const statsSection = document.querySelector('.stats-section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                statNumbers.forEach(stat => {
                    const target = parseInt(stat.getAttribute('data-target'));
                    animateNumber(stat, target);
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    if (statsSection) {
        observer.observe(statsSection);
    }
}

// Fonction pour animer les nombres
function animateNumber(element, target) {
    let current = 0;
    const increment = target / 100;
    const duration = 2000; // 2 secondes
    const stepTime = duration / 100;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target.toLocaleString();
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current).toLocaleString();
        }
    }, stepTime);
}

// Animation des éléments au scroll avec IntersectionObserver
function setupScrollAnimations() {
    const animatedElements = document.querySelectorAll('.story-text, .story-image, .value-card, .team-member');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// Effet parallaxe subtil sur le hero
function setupParallax() {
    const hero = document.querySelector('.hero-about');
    
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * 0.5;
            
            hero.style.backgroundPositionY = `${rate}px`;
        });
    }
}

// Animation de fade-in pour les textes de l'histoire
function animateStoryText() {
    const storyParagraphs = document.querySelectorAll('.story-text p');
    
    // Assurer que le texte est visible immédiatement
    storyParagraphs.forEach(p => {
        p.style.opacity = '1';
        p.style.transform = 'translateX(0)';
    });
}

// Effet hover sur les cartes de valeurs
function setupValueCardsInteraction() {
    const valueCards = document.querySelectorAll('.value-card');
    
    valueCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            this.style.color = 'white';
            
            const icon = this.querySelector('.value-icon');
            const title = this.querySelector('h3');
            const text = this.querySelector('p');
            
            if (icon) icon.style.transform = 'scale(1.2) rotate(10deg)';
            if (title) title.style.color = 'white';
            if (text) text.style.color = 'rgba(255,255,255,0.9)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.background = 'white';
            this.style.color = '#333';
            
            const icon = this.querySelector('.value-icon');
            const title = this.querySelector('h3');
            const text = this.querySelector('p');
            
            if (icon) icon.style.transform = 'scale(1) rotate(0deg)';
            if (title) title.style.color = '#667eea';
            if (text) text.style.color = '#666';
        });
    });
}

// Animation de l'image de l'histoire avec effet de zoom
function setupStoryImageAnimation() {
    const storyImage = document.querySelector('.story-image img');
    
    if (storyImage) {
        // Assurer que l'image est visible immédiatement
        storyImage.style.transform = 'scale(1)';
        storyImage.style.opacity = '1';
    }
}

// Effet de typing pour les citations des membres de l'équipe
function setupTeamQuotes() {
    const teamMembers = document.querySelectorAll('.team-member');
    
    teamMembers.forEach(member => {
        const overlay = member.querySelector('.member-overlay p');
        if (overlay) {
            const originalText = overlay.textContent;
            overlay.textContent = '';
            
            member.addEventListener('mouseenter', function() {
                let index = 0;
                overlay.textContent = '';
                
                const typingInterval = setInterval(() => {
                    if (index < originalText.length) {
                        overlay.textContent += originalText[index];
                        index++;
                    } else {
                        clearInterval(typingInterval);
                    }
                }, 30);
            });
            
            member.addEventListener('mouseleave', function() {
                overlay.textContent = originalText;
            });
        }
    });
}

// Smooth scroll pour les liens de navigation
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Animation de la section équipe avec effet de vague
function setupTeamWaveAnimation() {
    const teamMembers = document.querySelectorAll('.team-member');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0) scale(1)';
                }, index * 150);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    teamMembers.forEach(member => {
        member.style.opacity = '0';
        member.style.transform = 'translateY(30px) scale(0.95)';
        member.style.transition = 'all 0.6s ease';
        observer.observe(member);
    });
}

// Animation des icônes de valeurs au scroll
function setupValueIconsAnimation() {
    const valueIcons = document.querySelectorAll('.value-icon');
    
    valueIcons.forEach(icon => {
        icon.style.transition = 'all 0.3s ease';
    });
}

// Effet de particules légères sur le hero (optionnel)
function setupHeroParticles() {
    const hero = document.querySelector('.hero-about');
    
    if (hero && window.innerWidth > 768) {
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'absolute';
            particle.style.width = '4px';
            particle.style.height = '4px';
            particle.style.background = 'rgba(255,255,255,0.5)';
            particle.style.borderRadius = '50%';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animation = `float ${5 + Math.random() * 10}s ease-in-out infinite`;
            particle.style.animationDelay = Math.random() * 5 + 's';
            
            hero.appendChild(particle);
        }
        
        // Ajout de l'animation CSS pour les particules
        const style = document.createElement('style');
        style.textContent = `
            @keyframes float {
                0%, 100% { transform: translateY(0) translateX(0); opacity: 0; }
                10% { opacity: 1; }
                90% { opacity: 1; }
                50% { transform: translateY(-100px) translateX(50px); }
            }
        `;
        document.head.appendChild(style);
    }
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    // Initialiser toutes les animations et interactions
    animateStats();
    setupScrollAnimations();
    setupParallax();
    animateStoryText();
    setupValueCardsInteraction();
    setupStoryImageAnimation();
    setupTeamQuotes();
    setupSmoothScroll();
    setupTeamWaveAnimation();
    setupValueIconsAnimation();
    setupHeroParticles();
    
    // Animation d'entrée pour le contenu
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s';
        document.body.style.opacity = '1';
    }, 100);
});

// Effet de loading au changement de page
window.addEventListener('beforeunload', function() {
    document.body.style.opacity = '0';
});