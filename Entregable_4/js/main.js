let busqueda = document.getElementById("inputBuscar");
let contenedor = document.getElementById("lista");
let btn = document.getElementById("btnBuscar");
let seriesMostrar = [];

const japflix = {
    render: () => {

        let url = "https://japceibal.github.io/japflix_api/movies-data.json";

        fetch(url)
        .then(response => response.json())
        .then((json)=>{
            console.log(json)
            seriesMostrar = json;
        })
    }
};

japflix.render(); 

btn.addEventListener("click", (e)=>{
    e.preventDefault();
    console.log(buscarTitle());
    console.log(buscarTagline());
    console.log(buscarOverview());
    console.log(buscarGenres());
});

function buscarTitle(){
    let mostrarTitle = seriesMostrar.filter(elemento => elemento.title.toLowerCase().includes(busqueda.value.toLowerCase()));
    return mostrarTitle;
}

function buscarTagline(){
    let mostrarTagline = seriesMostrar.filter(elemento => elemento.tagline.toLowerCase().includes(busqueda.value.toLowerCase()));
    return mostrarTagline;
}

function buscarOverview(){
    let mostrarOverview = seriesMostrar.filter(elemento => elemento.overview.toLowerCase().includes(busqueda.value.toLowerCase()));
    return mostrarOverview;
}

function buscarGenres(){
    let mostrarGenres = seriesMostrar.filter(elemento => elemento.genres.forEach(elemento => ((elemento.name.toLowerCase().includes(busqueda.value.toLowerCase())))));
    return mostrarGenres;
}