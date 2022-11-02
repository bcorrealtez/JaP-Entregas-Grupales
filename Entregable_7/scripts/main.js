const url = "https://6361aa6167d3b7a0a6cad6ee.mockapi.io/users/";
const data = { name: "", lastname: "" };

const buscar = document.getElementById("btnGet1");
const agregar = document.getElementById("btnPost");
const modificar = document.getElementById("btnPut");
const borrar = document.getElementById("btnDelete");
const nomPost = document.getElementById("inputPostNombre");
const apePost = document.getElementById("inputPostApellido");
const inpDel = document.getElementById("inputDelete");

document.getElementById("post-box").addEventListener("input", () => {
  if (nomPost.value && apePost.value) {
    agregar.removeAttribute("disabled")
  } else {
    agregar.setAttribute("disabled", "")
  }
});

document.getElementById("delete-box").addEventListener("input", () => {
  if (inpDel.value) {
    borrar.removeAttribute("disabled")
  } else {
    borrar.setAttribute("disabled", "")
  }
});

buscar.addEventListener("click", () => { });

agregar.addEventListener("click", () => {
  data.name = nomPost.value;
  data.lastname = apePost.value;
  peticion("POST")
});

modificar.addEventListener("click", () => { });

borrar.addEventListener("click", () => { });

function peticion(method) {
  switch (method) {
    case "GET":
      fetch(url, {
        method: method,
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
        method: method,
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

      break;

    default:
      break;
  }


}
