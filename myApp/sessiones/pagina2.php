<?php 
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="estilos.css">
    <h1 class="titulo-principal"> Hola <?php echo $_SESSION['nombre'];?>, Bienvenido a Obal</h1>
</head>
<body>
    
</body>
</html>