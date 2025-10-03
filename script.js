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
  const texteRecherche = document.getElementById('recherche').value.toLowerCase();
  const marque = document.getElementById('marque').value;
const prixMax = parseInt(document.getElementById('prix').value || 0);
  const voitures = document.querySelectorAll('.voiture');

  voitures.forEach(voiture => {
    const voitureMarque = voiture.dataset.marque;
    const voiturePrix = parseInt(voiture.dataset.prix);
    const texte = voiture.textContent.toLowerCase();

    const correspondTexte = texte.includes(texteRecherche);
    const marqueMatch = (marque === 'all' || voitureMarque === marque);
    const prixMatch = (prixMax === 0 || voiturePrix <= prixMax);

    voiture.style.display = (correspondTexte && marqueMatch && prixMatch) ? 'block' : 'none';
  });
}

// فتح نافذة تفاصيل voiture
function ouvrirDetails(voitureId) {
  // تأكد أن db معرف وربطت Firebase في HTML
  db.collection("voitures").doc(voitureId).get()
    .then(doc => {
      if (doc.exists) {
        const data = doc.data();
        document.getElementById('marqueDetail').textContent = data.marque;
        document.getElementById('anneeDetail').textContent = data.annee;
        document.getElementById('kilometrageDetail').textContent = data.kilometrage;
        document.getElementById('villeDetail').textContent = data.ville;
        document.getElementById('etatDetail').textContent = data.etat;
document.getElementById('carburantDetail').textContent = data.carburant;
        document.getElementById('descriptionDetail').textContent = data.description;
        document.getElementById('imageDetail').src = data.image_url;
      } else {
        alert("Voiture introuvable !");
      }
    })
    .catch(error => {
      console.error("Erreur lors de l'ouverture des détails :", error);
    });
}


