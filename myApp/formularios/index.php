<?php 

if(isset($_POST['submit'])){
    $nombre = $_POST['nombre'];
    $correo = $_POST['correo'];
    if(!empty($nombre)){
        $nombre=trim($nombre);
        $nombre= filter_var($nombre, FILTER_SANITIZE_STRING);
        echo 'hola '. $nombre;
    }
    
}else{
      echo 'no se envio nada';
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']);?>" method="post">
        <input type="text" name="nombre" id="" >
        <br>
        <input type="email" name="correo" id="">
        <br>
        <input type="submit" value="enviar" name="submit">
        <!-- <input type="search" name="" id=""> -->
    </form>
</body>
</html>