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
//funciones preestablecidas
var_dump($meses);
print_r($meses);
//
$numero = 15.678;
round($numero);
//numero al azar entre dos numeros
$nu_azar = rand(1, 13);
//redondear hacia arriba
$nu_hacia_arriba = ceil($numero);
echo $nu_hacia_arriba;
//die
var_dump($numero);
die();                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
?>
