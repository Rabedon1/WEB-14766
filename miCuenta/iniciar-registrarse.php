<?php
// Verifica si se ha enviado el formulario de inicio de sesión
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Datos quemados para el prototipo
    $emailCorrecto = "raul29247@gmail.com";
    $contrasenaCorrecta = "contrasena";

    // Obtiene los datos ingresados por el usuario
    $emailIngresado = $_POST["email"];
    $contrasenaIngresada = $_POST["contrasena"];

    // Verifica si los datos son correctos
    if ($emailIngresado === $emailCorrecto && $contrasenaIngresada === $contrasenaCorrecta) {
        // Redirige a la página principal si los datos son correctos
        header("Location: ../index.html");
        exit();
    } else {
        // Muestra un mensaje de error si los datos son incorrectos
        $mensajeError = "Usuario o contraseña incorrectos";
    }
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styleIniciarSesion-registro.css">
    <script defer src="../index.js"></script>
    <title>Inicio de Sesión | Registrarse</title>
</head>

<body>

    <div class="container" id="container">
        <div class="form-container sign-up">
            <form action="resultadosRegistro.php" method="post" id="nivelacionForm" onsubmit="return validarFormulario();" enctype="multipart/form-data">
                <h1>Crear Cuenta</h1>
                <input placeholder="Nombre" type="text" id="nombre" pattern="[A-Za-záéíóúÁÉÍÓÚñÑüÜ\s]+" title="Solo se permiten letras y espacios (si es hijo de Elon Musk salado)" name="nombre" required>
                <input placeholder="Apellido" type="text" id="apellidos"  pattern="[A-Za-záéíóúÁÉÍÓÚñÑüÜ\s]+" title="Solo se permiten letras y espacios (si es hijo de Elon Musk salado)" name="apellidos" required>
                <input placeholder="Correo" type="email" id="correo" name="correo" required>
                <input placeholder="Contraseña" type="password" id="contraseña" name="contraseña" required>
    
                <button>Registrarse</button>
            </form>
        </div>
        <div class="form-container sign-in">
            <form action="login.php" method="post">
                <h1>Iniciar Sesión</h1>
                <input placeholder="Correo" type="email" id="email" name="email" required>
                <input placeholder="Contraseña" type="password" id="contrasena" name="contrasena" required>
                <button type="submit">Iniciar Sesión</button>
            </form>
        </div>
        <div class="toggle-container">
            <div class="toggle">
                <div class="toggle-panel toggle-left">
                    <h1>Hola de nuevo</h1>
                    <p>Ingresa tus datos personales para acceder a los servicios de Ideart</p>
                    <button class="hidden" id="login">Iniciar Sesión</button>
                </div>
                <div class="toggle-panel toggle-right">
                    <h1>Hola!</h1>
                    <p>Registrate con tus datos personales para acceder a los servicios de Ideart</p>
                    <button class="hidden" id="register">Registrarse</button>
                </div>
            </div>
        </div>
    </div>
    
</body>

</html>