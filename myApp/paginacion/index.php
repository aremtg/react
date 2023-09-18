<?php 
require_once 'conexion.php';
$pagina = isset($_GET['pagina']) ? (int)$_GET['pagina'] : 1 ;
$postPorPagina = 4;

$inicio = ($pagina > 1) ? ($pagina * $postPorPagina - $postPorPagina) : 0 ;
$articulos = $conexion ->prepare("
SELECT SQL_CALC_FOUND_ROWS * FROM articulos 
LIMIT $inicio, $postPorPagina
");
$articulos->execute();
$articulos = $articulos->fetchAll();

if(!$articulos){
    header('Location: index.php');
}

$totalAr = $conexion->query('SELECT FOUND_ROWS() as total');
$totalAr = $totalAr->fetch()['total'];

$numeroPagina = ceil($totalAr / $postPorPagina);

echo $numeroPagina;
require 'index.view.php';
?>