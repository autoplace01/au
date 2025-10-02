function filtrerVoitures() {
  const marque = document.getElementById('marque').value;
  const prixMax = parseInt(document.getElementById('prix').value || 0);
const voitures = document.querySelectorAll('.voiture');
voitures.forEach(voiture => {
    const voitureMarque = voiture.dataset.marque;
    const voiturePrix = parseInt(voiture.dataset.prix);
const marqueMatch = (marque === 'all' || voitureMarque === marque);
    const prixMatch = (prixMax === 0 || voiturePrix <= prixMax);
voiture.style.display = (marqueMatch && prixMatch) ? 'block' : 'none';
  });
}
js
function ouvrirDetails(nom, prix) {
  alert(`Détails de la voiture:\nNom: nom:{prix} MAD`);
}
const params = new URLSearchParams(window.location.search);
doument.getElementById("nomVoiture").textContent = `params.get("marque"){params.get("modele")}`;
document.getElementById("prixVoiture").textContent = `${params.get("prix")} MAD`;
