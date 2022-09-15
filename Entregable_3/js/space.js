let busqueda = document.getElementById("inputBuscar");
let contenedor = document.getElementById("contenedor");
let btn = document.getElementById("btnBuscar");

let getJSONData = function(URL){
    let result = {};
    return fetch(URL)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        return result;
    });
}


btn.addEventListener("click", (e)=>{
    e.preventDefault(); 
    let items = [];

    let URL = `https://images-api.nasa.gov/search?q=${busqueda.value}`;
    getJSONData(URL).then(function(resultObj){
        if (resultObj.status === "ok"){
            items = resultObj.data.collection.items
            
            let contenido = "";

            items.forEach((item)=>{
                
                contenido += htmlContentToAppend(item.links, item.data);
            })
            contenedor.innerHTML = contenido;
        } else {
            contenedor.innerHTML = "";
        }
    });

})

function htmlContentToAppend(links, data) {
    /*return `
    <div class= "col-4" id="contenedor">
        <div class="list-group-item list-group-item-action">
            <div class="col-12">
                <img src="${links ? links[0].href: ''}" alt="" class="img-thumbnail"> 
            </div>
            <div >
                <div class="mb-1 text-break">
                    <h4>${data[0].title}</h4>
                    <p class="description overflow-auto"> ${data[0].description} </p>
                    <small class="text-muted"> ${data[0].date_created} </small>    
                </div>
            </div>
        </div>
    </div>
    `
*/
    return `
    <div class= "col-4" id="contenedor">
        <div class="card mb-3">
            <div class='imagecard bg-light'>
                <img src="${links ? links[0].href: ''}">
            </div>
            
            <div class="card-body text-dark">
                <h5 class="card-title">${data[0].title}</h5>
                <p class="card-text description">${data[0].description}</p>
                
            </div>
            <p class="card-text p-1 ps-3"><small class="text-muted">${data[0].date_created}</small></p>
        </div>
    </div>
    `

} /*${links ? links[0].href: ''} valida si links está definido o no, 
    si existe links devolve link[0].href, sino devolvé un string vacío */
