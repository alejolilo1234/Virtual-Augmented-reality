// DOM elements

var dynamicContent = document.getElementById("dynamicContent");
var leftArrow = document.getElementById("leftArrow");
var rightArrow = document.getElementById("rightArrow");
var mainCamera = document.getElementById("mainCamera");
var sceneEnvironment = document.getElementById("sceneEnvironment");
var FinalSound = document.getElementById("FinalSound");

// Global variables

var listOfPresets = ["contact", "egypt", "forest", "goaland", "yavapai", "threetowers", "poison", "arches", "japan", "dream", "volcano", "osiris"];
var page = 1;
var numberOfPages = 3;

// Slides

var firstPage = makeText('0 2.7 0', 'Virtual & Augmented reality', '3.5', '20', '30') + makeText('0 1.8 0', 'By Jhon Abril & Juan', '4.5', '40', '30') + `<a-plane color='#333' width='3.3' position='0 2.1 0' height='.02'></a-plane><a-entity position='0 1.1 0' rotation='20 0 -18'><a-entity position='0 0 0' animation='property: rotation; from: 0 0 0; to: 0 360 0; easing: linear; loop: true; dur: 5000;'><a-sphere scale='.3 .3 .3' src='#planet'></a-sphere></a-entity><a-entity position='0 0 0' animation='property: rotation; from: 0 0 0; to: 0 -360 0; easing: linear; loop: true; dur: 3000;'><a-sphere position='0 0 .6' src='#moon' scale='0.05 0.05 0.05' animation='property: rotation; from: 0 0 0; to: 0 360 0; easing: linear; loop: true; dur: 4000;'></a-sphere></a-entity></a-entity>`;

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

// Functions

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
  if(page == 1) leftArrow.classList.remove("clickable");
  else if(page == numberOfPages) {
    rightArrow.classList.remove("clickable");
    mainCamera.setAttribute("wasd-controls", "acceleration: 30");
    FinalSound.components.sound.playSound();
  }
  else if(page != 1 || page != numberOfPages) {
    leftArrow.classList.add("clickable");
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

// Primitives functions

function makeText(position, content, width, count, lineHeight) {
  return  `<a-text 
              position='${ position }'
              value='${ content }'
              width='${ width }'
              wrap-count='${ count }'
              line-height='${ lineHeight }'
              align='center'
              side='double'
              text='font: sourcecodepro;'
              color='#333'
            ></a-text>`;
}