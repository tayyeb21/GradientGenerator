<?php 
include("RandomGradient.php");
    
    $rg1 = new RandomGradient();
    $rg2 = new RandomGradient();
    // $obj->color1 = $rg1->color;
    // $obj->color2 = $rg2->color;    
    $obj = ["color1"=>$rg1->color,"color2"=>$rg2->color];
    $jsonString = json_encode($obj);
    echo $jsonString;
?>