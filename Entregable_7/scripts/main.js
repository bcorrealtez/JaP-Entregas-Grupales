const url = "https://6361aa6167d3b7a0a6cad6ee.mockapi.io/users/"; //Bruno
//const url = "https://6361a80267d3b7a0a6cab68d.mockapi.io/users/"; paola
const data = { name: "", lastname: "" };

const buscar = document.getElementById("btnGet1");
const agregar = document.getElementById("btnPost");
const modificar = document.getElementById("btnPut");
const borrar = document.getElementById("btnDelete");
const results = document.getElementById("results");
const nomPost = document.getElementById("inputPostNombre");
const apePost = document.getElementById("inputPostApellido");
const inpDel = document.getElementById("inputDelete");
const inpGet = document.getElementById("inputGet1Id");

// INPUT Event

document.getElementById("post-box").addEventListener("input", () => {
  /^\s/.test(nomPost.value) ? (nomPost.value = "") : "";
  /^\s/.test(apePost.value) ? (apePost.value = "") : "";

  if (nomPost.value && apePost.value) {
    agregar.removeAttribute("disabled");
  } else {
    agregar.setAttribute("disabled", "");
  }
});

inpDel.addEventListener("input", () => {
  if (inpDel.value) {
    borrar.removeAttribute("disabled");
  } else {
    borrar.setAttribute("disabled", "");
  }
});

// CLICK Event

buscar.addEventListener("click", () => {
  if (inpGet.value) {
    peticion("GETid");
  } else {
    peticion("GET");
  }
});

agregar.addEventListener("click", () => {
  data.name = nomPost.value;
  data.lastname = apePost.value;
  peticion("POST");
});

modificar.addEventListener("click", () => {});

borrar.addEventListener("click", () => {
  peticion("DELETE");
});

modificar.addEventListener("click", () => {});

borrar.addEventListener("click", () => {});

// RESULTADOS

// FETCH

function peticion(method) {
  switch (method) {
    case "GET":
      fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .catch((error) => console.error("Error:", error))
        .then((response) => console.log("Success:", response));

      break;

    case "GETid":
      fetch(url+inpGet.value, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .catch((error) => console.error("Error:", error))
        .then((response) => console.log("Success:", response));

      break;

    case "POST":
      fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .catch((error) => console.error("Error:", error))
        .then((response) => console.log("Success:", response));

      break;

    case "PUT":
      break;

    case "DELETE":
      fetch(url + inpDel.value, {
        method: "DELETE",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .catch((error) => console.error("Error:", error))
        .then((response) => console.log("Success:", response));

      break;

    default:
      break;
  }
}
