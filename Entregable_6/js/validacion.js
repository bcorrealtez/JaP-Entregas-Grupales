// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {

        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
          validarContrasenas()
          validarCheckbox()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()

const pass1 = document.getElementById("password1");
const pass2 = document.getElementById("password2");
const terminos = document.getElementById("terminos");
const terminoslab = document.getElementById("labelterminos");

function validarContrasenas() {
  if (pass2.value === pass1.value && pass1.checkValidity()) {
    pass2.setCustomValidity("");
  }
  else {
    pass2.setCustomValidity('Debe ser igual a "contraseña"');
  }
}

pass2.addEventListener("input", validarContrasenas);
terminos.addEventListener("click", validarCheckbox);

function validarCheckbox() {
  if (terminos.checkValidity()) {
    terminoslab.classList.remove("is-invalid", "text-danger")
    terminoslab.classList.add("text-primary")
  } else {
    terminoslab.classList.remove("text-primary")
    terminoslab.classList.add("is-invalid", "text-danger")
  }
} 