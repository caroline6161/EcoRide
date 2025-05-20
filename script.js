// Script JS pour EcoRide (exemples)
// À compléter selon besoins

// Exemple : remplit la liste des trajets à venir s’il y a des données (pour acceuil.html)
document.addEventListener('DOMContentLoaded', function () {
  // Exemples de trajets à venir (remplace par des données dynamiques si besoin)
  const trajets = [
    // {
    //   depart: "Paris", arrivee: "Lyon", date: "25/05/2025", heure: "08:00", chauffeur: "Alex"
    // }
  ];
  const ul = document.getElementById('trajets-a-venir');
  if (ul && trajets.length) {
    ul.innerHTML = '';
    trajets.forEach(trajet => {
      ul.innerHTML += `<li><b>${trajet.depart}</b> → <b>${trajet.arrivee}</b> le ${trajet.date} à ${trajet.heure} (Chauffeur : ${trajet.chauffeur})</li>`;
    });
  }

  // Historique de covoiturages (à compléter pareil)
  const historiques = [];
  const histoUl = document.getElementById('historique-covoiturages');
  if (histoUl && historiques.length) {
    histoUl.innerHTML = '';
    historiques.forEach(trajet => {
      histoUl.innerHTML += `<li><b>${trajet.depart}</b> → <b>${trajet.arrivee}</b> le ${trajet.date}</li>`;
    });
  }
});
