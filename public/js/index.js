import {db , storage} from '../js/init_firebase'
import { collection, getDocs } from "firebase/firestore"; 
import { ref, getDownloadURL } from "firebase/storage";
import { compileAsync } from 'sass';

// Printemps 01/03 => 31/05
// Eté 01/06 => 31/08
// Autonne 01/09 => 30/11
// Hiver 1/12 => 28/02

let initDate = new Date()
const date = initDate.getDate() + '/' + (initDate.getMonth()+1)

console.log(date);


let arrayAvis = []
const containerAvis = document.getElementById('containerAvis')


const querySnapshot = await getDocs(collection(db, 'avis'))
querySnapshot.forEach((doc => {
  arrayAvis.push(doc.data())
}))


let rand = Math.floor(Math.random()*arrayAvis.length)
const selectedAvis = arrayAvis[rand]

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