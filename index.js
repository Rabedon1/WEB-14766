// Scripts de el menu hamburguesa
const Toggle = document.querySelector(".toggle")
const NavMenu = document.querySelector(".navMenu")

Toggle.addEventListener("click", ()=>{
    NavMenu.classList.toggle("navMenu_visible")
})

// Scripts de el registro e inicio de sesion
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

document.addEventListener("DOMContentLoaded", function () {
    var catalogoLink = document.getElementById("catalogo-link");
    var catalogoSubMenu = document.getElementById("catalogo-submenu");
  
    // Mostrar el submenu al pasar el mouse sobre el enlace del catálogo
    catalogoLink.addEventListener("mouseenter", function () {
      catalogoSubMenu.style.display = "block";
    });
  
    // Ocultar el submenu al retirar el mouse del enlace del catálogo
    catalogoLink.addEventListener("mouseleave", function () {
      catalogoSubMenu.style.display = "none";
    });
  });

  function initMap() {
    // Coordenadas del local
    var local = {lat: -0.180653, lng: -78.467834}; // Reemplaza con las coordenadas de tu local

    // Crear un nuevo mapa en el contenedor con id "map"
    var map = new google.maps.Map(document.getElementById('map'), {
        center: local, // Centrar el mapa en las coordenadas del local
        zoom: 15 // Nivel de zoom del mapa
    });

    // Crear un marcador en las coordenadas del local
    var marker = new google.maps.Marker({
        position: local,
        map: map,
        title: 'Mi Local' // Título del marcador
    });
}


