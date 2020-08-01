<?php 
include("RandomGradient.php");
    $dir = $_REQUEST["d"];
    $rg1 = new RandomGradient();
    $rg1->changeDirection($dir);
    // $obj->color1 = $rg1->color;
    // $obj->color2 = $rg2->color;    
    $obj = ["direction"=>$rg1->direction, "dir"=>$dir];
    $jsonString = json_encode($obj);
    echo $jsonString;

?>