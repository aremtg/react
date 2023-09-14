<?php 
        function calcular_area($base, $altura){
            $resultado = ($base * $altura)/2;
            return $resultado;
        }
        echo 'el area es '. calcular_area(20, 15)
?>
<?php 

// function saludo($name){
//     echo 'hola '.$name;
// }
// saludo('samuel');

function sumar($n1, $n2){
    $resu = $n1 + $n2;
    echo $resu;
}

sumar(3, 3);
?>