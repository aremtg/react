<?php 
$meses = ['enero', 'febrero', 'marzo', 'abril',
 'mayo', 'junio', 'julio','agosto', 'septiembre',
 'octubre', 'noviembre','diciembre' ];
$mes = "abrril";
// $edad = ;
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Bienvanida a Obal, tatiana </h1>
    <?php 
        switch ($mes) {
            case 'enero':
                echo 'te deseo un feliz año nuevo';
            break;
            case 'abril':
                echo 'Este mes eres especial, feliz cumpleaños';
            break;
            
            default:
            echo "Un mes mas, una semana mas, una oportunidad mas";
            break;
        };

        $resu = (isset($edad)) ? 'tienes '.$edad : 'no escogiste tu edad';
        echo $resu;

        for ($i = 1; $i<= 5 ; $i++){
            echo 'te amo <br/>';
        }
        $x = 1;
        while($x <= 10){
            echo 'hola'. $x.'<br/>';
            $x++;
        }
        // ahora con variables
        for($i = 0; $i < count($meses); $i++){
            echo 'va en '.$meses[$i]. '<br/>';
        }
        // while con contador

        $contador = 0;
        while ($contador < count($meses)) {
            echo 'es '.$meses[$contador]. '<br/>';
            $contador++;
        }

        // do 
        $i = 1;

        do {
        echo $i.'<br/>';
        $i++;
        } while ($i <= 10);
        // foreach
        $paises = ['mexico', 'españa','colombia', 'peru', 'arge', 'vene', 'gua'];
        foreach($paises as $pais){
            if($pais == 'arge'){
                break;
            }
            echo $pais. '<br/>';
        
        }
    ?>
    <h1>paises latinoamericanos</h1>
    <?php 

            foreach($paises as $pais){
                if($pais == 'españa'){
                    continue;
                }
                echo $pais .'<br/>';
            }
            var_dump($meses);
            print_r($meses);
            
    ?>

</body>
</html>