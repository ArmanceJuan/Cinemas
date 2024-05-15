document.addEventListener("DOMContentLoaded", () => {
  const cinemasListe = document.getElementById("cinemas");

  fetch(
    "https://data.culture.gouv.fr/api/explore/v2.1/catalog/datasets/etablissements-cinematographiques/records?limit=20"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data.results.no);
      const cinemas = data.results.map((cinema) => ({
        nom: cinema.nom,
        adresse: cinema.adresse,
        ville: cinema.commune,
      }));

      cinemas.forEach((cinema) => {
        const li = document.createElement("li");
        li.textContent = `${cinema.nom} - ${cinema.adresse}, ${cinema.ville}`;
        cinemasListe.appendChild(li);
      });
    });
});
