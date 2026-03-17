// contact.js

// Elements du DOM
const form = document.getElementById('contact-form');
const modal = document.getElementById('confirmation-modal');

// Validation du formulaire
function validateForm() {
    let isValid = true;
    const errors = {};

    // Nom
    const nom = document.getElementById('nom');
    if (!nom.value.trim()) {
        errors.nom = 'Le nom est requis';
        isValid = false;
    } else if (nom.value.trim().length < 2) {
        errors.nom = 'Le nom doit contenir au moins 2 caracteres';
        isValid = false;
    }

    // Email
    const email = document.getElementById('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim()) {
        errors.email = 'L\'email est requis';
        isValid = false;
    } else if (!emailRegex.test(email.value)) {
        errors.email = 'Format d\'email invalide';
        isValid = false;
    }

    // Telephone (optionnel mais valide si rempli)
    const telephone = document.getElementById('telephone');
    if (telephone.value.trim()) {
        const phoneRegex = /^(\+33|0)[1-9](\d{2}){4}$/;
        if (!phoneRegex.test(telephone.value.replace(/\s/g, ''))) {
            errors.telephone = 'Format de telephone invalide';
            isValid = false;
        }
    }

    // Sujet
    const sujet = document.getElementById('sujet');
    if (!sujet.value) {
        errors.sujet = 'Veuillez selectionner un sujet';
        isValid = false;
    }

    // Message
    const message = document.getElementById('message');
    if (!message.value.trim()) {
        errors.message = 'Le message est requis';
        isValid = false;
    } else if (message.value.trim().length < 10) {
        errors.message = 'Le message doit contenir au moins 10 caracteres';
        isValid = false;
    }

    // Afficher les erreurs
    displayErrors(errors);

    return isValid;
}

// Afficher les erreurs
function displayErrors(errors) {
    // Reinitialiser toutes les erreurs
    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
    document.querySelectorAll('input, select, textarea').forEach(el => el.classList.remove('error'));

    // Afficher les nouvelles erreurs
    for (const [field, message] of Object.entries(errors)) {
        const errorEl = document.getElementById('error-' + field);
        if (errorEl) {
            errorEl.textContent = message;
        }
        
        const inputEl = document.getElementById(field);
        if (inputEl) {
            inputEl.classList.add('error');
        }
    }
}

