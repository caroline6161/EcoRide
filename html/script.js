// Affiche un trajet exemple au clic sur "Rechercher"
document.getElementById("search-form")?.addEventListener("submit", function (e) {
  e.preventDefault();

  const resultats = document.getElementById("resultats");
  resultats.innerHTML = `
    <div class="trajet">
      <h4>Marie (4.7⭐)</h4>
      <p><strong>Départ :</strong> Marseille à 08h00<br>
         <strong>Arrivée :</strong> Nice à 11h00<br>
         <strong>Places :</strong> 3<br>
         <strong>Prix :</strong> 15 €<br>
         <strong>Écologique :</strong> ✅</p>
      <a href="#" class="btn-detail">Détail</a>
    </div>
  `;
});
// Gestion du formulaire de connexion
document.getElementById("connexion-form")?.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email && password) {
    alert("Connexion réussie !");
    console.log(`Connexion utilisateur : ${email}`);
  } else {
    alert("Veuillez remplir tous les champs !");
  }
});
// Gestion du formulaire d’inscription
document.getElementById("inscription-form")?.addEventListener("submit", function (e) {
  e.preventDefault();

  const pseudo = document.getElementById("pseudo").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("motdepasse").value;

  if (pseudo && email && password) {
    alert("Compte créé avec succès ! Vous recevez 20 crédits.");
    console.log(`Inscription de ${pseudo} (${email})`);
  } else {
    alert("Veuillez remplir tous les champs !");
  }
});
// Afficher/masquer les formulaires selon le rôle
const chauffeurCheckbox = document.getElementById("chauffeur");
chauffeurCheckbox?.addEventListener("change", function () {
  const formChauffeur = document.getElementById("form-chauffeur");
  const formTrajet = document.getElementById("form-trajet");
  if (this.checked) {
    formChauffeur.style.display = "block";
    formTrajet.style.display = "block";
  } else {
    formChauffeur.style.display = "none";
    formTrajet.style.display = "none";
  }
});

// Formulaire véhicule
document.getElementById("vehicule-form")?.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Véhicule enregistré avec succès !");
});

// Formulaire trajet
document.getElementById("trajet-form")?.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Trajet publié avec succès !");
});
