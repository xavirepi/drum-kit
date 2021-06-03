//Detecting button press

for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    let buttonInnnerHTML = this.innerHTML;

    makeSound(buttonInnnerHTML);

    buttonAnimation(buttonInnnerHTML);

  });

}

// Detecting keyboard press

document.addEventListener("keydown", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});

function makeSound(key) {

  switch (key) {

    case "w":
      let tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;

    case "a":
      let tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;

    case "s":
      let tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      let snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "j":
      let crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "k":
      let kickBass = new Audio('sounds/kick-bass.mp3');
      kickBass.play();
      break;

    case "l":
      let tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    default:
      console.log(key);
  }

}

function buttonAnimation(currentKey) {

  let activeButton = document.querySelector("." + currentKey); // Add .pressed CSS class style to the element using JavaScript

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
