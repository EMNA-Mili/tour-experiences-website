// destinations.js

// Base de données des destinations
const destinations = [
    {
        id: 1,
        title: "Bali, Indonésie",
        type: "plage",
        budget: "moyen",
        periode: "ete",
        price: 2000 ,
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
        description: "Découvrez les temples mystiques et les plages paradisiaques de Bali.",
        badge: "Promo -30%",
        duree: "7 jours / 6 nuits",
        hebergement: "Hôtel 4* avec piscine",
        vol: "Vol inclus",
        repas: "Petit-déjeuner inclus",
        activities: ["Visite des temples", "Plongée sous-marine", "Cours de surf", "Massage balinais", "Excursion en rizières"],
        offres: "Réduction de 30% pour réservation avant fin du mois"
    },
    {
        id: 2,
        title: "Maldives",
        type: "romantique",
        budget: "luxe",
        periode: "hiver",
        price: 6000,
        image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80",
        description: "Séjour romantique dans des bungalows sur pilotis avec vue sur l'océan.",
        badge: "Luxe",
        duree: "10 jours / 9 nuits",
        hebergement: "Villa sur pilotis 5*",
        vol: "Vol business inclus",
        repas: "Pension complète",
        activities: ["Plongée avec masque et tuba", "Dîner romantique sur la plage", "Spa de luxe", "Excursion en bateau", "Observation des dauphins"],
        offres: "Champagne et massage offerts pour les couples"
    },
    {
        id: 3,
        title: "Marrakech, Maroc",
        type: "culture",
        budget: "economique",
        periode: "printemps",
        price:1650,
        image: "https://www.expedia.ca/fr/Quoi-Faire-Marrakech.d6084756.Guides-Des-Vacances",
        description: "Plongez dans l'atmosphère magique des souks et des riads marocains.",
        badge: "Best Seller",
        duree: "5 jours / 4 nuits",
        hebergement: "Riad traditionnel 3*",
        vol: "Vol direct inclus",
        repas: "Demi-pension",
        activities: ["Visite de la médina", "Tour en chameau", "Cours de cuisine marocaine", "Hammam traditionnel", "Jardin Majorelle"],
        offres: "Réservation anticipée : -20%"
    },
    {
        id: 4,
        title: "Patagonie, Argentine",
        type: "aventure",
        budget: "moyen",
        periode: "ete",
        price: 4796,
        image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&q=80",
        description: "Explorez les glaciers majestueux et les paysages sauvages de Patagonie.",
        badge: "Aventure",
        duree: "12 jours / 11 nuits",
        hebergement: "Lodge en pleine nature",
        vol: "Vol avec escale inclus",
        repas: "Pension complète",
        activities: ["Trekking sur glacier", "Observation de la faune", "Kayak en fjord", "Randonnée en montagne", "Visite du parc Torres del Paine"],
        offres: "Guide francophone inclus"
    },
    {
        id: 5,
        title: "Santorini, Grèce",
        type: "romantique",
        budget: "moyen",
        periode: "ete",
        price: 3800,
        image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&q=80",
        description: "Admirez les couchers de soleil spectaculaires sur les maisons blanches.",
        badge: "Coup de Coeur",
        duree: "7 jours / 6 nuits",
        hebergement: "Hôtel avec vue sur la caldeira",
        vol: "Vol inclus",
        repas: "Petit-déjeuner inclus",
        activities: ["Croisière au coucher du soleil", "Dégustation de vins", "Visite d'Oia", "Plages volcaniques", "Excursion en bateau"],
        offres: "Dîner romantique offert"
    },
    {
        id: 6,
        title: "Tokyo, Japon",
        type: "culture",
        budget: "moyen",
        periode: "printemps",
        price:4167,
        image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80",
        description: "Découvrez la fusion parfaite entre tradition et modernité au Japon.",
        badge: "Nouvelle Destination",
        duree: "8 jours / 7 nuits",
        hebergement: "Hôtel 4* centre-ville",
        vol: "Vol direct inclus",
        repas: "Petit-déjeuner inclus",
        activities: ["Visite des temples", "Quartier de Shibuya", "Cérémonie du thé", "Mont Fuji", "Marchés traditionnels"],
        offres: "JR Pass 7 jours inclus"
    },
    {
        id: 7,
        title: "Safari Kenya",
        type: "aventure",
        budget: "luxe",
        periode: "hiver",
        price: 7050,
        image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
        description: "Safari inoubliable à la rencontre des Big Five dans leur habitat naturel.",
        badge: "Exclusif",
        duree: "10 jours / 9 nuits",
        hebergement: "Lodge de luxe 5*",
        vol: "Vol inclus",
        repas: "Pension complète",
        activities: ["Safari photo", "Observation des lions", "Visite Masai Mara", "Safari en montgolfière", "Rencontre avec les Masaï"],
        offres: "Safari en montgolfière inclus"
    },
    {
        id: 8,
        title: "Thaïlande du Nord",
        type: "famille",
        budget: "economique",
        periode: "hiver",
        price: 1959,
        image: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&q=80",
        description: "Aventure familiale entre temples bouddhistes et nature luxuriante.",
        badge: "Famille",
        duree: "9 jours / 8 nuits",
        hebergement: "Hôtel 3* familial",
        vol: "Vol avec escale inclus",
        repas: "Demi-pension",
        activities: ["Visite de temples", "Balade à dos d'éléphant", "Cours de cuisine", "Marchés flottants", "Villages ethniques"],
        offres: "Enfants -50% jusqu'à 12 ans"
    },
    {
        id: 9,
        title: "Islande",
        type: "aventure",
        budget: "moyen",
        periode: "hiver",
        price: 4100,
        image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=800&q=80",
        description: "Explorez les paysages volcaniques et chassez les aurores boréales.",
        badge: "Aurores Boréales",
        duree: "7 jours / 6 nuits",
        hebergement: "Hôtel 3* avec spa",
        vol: "Vol direct inclus",
        repas: "Petit-déjeuner inclus",
        activities: ["Chasse aux aurores boréales", "Blue Lagoon", "Cascade Gullfoss", "Geysers", "Plage de sable noir"],
        offres: "Excursion aurores boréales garantie"
    },
    {
        id: 10,
        title: "Côte Amalfitaine, Italie",
        type: "plage",
        budget: "moyen",
        periode: "ete",
        price: 3300,
        image: "https://images.unsplash.com/photo-1534113414509-0eec2bfb493f?w=800&q=80",
        description: "Villages colorés perchés entre mer turquoise et montagnes.",
        badge: "Charme Italien",
        duree: "7 jours / 6 nuits",
        hebergement: "Hôtel de charme 4*",
        vol: "Vol inclus",
        repas: "Petit-déjeuner inclus",
        activities: ["Visite de Positano", "Excursion à Capri", "Dégustation limoncello", "Plages privées", "Sentier des Dieux"],
        offres: "Excursion en bateau offerte"
    },
    {
        id: 11,
        title: "Dubaï, EAU",
        type: "famille",
        budget: "luxe",
        periode: "hiver",
        price: 5066,
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
        description: "Luxe, shopping et aventures dans le désert pour toute la famille.",
        badge: "Luxe & Shopping",
        duree: "6 jours / 5 nuits",
        hebergement: "Hôtel 5* sur la plage",
        vol: "Vol direct inclus",
        repas: "Demi-pension",
        activities: ["Burj Khalifa", "Safari dans le désert", "Aquaventure", "Dubai Mall", "Ski Dubai"],
        offres: "Entrées parcs à thème incluses"
    },
    {
        id: 12,
        title: "Croatie - Îles Dalmates",
        type: "plage",
        budget: "economique",
        periode: "ete",
        price: 2389,
        image: "https://images.unsplash.com/photo-1555990538-c3cd0651a4a7?w=800&q=80",
        description: "Criques secrètes et eaux cristallines de la mer Adriatique.",
        badge: "Bon Plan",
        duree: "8 jours / 7 nuits",
        hebergement: "Appartement vue mer",
        vol: "Vol inclus",
        repas: "Logement seul",
        activities: ["Island hopping", "Plongée avec masque", "Visite de Dubrovnik", "Kayak de mer", "Dégustation vins locaux"],
        offres: "Location voiture 3 jours offerte"
    }
];


