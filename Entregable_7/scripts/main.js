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
const inpPut = document.getElementById("inputPutId");
const alertD = document.getElementById("alert-error");

const guardar = document.getElementById("btnSendChanges");

const modalNom = document.getElementById("inputPutNombre");
const modalApe = document.getElementById("inputPutApellido");

var getData = [];
var putData = [];

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

inpPut.addEventListener("input", () => {
  if (inpPut.value) {
    modificar.removeAttribute("disabled");
  } else {
    modificar.setAttribute("disabled", "");
  }
});

// CLICK Event

buscar.addEventListener("click", () => {
  if (inpGet.value) {
    peticion("GETid");
  } else {
    peticion("GET");
  }

  getResults();
});

agregar.addEventListener("click", () => {
  data.name = nomPost.value;
  data.lastname = apePost.value;
  peticion("POST");
});

modificar.addEventListener("click", () => {
  fetch(url + inpPut.value, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      alerta()
    })
    .catch((error) => console.error("Error:", error))
    .then((response) => {
      if (response) {
        putData = response;
        modalNom.value = putData.name;
        modalApe.value = putData.lastname;
        guardar.removeAttribute("disabled");
      }
      console.log("Success:", response);
    });
});

guardar.addEventListener("click", () => {
  data.name = modalNom.value;
  data.lastname = modalApe.value;

  modalNom.value = "";
  modalApe.value = "";
  guardar.setAttribute("disabled", "");
  peticion("PUT");
});

borrar.addEventListener("click", () => {
  peticion("DELETE");
});

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
        .then((response) => {
          getData = response;
          getResults();
          console.log("Success:", response);
        });

      break;

    case "GETid":
      fetch(url + inpGet.value, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          alerta()
        })
        .catch((error) => console.error("Error:", error))
        .then((response) => {
          getData = [response];
          getResults();
          console.log("Success:", response);
        });

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
        .then((response) => {
          peticion("GET");
          console.log("Success:", response);
        });

      break;

    case "PUT":
      fetch(url + inpPut.value, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .catch((error) => console.error("Error:", error))
        .then((response) => {
          peticion("GET");
          console.log("Success:", response);
        });
      break;

    case "DELETE":
      fetch(url + inpDel.value, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          alerta()
        })
        .catch((error) => console.error("Error:", error))
        .then((response) => {
          peticion("GET");
          console.log("Success:", response);
        });

      break;

    default:
      break;
  }
}

// RESULTADOS
function getResults() {
  let innerText = "";
  for (let i = 0; i < getData.length; i++) {
    innerText += `
    <li>
      <p>ID: ${getData[i].id}</p>
      <p>Name: ${getData[i].name}</p>
      <p>LastName: ${getData[i].lastname}</p>
    </li>`;
  }
  results.innerHTML = innerText;
}

function alerta() {
  alertD.classList.add("show");
  setTimeout(() => {
    alertD.classList.remove("show");
  }, 3000);
}
