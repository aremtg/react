<?php 
require_once 'conexion.php';
$pagina = isset($_GET['pagina']) ? (int)$_GET['pagina'] : 1 ;
$postPorPagina = 6;

$inicio = ($pagina > 1) ? ($pagina * $postPorPagina - $postPorPagina) : 0 ;
//el sql_calc sirve para contar y saber cuantas filas afecta
$articulos = $conexion ->prepare(
    "SELECT SQL_CALC_FOUND_ROWS * FROM articulos LIMIT $inicio, $postPorPagina");
$articulos->execute();
$articulos = $articulos->fetchAll();

if(!$articulos){
    header('Location: index.php');
}
//este select found_rows se trae gracias al sql anterior
$totalAr = $conexion->query('SELECT FOUND_ROWS() as total');
$totalAr = $totalAr->fetch()['total']; 

$numeroPaginas = ceil($totalAr / $postPorPagina);


echo $numeroPaginas;
require 'index.view.php';
?>