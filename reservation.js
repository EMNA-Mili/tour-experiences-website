// reservation.js

// Prix des destinations
const destinationPrices = {
    'bali': 899,
    'maldives': 1899,
    'marrakech': 549,
    'patagonie': 1299,
    'santorini': 1150,
    'tokyo': 1399,
    'kenya': 2199,
    'thailande': 799,
    'islande': 1599,
    'amalfi': 1099,
    'dubai': 1799,
    'croatie': 699
};

// Prix des hébergements supplémentaires
const hebergementPrices = {
    'standard': 0,
    'confort': 150,
    'luxe': 350
};

// Éléments du DOM
const form = document.getElementById('reservation-form');
const summaryContent = document.getElementById('summary-content');
const modal = document.getElementById('confirmation-modal');
const confirmationBody = document.getElementById('confirmation-body');

// Données de réservation
let reservationData = {};

// Mise à jour du récapitulatif en temps réel
function updateSummary() {
    const typeVoyage = document.getElementById('type-voyage').value;
    const destination = document.getElementById('destination').value;
    const dateDepart = document.getElementById('date-depart').value;
    const dateRetour = document.getElementById('date-retour').value;
    const nbAdultes = parseInt(document.getElementById('nb-adultes').value) || 0;
    const nbEnfants = parseInt(document.getElementById('nb-enfants').value) || 0;
    const hebergement = document.getElementById('hebergement').value;
    const assurance = document.getElementById('assurance').checked;

    // Vérifier si au moins une destination est sélectionnée
    if (!destination) {
        summaryContent.innerHTML = '<p class="summary-empty">Remplissez le formulaire pour voir le récapitulatif de votre réservation</p>';
        return;
    }

    // Calculer le prix
    const prixBase = destinationPrices[destination] || 0;
    const prixHebergement = hebergementPrices[hebergement] || 0;
    const prixAssurance = assurance ? 50 : 0;
    const totalPassagers = nbAdultes + nbEnfants;
    const prixTotal = (prixBase + prixHebergement) * totalPassagers + prixAssurance;

    // Calculer le nombre de jours
    let nbJours = '';
    if (dateDepart && dateRetour) {
        const depart = new Date(dateDepart);
        const retour = new Date(dateRetour);
        const diffTime = Math.abs(retour - depart);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        nbJours = `${diffDays} jour${diffDays > 1 ? 's' : ''}`;
    }

    // Construire le récapitulatif
    let summaryHTML = '';

    if (destination) {
        const destText = document.getElementById('destination').options[document.getElementById('destination').selectedIndex].text;
        summaryHTML += `
            <div class="summary-item">
                <h4>Destination</h4>
                <p>${destText.split(' - ')[0]}</p>
            </div>
        `;
    }

    if (dateDepart && dateRetour) {
        summaryHTML += `
            <div class="summary-item">
                <h4>Dates</h4>
                <p>Du ${formatDate(dateDepart)}</p>
                <p>Au ${formatDate(dateRetour)}</p>
                ${nbJours ? `<p><strong>${nbJours}</strong></p>` : ''}
            </div>
        `;
    }

    if (totalPassagers > 0) {
        summaryHTML += `
            <div class="summary-item">
                <h4>Passagers</h4>
                <p>${nbAdultes} adulte${nbAdultes > 1 ? 's' : ''}</p>
                ${nbEnfants > 0 ? `<p>${nbEnfants} enfant${nbEnfants > 1 ? 's' : ''}</p>` : ''}
            </div>
        `;
    }

    // Prix détaillé
    summaryHTML += `
        <div class="summary-price">
            <div class="price-line">
                <span>Prix de base (${totalPassagers}x)</span>
                <span>${prixBase * totalPassagers}€</span>
            </div>
    `;

    if (prixHebergement > 0) {
        summaryHTML += `
            <div class="price-line">
                <span>Hébergement ${hebergement}</span>
                <span>+${prixHebergement * totalPassagers}€</span>
            </div>
        `;
    }

    if (assurance) {
        summaryHTML += `
            <div class="price-line">
                <span>Assurance annulation</span>
                <span>+${prixAssurance}€</span>
            </div>
        `;
    }

    summaryHTML += `
            <div class="price-line total">
                <span>Total</span>
                <span>${prixTotal}€</span>
            </div>
        </div>
    `;

    summaryContent.innerHTML = summaryHTML;
}

