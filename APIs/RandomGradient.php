<?php
class RandomGradient{
        public $hex = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e"];
        public $color = "#";
        public $direction = "right";
        function __construct(){
            for($i = 0; $i < 6; $i++ ){
                $randomNum = rand(0,14);
                $hexVal = $this->hex[$randomNum];
                $this->color = $this->color.$hexVal;
            }
        }
        function changeDirection($direction){
            if($direction == "right")
                $this->direction = "left";
            elseif($direction == "left") 
                $this->direction = "top";
            elseif($direction == "top")
                $this->direction = "bottom";
            else
                $this->direction = "right";
        }
    }