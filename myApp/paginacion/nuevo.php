<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Formulario de inserción</title>
</head>
<body>
    <h2>Insertar nuevo artículo</h2>
    <form action="procesar.php" method="POST">
        <label for="articulo">Artículo:</label>
        <input type="text" name="articulo" id="articulo" required>
        <br>
        <input type="submit" value="Guardar">
    </form>
</body>
</html>
