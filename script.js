var dynamicContent = document.getElementById("dynamicContent");
var leftArrow = document.getElementById("leftArrow");
var rightArrow = document.getElementById("rightArrow");
var mainCamera = document.getElementById("mainCamera");
var sceneEnvironment = document.getElementById("sceneEnvironment");
var FinalSound = document.getElementById("FinalSound");

var listOfPresets = ["contact", "egypt", "forest", "goaland", "yavapai", "threetowers", "poison", "arches", "japan", "dream", "volcano", "osiris", "moon"];
var page = 1;
var numberOfPages = 3;


var firstPage = "<a-text color='black' value='Primera página'></a-text>";

var secondPage = "<a-text color='black' value='Segunda página'></a-text>";

var finalPage = `<a-text
            position='0 2.5 0'
            value="Thank's for watching!"
            color='#333'
            align='center'
            text='font: sourcecodepro;'
            side='double'
          ></a-text>
          <a-entity 
            animation-mixer 
            gltf-model='#trump' 
            scale='1.1 1.1 1.1' 
            position='0 0 0'
            id='trumpGLTF'
          ></a-entity>`;

addEventListener("DOMContentLoaded", () => {
  dynamicContent.innerHTML = firstPage;
  validatePage();
  sceneEnvironment.setAttribute("environment", changeScene());
});

leftArrow.addEventListener("click", function() {
  page--;
  dynamicContent.innerHTML = changeSlide();
  validatePage();
  sceneEnvironment.setAttribute("environment", changeScene());
});

rightArrow.addEventListener("click", function() {
  page++;
  dynamicContent.innerHTML = changeSlide();
  validatePage();
  sceneEnvironment.setAttribute("environment", changeScene());
});


function changeSlide() {
  switch(page) {
    case 1: 
      return firstPage;
    break;
    case 2: 
      return secondPage;
    break;
    case 3: 
      return finalPage;
    break;
    default:
      return "<a-text color='black' value='Hubo un error!!'></a-text>";
    break;
  }
}

function validatePage() {
  if(page == 1) /* leftArrow.setAttribute("visible", "false");*/ leftArrow.classList.remove("clickable");
  else if(page == numberOfPages) {
    // rightArrow.setAttribute("visible", "false");
    rightArrow.classList.remove("clickable");
    mainCamera.setAttribute("wasd-controls", "acceleration: 30");
    FinalSound.components.sound.playSound();
  }
  else if(page != 1 || page != numberOfPages) {
    // leftArrow.setAttribute("visible", "true");
    leftArrow.classList.add("clickable");
    // rightArrow.setAttribute("visible", "true");
    rightArrow.classList.add("clickable");
    // FinalSound.components.sound.stopSound();
  }
}

function changeScene() {
  var sceneToChange = listOfPresets[randomNumber(0, listOfPresets.length)];
  if(sceneToChange == null) return `preset: ${ listOfPresets[0] }`; 
  return `preset: ${ sceneToChange }`;
}

function randomNumber(min, max) { 
  return Math.round(Math.random() * (max - min) + min);
}