// Soumettre le formulaire
form.addEventListener('submit', function(e) {
    e.preventDefault();

    if (!validateForm()) {
        // Scroll vers la premiere erreur
        const firstError = document.querySelector('.error-message:not(:empty)');
        if (firstError) {
            firstError.parentElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        return;
    }

    // Recuperer les donnees du formulaire
    const formData = {
        nom: document.getElementById('nom').value,
        email: document.getElementById('email').value,
        telephone: document.getElementById('telephone').value,
        sujet: document.getElementById('sujet').value,
        message: document.getElementById('message').value,
        newsletter: document.getElementById('newsletter').checked
    };

    // Afficher le modal de confirmation
    showConfirmationModal(formData);

    // Reinitialiser le formulaire
    form.reset();
});

// Afficher le modal de confirmation
function showConfirmationModal(data) {
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// Fermer le modal
function closeModal() {
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

// Evenement pour fermer le modal
document.querySelector('.close-modal').addEventListener('click', closeModal);

modal.addEventListener('click', function(e) {
    if (e.target === modal) {
        closeModal();
    }
});

// Validation en temps reel
document.getElementById('nom').addEventListener('blur', function() {
    if (this.value.trim()) {
        const errorEl = document.getElementById('error-nom');
        if (this.value.trim().length < 2) {
            errorEl.textContent = 'Le nom doit contenir au moins 2 caracteres';
            this.classList.add('error');
        } else {
            errorEl.textContent = '';
            this.classList.remove('error');
        }
    }
});

document.getElementById('email').addEventListener('blur', function() {
    if (this.value.trim()) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const errorEl = document.getElementById('error-email');
        if (!emailRegex.test(this.value)) {
            errorEl.textContent = 'Format d\'email invalide';
            this.classList.add('error');
        } else {
            errorEl.textContent = '';
            this.classList.remove('error');
        }
    }
});

document.getElementById('telephone').addEventListener('blur', function() {
    if (this.value.trim()) {
        const phoneRegex = /^(\+33|0)[1-9](\d{2}){4}$/;
        const errorEl = document.getElementById('error-telephone');
        if (!phoneRegex.test(this.value.replace(/\s/g, ''))) {
            errorEl.textContent = 'Format de telephone invalide (ex: +33 6 12 34 56 78)';
            this.classList.add('error');
        } else {
            errorEl.textContent = '';
            this.classList.remove('error');
        }
    }
});

document.getElementById('message').addEventListener('blur', function() {
    if (this.value.trim()) {
        const errorEl = document.getElementById('error-message');
        if (this.value.trim().length < 10) {
            errorEl.textContent = 'Le message doit contenir au moins 10 caracteres';
            this.classList.add('error');
        } else {
            errorEl.textContent = '';
            this.classList.remove('error');
        }
    }
});

// Animation des cartes FAQ
function setupFAQAnimation() {
    const faqCards = document.querySelectorAll('.faq-card');
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry, index) {
            if (entry.isIntersecting) {
                setTimeout(function() {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    faqCards.forEach(function(card) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease';
        observer.observe(card);
    });
}

// Animation de la carte
function setupMapAnimation() {
    const mapContainer = document.querySelector('.map-container');
    
    if (mapContainer) {
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        
        mapContainer.style.opacity = '0';
        mapContainer.style.transform = 'translateY(30px)';
        mapContainer.style.transition = 'all 0.8s ease';
        observer.observe(mapContainer);
    }
}

// Animation des info-items au survol
function setupInfoItemsAnimation() {
    const infoItems = document.querySelectorAll('.info-item');
    
    infoItems.forEach(function(item, index) {
        // Animation d'entree
        setTimeout(function() {
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, index * 150);
        
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        item.style.transition = 'all 0.5s ease';
    });
}

// Smooth scroll pour les liens de navigation
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
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

// Compteur de caracteres pour le message
function setupCharacterCounter() {
    const messageField = document.getElementById('message');
    const maxLength = 500;
    
    // Creer un compteur
    const counter = document.createElement('div');
    counter.style.textAlign = 'right';
    counter.style.fontSize = '0.85rem';
    counter.style.color = '#999';
    counter.style.marginTop = '0.3rem';
    
    messageField.parentElement.appendChild(counter);
    
    messageField.addEventListener('input', function() {
        const remaining = this.value.length;
        counter.textContent = remaining + ' caracteres';
        
        if (remaining > maxLength * 0.9) {
            counter.style.color = '#ff6b6b';
        } else {
            counter.style.color = '#999';
        }
    });
}

// Animation du formulaire au chargement
function setupFormAnimation() {
    const formGroups = document.querySelectorAll('.form-group');
    
    formGroups.forEach(function(group, index) {
        setTimeout(function() {
            group.style.opacity = '1';
            group.style.transform = 'translateY(0)';
        }, index * 50);
        
        group.style.opacity = '0';
        group.style.transform = 'translateY(10px)';
        group.style.transition = 'all 0.4s ease';
    });
}

// Effet de typing dans le placeholder
function setupTypingPlaceholder() {
    const messageField = document.getElementById('message');
    const originalPlaceholder = messageField.placeholder;
    
    messageField.addEventListener('focus', function() {
        if (!this.value) {
            this.placeholder = '';
            let index = 0;
            const typingInterval = setInterval(function() {
                if (index < originalPlaceholder.length) {
                    messageField.placeholder += originalPlaceholder[index];
                    index++;
                } else {
                    clearInterval(typingInterval);
                }
            }, 50);
        }
    });
    
    messageField.addEventListener('blur', function() {
        if (!this.value) {
            this.placeholder = originalPlaceholder;
        }
    });
}

// Effet parallaxe sur le hero
function setupParallax() {
    const hero = document.querySelector('.hero-contact');
    
    if (hero) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * 0.5;
            
            hero.style.backgroundPositionY = rate + 'px';
        });
    }
}

// Animation des liens sociaux
function setupSocialLinksAnimation() {
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(function(link, index) {
        setTimeout(function() {
            link.style.opacity = '1';
            link.style.transform = 'translateX(0)';
        }, index * 100);
        
        link.style.opacity = '0';
        link.style.transform = 'translateX(-10px)';
        link.style.transition = 'all 0.4s ease';
    });
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    setupFAQAnimation();
    setupMapAnimation();
    setupInfoItemsAnimation();
    setupSmoothScroll();
    setupCharacterCounter();
    setupFormAnimation();
    setupTypingPlaceholder();
    setupParallax();
    setupSocialLinksAnimation();
    
    // Animation d'entree pour le contenu
    document.body.style.opacity = '0';
    setTimeout(function() {
        document.body.style.transition = 'opacity 0.5s';
        document.body.style.opacity = '1';
    }, 100);
});

// Gestion du clavier (Escape pour fermer le modal)
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
        closeModal();
    }
});