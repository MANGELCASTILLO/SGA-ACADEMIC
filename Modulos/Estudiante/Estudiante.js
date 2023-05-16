

function mostrarContenido() {

  var contenido = document.getElementById("MCalificaciones");
  contenido.classList.remove("oculto");

  document.getElementById('ModuloE').style.display = 'none';

}

function ocultarContenido() {

  var contenido = document.getElementById("MCalificaciones");
  contenido.classList.add("oculto");

  document.getElementById('ModuloE').style.display = "block";
}

function mostrarContenido1() {

  var contenido = document.getElementById("MHorario");
  contenido.classList.remove("oculto");

  document.getElementById('ModuloE').style.display = 'none';

}

function ocultarContenido1() {

  var contenido = document.getElementById("MHorario");
  contenido.classList.add("oculto");

  document.getElementById('ModuloE').style.display = "block";
}

function mostrarContenido2() {

  var contenido = document.getElementById("MAcademico");
  contenido.classList.remove("oculto");

  document.getElementById('ModuloE').style.display = 'none';

}

function ocultarContenido2() {

  var contenido = document.getElementById("MAcademico");
  contenido.classList.add("oculto");

  document.getElementById('ModuloE').style.display = "block";
}

function mostrarContenido3() {

  var contenido = document.getElementById("MPeticiones");
  contenido.classList.remove("oculto");

  document.getElementById('ModuloE').style.display = 'none';

}

function ocultarContenido3() {

  var contenido = document.getElementById("MPeticiones");
  contenido.classList.add("oculto");

  document.getElementById('ModuloE').style.display = "block";
}

const radioButtons = document.querySelectorAll('.radio-button');

radioButtons.forEach(radioButton => {
  radioButton.addEventListener('change', function() {
    radioButtons.forEach(otherRadioButton => {
      if (otherRadioButton !== this) {
        otherRadioButton.checked = false;
      }
    });
  });
});




