/*const url = "https://6361aa6167d3b7a0a6cad6ee.mockapi.io/users/"; //Bruno */
const url = "https://6361a80267d3b7a0a6cab68d.mockapi.io/users/"; //paola
const data = { name: "", lastname: "" };

const buscar = document.getElementById("btnGet1");
const agregar = document.getElementById("btnPost");
const modificar = document.getElementById("btnPut");
const borrar = document.getElementById("btnDelete");
const nomPost = document.getElementById("inputPostNombre");
const apePost = document.getElementById("inputPostApellido");
const results = document.getElementById("results");

document.getElementById("post-box").addEventListener("input", () => {
  if (nomPost.value && apePost.value) {
    
    agregar.removeAttribute("disabled")
  } else {
    agregar.setAttribute("disabled", "")
  }
});

buscar.addEventListener("click", () => {});

agregar.addEventListener("click", () => {
    data.name = nomPost.value;
    data.lastname = apePost.value;
    peticion("POST");
    
    htmlContentToApend = mostrar;
    results.innerHTML = htmlContentToApend;
});

modificar.addEventListener("click", () => {

});

borrar.addEventListener("click", () => {

});

function peticion(method) {
  fetch(url, {
    method: method,
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((error) => console.error("Error:", error))
    .then((response) => console.log("Success:", response));
}
