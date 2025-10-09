// Fonction pour filtrer les voitures
<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyA-gleKZm-S0AouqaocRy2iM5U5ziZ5Zwg",
    authDomain: "autoplace-d482e.firebaseapp.com",
    projectId: "autoplace-d482e",
    storageBucket: "autoplace-d482e.firebasestorage.app",
    messagingSenderId: "559785850769",
    appId: "1:559785850769:web:04f2b8a4c37ae30916cc30",
    measurementId: "G-RGX3MM26ZW"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
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
