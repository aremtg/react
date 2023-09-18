<?php
// Conectar a la base de datos (reemplaza con tus credenciales)
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "paginacion";

$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Error en la conexión a la base de datos: " . $conn->connect_error);
}

// Obtener los datos del formulario
$articulo = $_POST['articulo'];

// Preparar la consulta SQL
$sql = "INSERT INTO articulos (articulo) VALUES ('$articulo')";

// Ejecutar la consulta SQL
if ($conn->query($sql) === TRUE) {
    echo "El artículo se ha insertado correctamente.";
} else {
    echo "Error al insertar el artículo: " . $conn->error;
}

// Cerrar la conexión a la base de datos
$conn->close();
?>
