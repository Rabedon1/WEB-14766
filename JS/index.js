// Scripts de el menu hamburguesa
const Toggle = document.querySelector(".toggle")
const NavMenu = document.querySelector(".navMenu")

Toggle.addEventListener("click", ()=>{
    NavMenu.classList.toggle("navMenu_visible")  
})

// Scripts de el registro e inicio de sesion
function registrar() {

    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    var correo = document.getElementById("correo").value;
    var contraseña = document.getElementById("contraseña").value;

   
    window.location.href = "../index.html";
}

function iniciarSesion() {
    
    var email = document.getElementById("email").value;
    var contrasena = document.getElementById("contrasena").value;

    window.location.href = "../index.html";
}

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

// Obtener todas las etiquetas de radio
var radioLabels = document.querySelectorAll('.radio-label');

// Agregar un evento de clic a cada etiqueta de radio
radioLabels.forEach(function(label) {
    label.addEventListener('click', function() {
        // Eliminar la clase 'active' de todas las etiquetas de radio
        radioLabels.forEach(function(l) {
            l.classList.remove('active');
        });
        // Agregar la clase 'active' a la etiqueta de radio clicada
        label.classList.add('active');
    });
});


function mostrarFormulario(btn) {
    var productoSeleccionado = btn.value;
    var formularioHTML = generarFormulario(productoSeleccionado);
    var formularioDiv = document.getElementById("formulario");
    formularioDiv.innerHTML = formularioHTML;
    formularioDiv.style.display = "block";
}


