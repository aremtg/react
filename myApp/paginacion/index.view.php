<?php 
require 'index.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Paginacion</title>
    <link rel="stylesheet" href="estilos.css">
</head>
<body>
    <div class="contenedor">
        <h1>ARTICULOS</h1>
    <section class="articulos">
        <ul>
        <li>1. -Lorem ipsum dolor sit amet consectetur adipisicing elit</li>
        <li>2. -Lorem ipsum dolor sit amet consectetur adipisicing elit</li>
        <li>3. -Lorem ipsum dolor sit amet consectetur adipisicing elit</li>
        <li>4. -Lorem ipsum dolor sit amet consectetur adipisicing elit</li>
        <li>5. -Lorem ipsum dolor sit amet consectetur adipisicing elit</li>
        </ul>
    </section>
    <section class="paginacion">
        <ul>
        <li class="disabled">&laquo;</li>
        <?php 
        
        ?>
        <li class="active"><a href="#">1</a></li>
        <li><a href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li><a href="#">4</a></li>
        <li><a href="#">5</a></li>
        <li><a href="#">&raquo;</a></li>    
    </ul>
    </section>
    </div>
</body>
</html>