// Variables globales
let filteredDestinations = [...destinations];
const destinationsGrid = document.getElementById('destinations-grid');
const noResults = document.getElementById('no-results');
const modal = document.getElementById('destination-modal');
const modalBody = document.getElementById('modal-body');

// Fonction pour afficher les destinations
function displayDestinations(destinationsToDisplay) {
    destinationsGrid.innerHTML = '';
    
    if (destinationsToDisplay.length === 0) {
        noResults.style.display = 'block';
        return;
    }
    
    noResults.style.display = 'none';
    
    destinationsToDisplay.forEach(destination => {
        const card = createDestinationCard(destination);
        destinationsGrid.appendChild(card);
    });
}

// Fonction pour créer une carte de destination
function createDestinationCard(destination) {
    const card = document.createElement('div');
    card.className = 'destination-card';
    card.setAttribute('data-id', destination.id);
    
    card.innerHTML = `
        ${destination.badge ? `<div class="destination-badge">${destination.badge}</div>` : ''}
        <img src="${destination.image}" alt="${destination.title}" class="destination-image">
        <div class="destination-info">
            <div class="destination-header">
                <h3 class="destination-title">${destination.title}</h3>
                <span class="destination-type">${getTypeLabel(destination.type)}</span>
            </div>
            <p class="destination-description">${destination.description}</p>
            <div class="destination-details">
                <div class="destination-price">
                    ${destination.price}DT
                    <span>par personne</span>
                </div>
                <button class="view-details-btn">Voir détails</button>
            </div>
        </div>
    `;
    
    // Événement hover pour le tooltip
    card.addEventListener('mouseenter', (e) => showTooltip(e, destination));
    card.addEventListener('mouseleave', hideTooltip);
    
    // Événement clic pour afficher les détails
    card.addEventListener('click', () => showDestinationDetails(destination));
    
    return card;
}

