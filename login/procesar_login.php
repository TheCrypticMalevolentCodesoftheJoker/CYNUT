<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Obtener los datos del formulario
    $nombre = $_POST['nombre'];
    $contrasena = $_POST['contrasena'];

    // Leer los datos de usuarios desde el archivo JSON
    $datos = file_get_contents('data_registros.json');
    $usuarios = json_decode($datos, true);

    // Buscar al usuario por nombre
    $usuarioEncontrado = null;
    foreach ($usuarios as $usuario) {
        if ($usuario['nombre'] === $nombre) {
            $usuarioEncontrado = $usuario;
            break;
        }
    }

    // Verificar si se encontró al usuario y si la contraseña es correcta
    if ($usuarioEncontrado && password_verify($contrasena . $usuarioEncontrado['salt'], $usuarioEncontrado['contrasena'])) {
        // Inicio de sesión exitoso
        echo "Inicio de sesión exitoso. Bienvenido, " . $nombre . " " . $usuarioEncontrado['apellido'] . "!";
    } else {
        // Credenciales incorrectas
        echo "Inicio de sesión fallido. Verifica tus credenciales.";
    }
}
?>
