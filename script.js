// Message de bienvenue
console.log("Bienvenue sur EcoRide !");

// Formulaire de connexion
document.getElementById("connexion-form")?.addEventListener("submit", function (e) {
  e.preventDefault();
  let email = document.getElementById("email").value;
  let password = document.getElementById("motdepasse").value;

  if (email && password) {
    console.log(`Connexion réussie pour ${email}`);
    alert("Connexion réussie !");
    window.location.href = "index.html"; // Redirection vers l'accueil après connexion
  } else {
    alert("Veuillez entrer un email et un mot de passe.");
  }
});

// Formulaire de recherche de covoiturage
document.getElementById("search-form")?.addEventListener("submit", function (e) {
  e.preventDefault();
  let depart = document.getElementById("depart").value;
  let arrivee = document.getElementById("arrivee").value;
  let date = document.getElementById("date").value;

  if (depart && arrivee && date) {
    let resultats = document.getElementById("resultats");
    resultats.innerHTML = `
      <p>Voici les trajets disponibles pour ${depart} à ${arrivee} le ${date} :</p>
      <ul>
        <li>Trajet 1: 10h00 - Conducteur: Jean</li>
        <li>Trajet 2: 14h00 - Conducteur: Marie</li>
      </ul>
    `;
  } else {
    alert("Veuillez remplir tous les champs.");
  }
});
