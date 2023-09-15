<?php 
$errores = '';
$enviado = '';
if(isset($_POST['submit'])){
    $nombre = $_POST['nombre'];
    $correo = $_POST['correo'];
    $mensaje = $_POST['mensaje'];

    if(!empty($nombre)){
        // elimina espacios al final e inicio
        $nombre = trim($nombre);
        // sanar, eliminar caracteres especiales
        $nombre = filter_var($nombre, FILTER_SANITIZE_STRING);
        
    }else{
        $errores .= 'Por favor ingrese un nombre <br/>';
    }
    if(!empty($correo)){
        $correo = filter_var($correo, FILTER_SANITIZE_EMAIL);
       if(!filter_var($correo, FILTER_VALIDATE_EMAIL)){
        $errores .= 'Ingresa un correo valido';
        }
    }else{
        $errores .= 'Por favor ingresa un correo <br/>';
    }

    if(!empty($mensaje)){
        $mensaje = htmlspecialchars($mensaje);
        $mensaje = trim($mensaje);
        $mensaje = stripcslashes($mensaje);
    }else{
        $errores .= 'Por favor escribe un mensaje';
    }

    if(!$errores){
        $enviar_a = 'uncorreo@gmail.com';
        $asunto = 'Correo enviado desde mi pagina';
        $mensaje_preparado = "De: $nombre \n";
        $mensaje_preparado .= "Correo: $correo \n";
        $mensaje_preparado .= "Mensaje: " .$mensaje;
        $enviado = true;
    }
}
require 'index.view.php';
?>