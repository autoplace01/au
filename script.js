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
function function ouvrirDetails(nom, prix) 
  alert(Détails de la voiture : :{nom}\nPrix : ${prix} MAD);
}
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWkbHz-fi15InLnJZg7i75VRDpBLMY3PM",
  authDomain: "autoplace01-1f653.firebaseapp.com",
  projectId: "autoplace01-1f653",
  storageBucket: "autoplace01-1f653.firebasestorage.app",
  messagingSenderId: "361871095391",
  appId: "1:361871095391:web:f5d7b703c8c0f1e6188dea",
  measurementId: "G-L9MK4SJ7J5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
