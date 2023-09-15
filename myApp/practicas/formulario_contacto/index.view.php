<!DOCTYPE html>
<html lang="es">
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
            <input type="text" class="form-control" name="nombre" id="nombre" placeholder="Nombre" value="<?php if(!$enviado && isset($nombre))echo $nombre?>">
            <input type="text" class="form-control" name="correo" id="correo" placeholder="Correo electronico" value="<?php if(!$enviado && isset($correo))echo $correo?>">
            <textarea id="mensaje" class="form-control" name="mensaje" placeholder="Mensaje..." value="<?php if(!$enviado && isset($mensaje))echo $mensaje?>"></textarea>

            <?php if(!empty($errores)):?>
                <div class="alert error">
                    <?php echo $errores; ?>
                </div>
            <?php elseif($enviado):?>
                <div class="alert exito">
                    <p>Enviado correctamente, <?php echo $mensaje_preparado; ?></p>
                </div>
            <?php 
                endif
            ?>
            <input type="submit" class="btn-enviar" value="Enviar correo" name="submit">
        </form>
    </div>
</body>
</html>