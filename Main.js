next = document.querySelector("#next"),
back = document.querySelector("#back"),
back1 = document.querySelector("#back1"),
condiciones = document.querySelector("#condiciones"),
general = document.querySelector("#general"),
next1 = document.querySelector("#next1"),
adjuntos = document.querySelector("#adjuntos");

function mostrar() {
  console.log(document.getElementById("seleccionar").value);

  if (next.value == 1) {
    condiciones.classList.remove("d-none");
    general.classList.add("d-none");
  }
}

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