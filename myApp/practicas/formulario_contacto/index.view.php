<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="estilos.css">
</head>
<body>
    <div class="wrap">
        <form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']);?>" method="post">
        <h1 class="title">Obal</h1>
            <input type="text" class="form-control" name="nombre" id="nombre" placeholder="Nombre">
            <input type="email" class="form-control" name="correo" id="correo" placeholder="Correo electronico">
            <textarea id="mensaje" class="form-control" name="mensaje"  placeholder="Mensaje..."></textarea>
            <!-- <div class="alert error">
                Algo salio mal
            </div>
            <div class="alert exito">
                Enviado con exito
            </div> -->
            <input type="submit" class="btn-enviar" value="Enviar correo" name="submit">
        </form>
    </div>
</body>
</html>