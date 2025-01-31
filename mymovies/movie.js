
const submit = document.getElementById('butn');
const listmovie = document.getElementById('listmovie');
let datamovie = localStorage.getItem('movieinfo') ? JSON.parse(localStorage.getItem('movieinfo')):[];

if (submit){
    submit.addEventListener('click', function(){
        let newmovie={
            nom:document.getElementById('nom')?.value,
            realisateur:document.getElementById('realisateur')?.value,
            annee:document.getElementById('annee')?.value,
            genre:document.getElementById('genre')?.value,
            image:document.getElementById('image')?.value,
        }
        datamovie.push(newmovie);
        localStorage.setItem('movieinfo',JSON.stringify(datamovie));
        showdata();
    });
}


