const submit = document.getElementById('butn');
const listmovie = document.getElementById('listmovie');
let datamovie = localStorage.getItem('movieinfo') ? JSON.parse(localStorage.getItem('movieinfo')) : [];

// Ajouter un film
if (submit) {
    submit.addEventListener('click', function() {
        let newmovie = {
            nom: document.getElementById('nom')?.value,
            realisateur: document.getElementById('realisateur')?.value,
            annee: document.getElementById('annee')?.value,
            genre: document.getElementById('genre')?.value,
            image: document.getElementById('image')?.value,
        };
        datamovie.push(newmovie);
        localStorage.setItem('movieinfo', JSON.stringify(datamovie));
        afficherFilms(); // Rafraîchir la liste après ajout
    });
}

// Fonction pour afficher les films
function afficherFilms() {
    listmovie.innerHTML = ''; // Vider l'élément avant d'ajouter les nouveaux films
    datamovie.forEach((film, index) => {
        let filmElement = document.createElement('div');
        filmElement.classList.add('film');
        filmElement.innerHTML = `
            <div id="bt-im">
                <img src="${film.image}" alt="${film.nom}">
                <a href="Détails.html"><button type="button" id="btn1">Détails</button></a>
                <button type="button" id="btn2" onclick="supprimerFilm(${index})">Supprimer</button>
                <button type="button" id="btn3">Modifier</button>
            </div>
        `;
        listmovie.appendChild(filmElement);
    });
}

// Fonction pour supprimer un film
function supprimerFilm(index) {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce film ?')) {
        datamovie.splice(index, 1);
        localStorage.setItem('movieinfo', JSON.stringify(datamovie));
        afficherFilms();
    }
}

// Afficher les films au chargement de la page
afficherFilms();




