<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Obtener los datos del formulario
    $nombre = $_POST['nombre'];
    $apellido = isset($_POST['apellido']) ? $_POST['apellido'] : ''; // Verifica si 'apellido' está definido

    $contrasena = $_POST['contrasena'];

    // Leer los datos existentes del archivo JSON
    $datos = file_get_contents('data_registros.json');
    $usuarios = json_decode($datos, true);

    // Comprobar si el nombre de usuario ya existe con el mismo apellido
    $usuarioExistente = false;
    foreach ($usuarios as $usuario) {
        if ($usuario['nombre'] === $nombre && isset($usuario['apellido']) && $usuario['apellido'] === $apellido) {
            $usuarioExistente = true;
            break;
        }
    }

    if ($usuarioExistente) {
        echo "Ya existe un usuario con el mismo nombre y apellido. Por favor, verifica los datos.";
    } else {
        // Generar un salt aleatorio para fortalecer la seguridad
        $salt = bin2hex(random_bytes(16)); // Genera un salt de 16 bytes en hexadecimal

        // Generar un hash de la contraseña con el salt
        $hashedPassword = password_hash($contrasena . $salt, PASSWORD_DEFAULT);

        // Calcular el siguiente "id"
        $nextId = count($usuarios) + 1;

        // Crear un nuevo usuario con la estructura deseada
        $nuevoUsuario = [
            "id" => $nextId,
            "nombre" => $nombre,
            "apellido" => $apellido, // Almacena el apellido
            "contrasena" => $hashedPassword, // Almacena el hash en lugar de la contraseña en texto claro
            "salt" => $salt // Almacena el salt
        ];

        // Agregar el nuevo usuario al array de usuarios
        $usuarios[] = $nuevoUsuario;

        // Guardar los datos actualizados en el archivo JSON
        file_put_contents('data_registros.json', json_encode($usuarios, JSON_PRETTY_PRINT));

        echo "Registro exitoso. Puedes iniciar sesión.";
    }
}
?>
