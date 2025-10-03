 // Filtrer les voitures selon la marque et le prix
function filtrerVoitures() {
  const marque = document.getElementById('marque').value;
  const prixMax = parseInt(document.getElementById('prix').value || 0);
  const voitures = document.querySelectorAll('.voiture');

  voitures.forEach(voiture => {
    const voitureMarque = voiture.dataset.marque;
    const voiturePrix = parseInt(voiture.dataset.prix);

    const marqueMatch = (marque === 'all' || voitureMarque === marque);
    const prixMatch = (prixMax === 0 || voiturePrix <= prixMax);

    voiture.style.display = (marqueMatch && prixMatch) ? 'block' : 'none';
  });
}

// Recherche par texte, marque et prix
function rechercherVoitures() {
  let texteRecherche = document.getElementById('recherche').value.toLowerCase();
  let marque = document.getElementById('mar
