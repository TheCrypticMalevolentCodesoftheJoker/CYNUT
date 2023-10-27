Mis disculpas por la confusión anterior. Aquí está la corrección solicitada:

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro de Usuario</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <link rel="stylesheet" href="estilo_registrar.css">
</head>
<body>
    <header class="menu">
        <li>
            <a href="../Index.php"><img class="centro" src="../RECURSOS/iconos/inicio.png" alt="Inicio" /></a>
        </li>
    </header>
    <main>
        <div class="imagen">
            <h1>Crear usuario y contraseña</h1>
            <img src="../RECURSOS/logo/logo-remove.png" alt="cargando...">
        </div>
        <div class="container">
            <form action="procesar_registro.php" method="post">
                <div class="input-field">
                    <input id="nombre" type="email" name="nombre" required>
                    <label for="nombre">Correo</label>
                </div>
                <div class="input-field">
                    <input id="contrasena" type="password" name="contrasena" required>
                    <label for="contrasena">Contraseña</label>
                </div>
                <div class="input-field">
                    <input id="repetir_contrasena" type="password" name="repetir_contrasena" required>
                    <label for="repetir_contrasena">Repetir contraseña</label>
                </div>
                <button class="btn waves-effect waves-light" type="submit">Registrarse</button>
            </form>
        </div>
    </main>
    <p id="login_mensaje" class="center-align"></p>
    <script src="../Index/jquery.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
</body>
</html>