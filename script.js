// Fonction pour filtrer les voitures
function filtrerVoitures() {
  const marque = document.getElementById('marque').value;
  const prixMax = parseInt(document.getElementById('prix').value || 0);
  const voitures = document.querySelectorAll('.voiture');

  voitures.forEach(voiture => {
    const voitureMarque = voiture.dataset.marque.toLowerCase();
    const voiturePrix = parseInt(voiture.dataset.prix);

    const marqueMatch = (marque === 'all' || voitureMarque === marque.toLowerCase());
    const prixMatch = (prixMax === 0 || voiturePrix <= prixMax);

    voiture.style.display = (marqueMatch && prixMatch) ? 'block' : 'none';
  });
}

// Fonction pour ouvrir les détails (peut être développée plus tard)
function ouvrirDetails(nom, prix) {
  alert(`Détails de la voiture :\nNom : nom :{prix} MAD`);
}
