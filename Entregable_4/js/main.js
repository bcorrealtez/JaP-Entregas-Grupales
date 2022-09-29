let busqueda = document.getElementById("inputBuscar");
let contenedor = document.getElementById("lista");
let btn = document.getElementById("btnBuscar");
let seriesLista = [];

const japflix = {
    render: () => {

        let url = "https://japceibal.github.io/japflix_api/movies-data.json";

        fetch(url)
        .then(response => response.json())
        .then((json)=>{
            console.log(json)
            seriesLista = json;
        })
    }
};

japflix.render(); 

btn.addEventListener("click", (e)=>{
    e.preventDefault();

    let mostrarTitle = buscarTitle();
    let mostrarTagline = buscarTagline();
    let mostrarOverview = buscarOverview();
    let mostrarGenres = buscarGenres();

    let seriesMostrar = mostrarTitle.concat(mostrarTagline, mostrarOverview, mostrarGenres);

    console.log(seriesMostrar);

    mostrarSeries(seriesMostrar);
});

function buscarTitle(){
    let mostrarTitle = seriesLista.filter(elemento => elemento.title.toLowerCase().includes(busqueda.value.toLowerCase()));
    return mostrarTitle;
}

function buscarTagline(){
    let mostrarTagline = seriesLista.filter(elemento => elemento.tagline.toLowerCase().includes(busqueda.value.toLowerCase()));
    return mostrarTagline;
}

function buscarOverview(){
    let mostrarOverview = seriesLista.filter(elemento => elemento.overview.toLowerCase().includes(busqueda.value.toLowerCase()));
    return mostrarOverview;
}

function buscarGenres(){
    let mostrarGenres = seriesLista.filter(elemento => elemento.genres.some(elemento => 
        ((elemento.name.toLowerCase().includes(busqueda.value.toLowerCase())))));
    return mostrarGenres;
}

function mostrarSeries(seriesMostrar){

    let htmlcontenttoAppend = "";
    console.log(seriesMostrar);
    for(i = 0; i < seriesMostrar.length; i++){



        htmlcontenttoAppend += `
        
        <li class="list-group-item-action d-flex justify-content-between align-items-start bg-dark p-2 m-2 Border-bottom border-muted">
            <div class="ms-2 me-auto text-white">
                <div class="fw-bold">${seriesMostrar[i].title}</div>
                <span class="text-muted">${seriesMostrar[i].tagline}</span>
            </div>
            <span class="badge"> ${drawStars((seriesMostrar[i].vote_average)/2)} </span>
        </li>

        `;

    } 
    contenedor.innerHTML = htmlcontenttoAppend;
}

function drawStars(stars) {
    let number = parseInt(stars);
    let htmlContentToAppend = "";

    for (let i = 1; i <= number; i++) { /*Esta variable recorre desde el 1 hasta el número del puntaje marcado.*/
        htmlContentToAppend += `<span class="fa fa-star checked"></span>` /*Estrella pintada.*/
    }
    for (let j = number + 1; j <= 5; j++) { /*Esta variable recorre desde una posición más adelante del puntaje marcado hasta el 5.*/
        htmlContentToAppend += `<span class="fa fa-star"></span>` /*Estrella sin pintar.*/
    }

    return htmlContentToAppend;
}