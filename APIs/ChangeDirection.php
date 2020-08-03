<?php 
include("RandomGradient.php");
    $dir = $_REQUEST["d"];
    $rg1 = new RandomGradient();
    $rg1->changeDirection($dir); 
    $obj = ["direction"=>$rg1->direction, "directionBefore"=>$dir];
    $jsonString = json_encode($obj);
    echo $jsonString;

?>