function generarFormulario(producto) {
    switch (producto) {
        case 'impresion_laser':
            return `
                <h2>Formulario de personalización para Impresión Laser</h2>
                <form id="form_impresion_laser" method="post">
                    <label for="explicacion">Explicación breve de lo que desea personalizar:</label><br>
                    <textarea id="explicacion" name="explicacion" rows="4" cols="50" style="resize: none;" required></textarea><br><br>
                    <label for="celular">Número de celular:</label><br>
                    <input type="text" id="celular" name="celular" required><br><br>
                    <label for="nombre">Nombre y Apellido:</label><br>
                    <input type="text" id="nombre" name="nombre" required><br><br>
                    <select id="material" name="material" required>
                        <option value="madera">Madera</option>
                        <option value="ceramica">Cerámica</option>
                        <option value="acrilico">Acrílico</option>
                        <option value="metal">Metál</option>

                    </select><br><br>
                    <p>Recuerde que el usuario es responsable de proporcionar el material (madera, cerámica, etc.). Cualquier inconveniente estaremos en contacto con usted.</p>
                    <button onclick="return validarFormulario();" type="submit">Enviar</button>
                    
                </form>
            `;
        case 'impresiones':
            return `
                <h2>Formulario de personalización para Impresiones</h2>
                    <form id= "form_impresion" method="post">
                    <label for="celular">Número de celular:</label><br>
                    <input type="text" id="celular" name="celular" required><br><br>
                    <label for="nombre">Nombre y Apellido:</label><br>
                    <input type="text" id="nombre" name="nombre" required><br><br>
                    <label for="documento">Subir documento a imprimir:</label><br>
                    <input type="file" id="documento" name="documento" accept=".pdf,.doc,.docx" required><br><br>
                    <label for="numero_impresiones">Número de impresiones:</label><br>
                    <input type="number" id="numero_impresiones" name="numero_impresiones" min="1" required><br><br>
                    <label for="color">Color:</label><br>
                    <select id="color" name="color" required>
                        <option value="color">Color</option>
                        <option value="blanco_negro">Blanco y Negro</option>
                    </select><br><br>
                    <button onclick="return validarFormulario();" type="submit">Enviar</button>
                </form>
            `;
        case 'rotulos':
            return `
                <h2>Formulario de personalización para Rótulo</h2>
                <form id="form_rotulos" method="post">
                    <label for="explicacion">Explicación breve de lo que desea personalizar:</label><br>
                    <textarea id="explicacion" name="explicacion" rows="4" cols="50" style="resize: none;" required></textarea><br><br>
                    <label for="imagen">Imagen a imprimir:</label><br>
                    <input type="file" id="imagen" name="imagen" accept="image/*" required><br><br>
                    <label for="alto">Alto:</label><br>
                    <input type="number" id="alto" name="alto" min=100 max=500 placeholder="Alto en cm" required>
                    <label for="ancho">Ancho:</label><br>
                    <input type="number" id="ancho" name="ancho" min=100 max=500 placeholder="Ancho en cm" required><br><br>
                    <button onclick="return validarFormulario();" type="submit">Enviar</button>
                </form>
            `;
        case 'gigantografias':
            return `
                <h2>Formulario de personalización para Gigantografías</h2>
                <form id="form_rotulos" method="post">
                    <label for="explicacion">Explicación breve de lo que desea personalizar:</label><br>
                    <textarea id="explicacion" name="explicacion" rows="4" cols="50" style="resize: none;" required></textarea><br><br>
                    <label for="imagen">Imagen a imprimir:</label><br>
                    <input type="file" id="imagen" name="imagen" accept="image/*" required><br><br>
                    <label for="alto">Alto:</label><br>
                    <input type="number" id="alto" name="alto" max=500 min=200 placeholder="Alto en cm" required>
                    <label for="ancho">Ancho:</label><br>
                    <input type="number" id="ancho" name="ancho" max=500 min=200 placeholder="Ancho en cm" required><br><br>
                    <button onclick="return validarFormulario();" type="submit">Enviar</button>
                </form>
            `;
        case 'encuadernado':
            return `
                <h2>Formulario de personalización para Encuadernado</h2>
                <form id= "form_encuadernado" method="post">
                    <label for="diseno_pasta">Diseño de la pasta (opcional):</label><br>
                    <input type="file" id="diseno_pasta" name="diseno_pasta" accept="image/*" ><br><br>
                    <label for="tipo_hoja">Tipo de hoja:</label><br>
                    <select id="tipo_hoja" name="tipo_hoja" required>
                        <option value="cuadros">Cuadros</option>
                        <option value="blanco">En blanco</option>
                        <option value="lineas">Líneas</option>
                    </select><br><br>
                    <label for="alto">Alto:</label><br>
                    <input type="number" id="alto" name="alto" min=14.8 max=27.5 placeholder="Alto en cm" required>
                    <label for="ancho">Ancho:</label><br>
                    <input type="number" id="ancho" name="ancho" min=12.5 max=20 placeholder="Ancho en cm" required><br><br>
                    <label for="numero_hojas">Número de hojas:</label><br>
                    <input type="number" id="numero_hojas" name="numero_hojas" min="1" required><br><br>
                    <button type="submit">Enviar</button>
                </form>
            `;
        default:
            return '<p>Por favor, seleccione un producto.</p>';
    }
}


//VALIDACIONES

function validarFormulario() {
    var regexSoloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚüÜ\s]+$/;
    var regexNumeroCelular = /^09\d{8}$/;

    var nombreInput = document.getElementById('nombre');
    var nombreValor = nombreInput.value.trim();

    var celularInput = document.getElementById('celular');
    var celularValor = celularInput.value.trim();

    if (!regexSoloLetras.test(nombreValor)) {
        alert('Por favor, ingrese un nombre válido (solo letras).');
        nombreInput.focus();
        return false; // Evita que el formulario se envíe
    }
    if (!regexNumeroCelular.test(celularValor)) {
        alert('Por favor, ingrese un número de celular válido (formato: 09XXXXXXXX).');
        celularInput.focus();
        return false; // Evita que el formulario se envíe
    }

    // Aquí puedes agregar más validaciones según tus requerimientos
    alert("Formulario enviado")
    
    return true; // Envía el formulario si todas las validaciones son exitosas
}
