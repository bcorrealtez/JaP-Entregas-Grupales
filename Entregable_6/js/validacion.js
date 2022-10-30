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
            validarContrasenas()
            validarTerminos()
            event.preventDefault()
            event.stopPropagation()
          
          }
          
          form.classList.add('was-validated')
        }, false)
      })
  })()

  const pass1 = document.getElementById("password1");
  const pass2 = document.getElementById("password2");

  function validarContrasenas(){
    if(pass2.value === pass1.value && pass1.checkValidity()){
      pass2.setCustomValidity("");
    } 
    else {
      pass2.setCustomValidity('Debe ser igual a "contraseña"');
    }
    pass2.reportValidity();
  }

  pass2.addEventListener("input", validarContrasenas);

  function validarTerminos(){
    const checkbox = document.getElementById("terminos");
    const terminosServicios = document.getElementById("terminosServicios");
    
    var checked = checkbox.checked;
    if(!checked){
      console.log("no está seleccionado");
      let htmlContentToAppend = "No se aceptaron los términos y servicios";
      
      terminosServicios.innerHTML = htmlContentToAppend;
    }
  }