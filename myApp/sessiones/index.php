<?php 
session_start();
$_SESSION['nombre']= 'Carlos';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="estilos.css">
</head>
<body>
    <h1 class="titulo-principal">Pagina de inicio</h1>
    <br>
    <a href="pagina2.php">ir a siguiente pagina...</a>
</body>
</html>