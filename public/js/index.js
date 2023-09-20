import {db , storage} from '../js/init_firebase'
import { collection, getDocs } from "firebase/firestore"; 
import { ref, getDownloadURL } from "firebase/storage";
import { compileAsync } from 'sass';


let arrayAvis = []
const containerAvis = document.getElementById('containerAvis')


const querySnapshot = await getDocs(collection(db, 'avis'))
querySnapshot.forEach((doc => {
  console.log(doc.id, " => ", doc.data());
  arrayAvis.push(doc.data())
}))


console.log(arrayAvis);

let rand = Math.floor(Math.random()*arrayAvis.length)
const selectedAvis = arrayAvis[rand]
console.log(selectedAvis);

async function affichageAvis (selectedAvis, containerAvis) {
    const fctAvis = await selectedAvis
    const divAvis = document.createElement('div')
    divAvis.innerHTML = `
        <div class="nameAndNote">
            <div>
                <p>${fctAvis.auteur}</p>
                <p>Prestation : ${fctAvis.prestation}</p>
            </div>
            <div>
                ${note(fctAvis)}
            </div>
        </div>
        <div class="avisUser">
            <p>
                "${fctAvis.avis}"
            </p>
        </div>
    `
containerAvis.append(divAvis)
}

affichageAvis(selectedAvis, containerAvis)

function note (fctAvis) {
    /* const divNote = document.createElement('div')
    const starStoke = document.createElement('i')
    starStoke.innerHTML = `<img src="./public/assets/logo/star_stroke.svg" alt="" srcset="">`
    const starOrange = document.createElement('i')
    starOrange.innerHTML = `<img src="./public/assets/logo/Star_orange.svg" alt="" srcset="">`
    console.log('je suis dans la function note :', fctAvis.note)
    for (let index = 0; index < 5; index++) {
        if(fctAvis.note > index){
            return divNote.append(starOrange)
        }else {
            return divNote.append(starStoke)
            console.log("j'ai une mauvaise note");
        }
        
    } */

    switch (fctAvis.note) {
        case 1: 
            return `
                <i><img src="./public/assets/logo/star_stroke.svg" alt="" srcset=""></i>
                <i><img src="./public/assets/logo/star_stroke.svg" alt="" srcset=""></i>
                <i><img src="./public/assets/logo/star_stroke.svg" alt="" srcset=""></i>
                <i><img src="./public/assets/logo/star_stroke.svg" alt="" srcset=""></i>
                <i><img src="./public/assets/logo/Star_orange.svg" alt="" srcset=""></i>
            `
        case 2: 
            return `
                <i><img src="./public/assets/logo/star_stroke.svg" alt="" srcset=""></i>
                <i><img src="./public/assets/logo/star_stroke.svg" alt="" srcset=""></i>
                <i><img src="./public/assets/logo/star_stroke.svg" alt="" srcset=""></i>
                <i><img src="./public/assets/logo/Star_orange.svg" alt="" srcset=""></i>
                <i><img src="./public/assets/logo/Star_orange.svg" alt="" srcset=""></i>
            `
        case 3: 
            return `
                <i><img src="./public/assets/logo/star_stroke.svg" alt="" srcset=""></i>
                <i><img src="./public/assets/logo/star_stroke.svg" alt="" srcset=""></i>
                <i><img src="./public/assets/logo/Star_orange.svg" alt="" srcset=""></i>
                <i><img src="./public/assets/logo/Star_orange.svg" alt="" srcset=""></i>
                <i><img src="./public/assets/logo/Star_orange.svg" alt="" srcset=""></i>
            `
        
        
        case 4: 
            return `
                <i><img src="./public/assets/logo/star_stroke.svg" alt="" srcset=""></i>
                <i><img src="./public/assets/logo/Star_orange.svg" alt="" srcset=""></i>
                <i><img src="./public/assets/logo/Star_orange.svg" alt="" srcset=""></i>
                <i><img src="./public/assets/logo/Star_orange.svg" alt="" srcset=""></i>
                <i><img src="./public/assets/logo/Star_orange.svg" alt="" srcset=""></i>
            `
        case 5: 
            return `
                <i><img src="./public/assets/logo/Star_orange.svg" alt="" srcset=""></i>
                <i><img src="./public/assets/logo/Star_orange.svg" alt="" srcset=""></i>
                <i><img src="./public/assets/logo/Star_orange.svg" alt="" srcset=""></i>
                <i><img src="./public/assets/logo/Star_orange.svg" alt="" srcset=""></i>
                <i><img src="./public/assets/logo/Star_orange.svg" alt="" srcset=""></i>
            `
    }
}

















/* SLIDER */
let sliders = document.querySelectorAll('.slider');

sliders.forEach(function (slider) {
  let sliderRange = slider.querySelector('.slider__range');
  let sliderBefore = slider.querySelector('.slider__before');
  let sliderSeparator = slider.querySelector('.slider__separator');

  function updateSliderPosition() {
    sliderBefore.style = `width:${sliderRange.value}%`;
    sliderSeparator.style = `left:${sliderRange.value}%`;
  }

  sliderRange.addEventListener('input', updateSliderPosition);

  let isDragging = false;

  sliderSeparator.addEventListener('mousedown', function() {
    isDragging = true;
  });

  sliderSeparator.addEventListener('touchstart', function() {
      isDragging = true;
  });
  document.addEventListener('mouseup', function() {
      isDragging = false;
  });
  document.addEventListener('touchend', function() {
      isDragging = false;
  });

  document.addEventListener('mousemove', function (e) {
    processMove(e.clientX);
  });

  document.addEventListener('touchmove', function (e) {
    processMove(e.touches[0].clientX);
  });

    function processMove(x) {
        if (isDragging) {
            let sliderRect = slider.getBoundingClientRect();
            let newWidth = (x - sliderRect.left) /
                sliderRect.width * 100;
            sliderRange.value = newWidth;
            updateSliderPosition();
        }
    }
});