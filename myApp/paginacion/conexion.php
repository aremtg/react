<?php 
    // $servername = "localhost";
    // $database = "paginacion";
    // $username = "root";
    // $password = "";
    // // Create connection
    // $conn = mysqli_connect($servername, $username, $password, $database);
    // // Check connection
    // if (!$conn) {
    //     die("Connection failed: " . mysqli_connect_error());
    // }
    // echo "Connected successfully";
    // mysqli_close($conn);

    try {
        $conexion = new PDO('mysql:host=localhost;dbname=paginacion', 'root', '');
    } catch (PDOException $th) {
       echo 'no se puso conectar '. $th->getMessage();
       die();
    }

    
?>