next = document.querySelector("#next"),
  back = document.querySelector("#back"),
  back1 = document.querySelector("#back1"),
  condiciones = document.querySelector("#condiciones"),
  general = document.querySelector("#general"),
  next1 = document.querySelector("#next1"),
  adjuntos = document.querySelector("#adjuntos");
nitEmpresa = document.querySelector("#nitEmpresa");

function mostrar() {
  // console.log(document.getElementById("seleccionar").value);
  // console.log(document.getElementById("nitEmpresa").value);
  // console.log(document.getElementById("nombreContratista").value);
  // console.log(document.getElementById("representanteLegal").value);
  // console.log(document.getElementById("direccion").value);
  // console.log(document.getElementById("cuidad").value);
  // console.log(document.getElementById("departamento").value);
  // console.log(document.getElementById("telefonoFijo").value);
  // console.log(document.getElementById("telefonoMovil").value);
  // console.log(document.getElementById("fax").value);
  // console.log(document.getElementById("email").value);
  // console.log(document.getElementById("sectorEconomico").value);


}

const forms = document.querySelectorAll('.needs-validation')


Array.from(forms).forEach(form => {
  next.addEventListener('click', event => {
    if (!form.checkValidity()) {
      event.preventDefault()
      event.stopPropagation()

    }

    form.classList.add('was-validated')
  }, false)
  if (next.value == 1) {
    condiciones.classList.remove("d-none");
    general.classList.add("d-none");
  }
})










// nitEmpresa.addEventListener('blur', (eNit) => {
//   console.log("Evento blur");
//   const nit = eNit.target,
//     nitValue = eNit.target.value;
//   if (nitValue.length === 0) {
//     nit.classList.add("invalid");
//     nit.nextElementSibling.classList.add("error");
//     nit.nextElementSibling.innerText = "Por favor ingrese el campo Nit Empresa"
//     console.log("prueba");

//   }

//   console.log(nit);

// })




function mostrar2() {
  if (back.value == 0) {
    condiciones.classList.add("d-none");
    general.classList.remove("d-none");
  }
}

function mostrar3() {
  if (next1.value == 2) {
    condiciones.classList.add("d-none");
    general.classList.add("d-none");
    adjuntos.classList.remove("d-none");
  }
}

function mostrar4() {
  if (back1.value == 1) {
    condiciones.classList.remove("d-none");
    general.classList.add("d-none");
    adjuntos.classList.add("d-none");
  }
}

function validarFormulario() {
  alert("Todo en orden");
}