// Formatter la date
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('fr-FR', options);
}

// Validation du formulaire
function validateForm() {
    let isValid = true;
    const errors = {};

    // Type de voyage
    const typeVoyage = document.getElementById('type-voyage');
    if (!typeVoyage.value) {
        errors.typeVoyage = 'Veuillez sélectionner un type de voyage';
        isValid = false;
    }

    // Destination
    const destination = document.getElementById('destination');
    if (!destination.value) {
        errors.destination = 'Veuillez sélectionner une destination';
        isValid = false;
    }

    // Date de départ
    const dateDepart = document.getElementById('date-depart');
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (!dateDepart.value) {
        errors.dateDepart = 'Veuillez sélectionner une date de départ';
        isValid = false;
    } else if (new Date(dateDepart.value) < today) {
        errors.dateDepart = 'La date de départ doit être dans le futur';
        isValid = false;
    }

    // Date de retour
    const dateRetour = document.getElementById('date-retour');
    if (!dateRetour.value) {
        errors.dateRetour = 'Veuillez sélectionner une date de retour';
        isValid = false;
    } else if (dateDepart.value && new Date(dateRetour.value) <= new Date(dateDepart.value)) {
        errors.dateRetour = 'La date de retour doit être après la date de départ';
        isValid = false;
    }

    // Nombre d'adultes
    const nbAdultes = document.getElementById('nb-adultes');
    if (!nbAdultes.value || nbAdultes.value < 1) {
        errors.nbAdultes = 'Au moins 1 adulte requis';
        isValid = false;
    }

    // Nom
    const nom = document.getElementById('nom');
    if (!nom.value.trim()) {
        errors.nom = 'Le nom est requis';
        isValid = false;
    } else if (nom.value.trim().length < 2) {
        errors.nom = 'Le nom doit contenir au moins 2 caractères';
        isValid = false;
    }

    // Prénom
    const prenom = document.getElementById('prenom');
    if (!prenom.value.trim()) {
        errors.prenom = 'Le prénom est requis';
        isValid = false;
    } else if (prenom.value.trim().length < 2) {
        errors.prenom = 'Le prénom doit contenir au moins 2 caractères';
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

    // Téléphone
    const telephone = document.getElementById('telephone');
    const phoneRegex = /^\+216\d{8}$/;
    if (!telephone.value.trim()) {
        errors.telephone = 'Le téléphone est requis';
        isValid = false;
    } else if (!phoneRegex.test(telephone.value.replace(/\s/g, ''))) {
        errors.telephone = 'Format de téléphone invalide';
        isValid = false;
    }

    // Adresse
    const adresse = document.getElementById('adresse');
    if (!adresse.value.trim()) {
        errors.adresse = 'L\'adresse est requise';
        isValid = false;
    }

    // Afficher les erreurs
    displayErrors(errors);

    return isValid;
}

// Afficher les erreurs
function displayErrors(errors) {
    // Réinitialiser toutes les erreurs
    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
    document.querySelectorAll('input, select').forEach(el => el.classList.remove('error'));

    // Afficher les nouvelles erreurs
    for (const [field, message] of Object.entries(errors)) {
        const errorEl = document.getElementById(`error-${field.replace(/([A-Z])/g, '-$1').toLowerCase()}`);
        if (errorEl) {
            errorEl.textContent = message;
        }
        
        const inputEl = document.getElementById(field.replace(/([A-Z])/g, '-$1').toLowerCase());
        if (inputEl) {
            inputEl.classList.add('error');
        }
    }
}

// Soumettre le formulaire
form.addEventListener('submit', function(e) {
    e.preventDefault();

    if (!validateForm()) {
        // Scroll vers la première erreur
        const firstError = document.querySelector('.error-message:not(:empty)');
        if (firstError) {
            firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        return;
    }

    // Récupérer toutes les données
    reservationData = {
        typeVoyage: document.getElementById('type-voyage').value,
        destination: document.getElementById('destination').options[document.getElementById('destination').selectedIndex].text.split(' - ')[0],
        destinationCode: document.getElementById('destination').value,
        dateDepart: document.getElementById('date-depart').value,
        dateRetour: document.getElementById('date-retour').value,
        nbAdultes: parseInt(document.getElementById('nb-adultes').value),
        nbEnfants: parseInt(document.getElementById('nb-enfants').value),
        nom: document.getElementById('nom').value,
        prenom: document.getElementById('prenom').value,
        email: document.getElementById('email').value,
        telephone: document.getElementById('telephone').value,
        adresse: document.getElementById('adresse').value,
        hebergement: document.getElementById('hebergement').value,
        assurance: document.getElementById('assurance').checked,
        commentaires: document.getElementById('commentaires').value
    };

    // Calculer le prix total
    const prixBase = destinationPrices[reservationData.destinationCode];
    const prixHebergement = hebergementPrices[reservationData.hebergement];
    const prixAssurance = reservationData.assurance ? 50 : 0;
    const totalPassagers = reservationData.nbAdultes + reservationData.nbEnfants;
    const prixTotal = (prixBase + prixHebergement) * totalPassagers + prixAssurance;

    // Calculer le nombre de jours
    const depart = new Date(reservationData.dateDepart);
    const retour = new Date(reservationData.dateRetour);
    const diffTime = Math.abs(retour - depart);
    const nbJours = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    // Afficher le modal de confirmation
    showConfirmation(reservationData, prixTotal, nbJours);
});

// Afficher la confirmation
function showConfirmation(data, prix, nbJours) {
    confirmationBody.innerHTML = `
        <div class="success-icon">✅</div>
        <h2>Confirmez votre réservation</h2>
        
        <div class="confirmation-details">
            <div class="detail-row">
                <span class="detail-label">Destination</span>
                <span class="detail-value">${data.destination}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Dates</span>
                <span class="detail-value">${formatDate(data.dateDepart)} - ${formatDate(data.dateRetour)}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Durée</span>
                <span class="detail-value">${nbJours} jour${nbJours > 1 ? 's' : ''}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Passagers</span>
                <span class="detail-value">${data.nbAdultes} adulte${data.nbAdultes > 1 ? 's' : ''}${data.nbEnfants > 0 ? `, ${data.nbEnfants} enfant${data.nbEnfants > 1 ? 's' : ''}` : ''}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Nom complet</span>
                <span class="detail-value">${data.prenom} ${data.nom}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Email</span>
                <span class="detail-value">${data.email}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Téléphone</span>
                <span class="detail-value">${data.telephone}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Hébergement</span>
                <span class="detail-value">${data.hebergement.charAt(0).toUpperCase() + data.hebergement.slice(1)}</span>
            </div>
            ${data.assurance ? `
            <div class="detail-row">
                <span class="detail-label">Assurance</span>
                <span class="detail-value">✓ Incluse</span>
            </div>
            ` : ''}
        </div>

        <div class="total-price">
            Total: ${prix}€
        </div>

        <button class="payment-btn" onclick="proceedToPayment()">
            💳 Procéder au paiement
        </button>
    `;

    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// Procéder au paiement
function proceedToPayment() {
    alert('Redirection vers la plateforme de paiement sécurisée...\n\n(Dans une application réelle, vous seriez redirigé vers Stripe, PayPal, ou un autre système de paiement)');
    
    // Simuler la redirection
    setTimeout(() => {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
        
        // Réinitialiser le formulaire
        form.reset();
        updateSummary();
        
        alert('✅ Réservation confirmée!\n\nVous recevrez un email de confirmation à l\'adresse: ' + reservationData.email);
    }, 2000);
}

// Fermer le modal
document.querySelector('.close-modal').addEventListener('click', () => {
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
});

// Écouter les changements pour mettre à jour le récapitulatif
document.getElementById('type-voyage').addEventListener('change', updateSummary);
document.getElementById('destination').addEventListener('change', updateSummary);
document.getElementById('date-depart').addEventListener('change', updateSummary);
document.getElementById('date-retour').addEventListener('change', updateSummary);
document.getElementById('nb-adultes').addEventListener('input', updateSummary);
document.getElementById('nb-enfants').addEventListener('input', updateSummary);
document.getElementById('hebergement').addEventListener('change', updateSummary);
document.getElementById('assurance').addEventListener('change', updateSummary);

// Définir la date minimum à aujourd'hui
const today = new Date().toISOString().split('T')[0];
document.getElementById('date-depart').setAttribute('min', today);
document.getElementById('date-retour').setAttribute('min', today);

// Initialisation
updateSummary();