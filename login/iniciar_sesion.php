<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Iniciar Sesión</title>
</head>

<body>
    <h1>Iniciar Sesión</h1>
    <form action="procesar_login.php" method="post">
        <label for="nombre">Nombre de Usuario:</label>
        <input type="text" name="nombre" required>
        <label for="contrasena">Contraseña:</label>
        <input type="password" name="contrasena" required>
        <button type="submit">Iniciar Sesión</button>
    </form>
    <div class="recuperar-contraseña">
        <h1>¿Olvidaste tu contraseña?</h1>
        <p>
            No te preocupes, puedes
            <a href="recuperar_contraseña.html">recuperar tu contraseña aquí</a>
        </p>
    </div>
</body>

</html>