// Fonction pour obtenir le label du type
function getTypeLabel(type) {
    const labels = {
        plage: '🏖️ Plage',
        aventure: '🏔️ Aventure',
        culture: '🏛️ Culture',
        romantique: '💑 Romantique',
        famille: '👨‍👩‍👧‍👦 Famille'
    };
    return labels[type] || type;
}

// Fonction pour afficher le tooltip
function showTooltip(e, destination) {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip show';
    tooltip.innerHTML = `
        <strong>${destination.duree}</strong><br>
        ${destination.hebergement}<br>
        ${destination.vol}
    `;
    
    document.body.appendChild(tooltip);
    
    const rect = e.currentTarget.getBoundingClientRect();
    tooltip.style.position = 'fixed';
    tooltip.style.left = rect.left + 'px';
    tooltip.style.top = (rect.top - tooltip.offsetHeight - 10) + 'px';
}

// Fonction pour masquer le tooltip
function hideTooltip() {
    const tooltip = document.querySelector('.tooltip');
    if (tooltip) {
        tooltip.remove();
    }
}

// Fonction pour afficher les détails d'une destination
function showDestinationDetails(destination) {
    modalBody.innerHTML = `
        <div class="modal-header">
            <img src="${destination.image}" alt="${destination.title}">
            <div class="modal-header-overlay">
                <h2>${destination.title}</h2>
                <p>${destination.description}</p>
            </div>
        </div>
        <div class="modal-info">
            <div class="info-section">
                <h3>Informations pratiques</h3>
                <div class="info-grid">
                    <div class="info-item">
                        <span class="info-item-icon">⏱️</span>
                        <div>
                            <strong>Durée</strong><br>
                            ${destination.duree}
                        </div>
                    </div>
                    <div class="info-item">
                        <span class="info-item-icon">🏨</span>
                        <div>
                            <strong>Hébergement</strong><br>
                            ${destination.hebergement}
                        </div>
                    </div>
                    <div class="info-item">
                        <span class="info-item-icon">✈️</span>
                        <div>
                            <strong>Transport</strong><br>
                            ${destination.vol}
                        </div>
                    </div>
                    <div class="info-item">
                        <span class="info-item-icon">🍽️</span>
                        <div>
                            <strong>Repas</strong><br>
                            ${destination.repas}
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="info-section">
                <h3>Activités incluses</h3>
                <div class="activities-list">
                    ${destination.activities.map(activity => `
                        <div class="activity-item">
                            <span>✓</span>
                            <span>${activity}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="info-section">
                <h3>Offres spéciales</h3>
                <p style="background: #f0f9ff; padding: 1rem; border-radius: 8px; border-left: 4px solid #667eea;">
                    🎁 ${destination.offres}
                </p>
            </div>
        </div>
        <div class="modal-footer">
            <div class="modal-price">${destination.price}€</div>
            <button class="reserve-btn" onclick="window.location.href='reservation.html'">Réserver maintenant</button>
        </div>
    `;
    
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// Fonction pour fermer le modal
function closeModal() {
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

// Événements pour le modal
document.querySelector('.close-modal').addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Fonction de filtrage
function filterDestinations() {
    const typeFilter = document.getElementById('type-filter').value;
    const budgetFilter = document.getElementById('budget-filter').value;
    const periodeFilter = document.getElementById('periode-filter').value;
    
    filteredDestinations = destinations.filter(destination => {
        const matchType = typeFilter === 'all' || destination.type === typeFilter;
        const matchBudget = budgetFilter === 'all' || destination.budget === budgetFilter;
        const matchPeriode = periodeFilter === 'all' || destination.periode === periodeFilter;
        
        return matchType && matchBudget && matchPeriode;
    });
    
    displayDestinations(filteredDestinations);
}

// Bouton Chercher
document.getElementById('search-btn').addEventListener('click', filterDestinations);

// Bouton reset
document.getElementById('reset-filters').addEventListener('click', () => {
    document.getElementById('type-filter').value = 'all';
    document.getElementById('budget-filter').value = 'all';
    document.getElementById('periode-filter').value = 'all';
    filteredDestinations = [...destinations];
    displayDestinations(filteredDestinations);
});

// ✅ INITIALISATION - AFFICHER TOUTES LES DESTINATIONS AU CHARGEMENT
displayDestinations(destinations);