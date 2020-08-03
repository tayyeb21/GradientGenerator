document.addEventListener("DOMContentLoaded", () => {
    /* change color api call */
    document.querySelector('#changeColor').addEventListener('click', () => {
        let Icon = document.querySelector("#changeColorIcon");
        Icon.className = Icon.getAttribute("class").replace("fa-spin","");
        Icon.className = Icon.getAttribute("class").concat("fa-spin");
        changeColor();  
        setTimeout(() => Icon.className = Icon.getAttribute("class").replace("fa-spin",""), 1000);
    }); 
    document.querySelector('#rotateColor').addEventListener('click', () => {
        let Icon = document.querySelector("#rotateColorIcon");
        Icon.className = Icon.getAttribute("class").replace("fa-spin","");
        Icon.className = Icon.getAttribute("class").concat("fa-spin");
        rotateColor();  
        setTimeout(() => Icon.className = Icon.getAttribute("class").replace("fa-spin",""), 1000);
    });  
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
let color1 = "";
let color2 = "";
let direction = "right";
function changeColor(){ 
    fetch("APIs/ChangeColor.php")
    .then((response) => response.json())
    .then((data) => {
        //    console.log(data);
        direction = "right";
        color1 = data.color1;
        color2 = data.color2;
        changeCode();
    });
}
/** Rotate color in gradient card */
function rotateColor(){
    fetch(`APIs/ChangeDirection.php?d=${direction} `)
    .then((response) => response.json())
    .then((data) => {
        //console.log(direction);
        //console.log(data);
        direction = data.direction;
        changeCode();

    });
}
/** Change Text of the code section */
function changeCode(){
        
        document.querySelector("#gradient").style.background = `linear-gradient(to ${direction}, ${color1} , ${color2})`;
        document.querySelectorAll('.btn-link').forEach( (button) => button.style.color = color1);
        document.querySelector('#copybtn').style.background = `linear-gradient(to right, ${color1} , ${color2})`;
        document.querySelector("#single-color").innerHTML = color1 + ';';
        document.querySelector("#multi-color-linear").innerHTML  = `${color1} , ${color2}`;
        document.querySelector("#multi-color-webkit").innerHTML  = `${color1} , ${color2}`;
        document.querySelector("#dir-linear").innerHTML = direction;
        document.querySelector("#dir-webkit").innerHTML = direction;
        document.querySelector("#copybtn").innerHTML = "Copy to clipboard";
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
