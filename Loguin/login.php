<?php
// Conectar a la base de datos
$conexion = mysqli_connect("localhost", "root", "", "sga");

// Recibir los datos del formulario
$correo = isset($_POST["Correo"]) ? $_POST["Correo"] : "";
$contraseña = isset($_POST["Contraseña"]) ? $_POST["Contraseña"] : "";

// Consultar si el correo y la contraseña son correctos
$resultado = mysqli_query($conexion, "SELECT * FROM usuarios WHERE Correo='$correo' AND Contraseña='$contraseña'");
$fila = mysqli_fetch_array($resultado);

if ($fila && isset($fila["Rol"])) {
    // Si el correo y la contraseña son correctos, redirigir al usuario a la página correspondiente según su rol
    $rol = $fila["Rol"];
    if ($rol == "estudiante") {
        header("Location: ../Modulos/Estudiante/Estudiante.html");
        exit;
    } elseif ($rol == "Docente") {
        header("Location: ../Modulos/Docente/Docente.html");
        exit;
    } elseif ($rol == "Administrador") {
        header("Location: ../Modulos/Administrador/Administrador.html");
        exit;
    }
} else {
    $mensaje = "Correo o contraseña incorrectos";
    header("Location: login.html?mensaje=".urlencode($mensaje));
}
?>
