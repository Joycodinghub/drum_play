var button = document.querySelectorAll("button.drum");

for(var i =0;i<document.querySelectorAll(".drum").length;i++){
button[i].addEventListener("click",handleClick);

}

function handleClick(){

    var buttonVar = this.innerHTML;

    makeSound(buttonVar);

    animation(buttonVar);
    
    
}

var doc = document;
doc.addEventListener("keypress",keyPress);

function keyPress(event){
    var key = event.key;

    makeSound(key);
    animation(key);
}

function makeSound(key){

    switch (key) {
        case "w":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;        
        case "k":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        default:
            alert("Wrong key");
            break;
    }

}

function animation(key){
  var actBTn = document.querySelector("." + key);

    actBTn.classList.add("pressed");

    function time(){
        actBTn.classList.remove("pressed");
    }
    setTimeout(time,100);
}