document.addEventListener("DOMContentLoaded", () => {
    /* change color api call */
    document.querySelector('#changeColor').addEventListener('click', changeColor); 
    document.querySelector('#rotateColor').addEventListener('click', rotateColor); 
    document.querySelector('#copybtn').addEventListener('click', copyCode); 
    changeBackground();
    changeColor();
});
/**  Change Background  */
function changeBackground(){
    fetch("APIs/ChangeColor.php")
    .then((response) => response.json())
    .then((data) => {
        //console.log(data);

        document.querySelector('body').style.animationPlayState = "ease-out";
        document.querySelector('body').style.background = `linear-gradient(to right, ${data.color1} , ${data.color2})`;
        
    })
}
/** Change Color of Gradient card */

function changeColor(){ 
    fetch("APIs/ChangeColor.php")
    .then((response) => response.json())
    .then((data) => {
        //    console.log(data);
        changeCode(data.color1, data.color2, "right");
    });
}
/** Rotate color in gradient card */
function rotateColor(){
    fetch(`APIs/ChangeDirection.php?d=${direction} `)
    .then((response) => response.json())
    .then((data) => {
        //console.log(direction);
        //console.log(data);
        changeCode(data.color1, data.color2, data.direction);

    });
}
/** Change Text of the code section */
function changeCode(color1, color2, direction){
        let gradient = document.querySelector("#gradient");
        gradient.style.animationPlayState = "running";
        gradient.style.animationIterationCount = "infinite";
        
        document.querySelector("#gradient").style.background = `linear-gradient(to right, ${color1} , ${color2})`;
        document.querySelectorAll('.btn-link').forEach( (button) => button.style.color = color1);
        document.querySelector('#copybtn').style.background = `linear-gradient(to right, ${color1} , ${color2})`;
        document.querySelector("#single-color").innerHTML = color1 + ';';
        document.querySelector("#multi-color-linear").innerHTML  = `${color1} , ${color2}`;
        document.querySelector("#multi-color-webkit").innerHTML  = `${color1} , ${color2}`;
        document.querySelector("#dir-linear").innerHTML = direction;
        document.querySelector("#dir-webkit").innerHTML = direction;
        document.querySelector("#copybtn").innerHTML = "Copy to clipboard";
        setTimeout( () => {
            gradient.style.animationIterationCount = "initial";
            gradient.style.animationPlayState = "paused";
        }, 6000); 
}
/** Copy code into the clipboard */
function copyCode(){
    
    let textarea = document.createElement("textarea");
    let body = document.querySelector("body");
    body.append(textarea);
    textarea.value = `
    background: ${color1};
    background: linear-gradient(to ${direction}, ${color1} , ${color2});
    background: -webkit-linear-gradient(to ${direction}, ${color1} , ${color2});
    `;
    textarea.select();
    textarea.setSelectionRange(0,99999);
    document.execCommand("copy");
    //console.log(textarea.value);
    textarea.remove();
    document.querySelector("#copybtn").innerHTML = "<i class='fas fa-check'></i> Copied to clipboard";
}
