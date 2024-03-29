import { db } from '../js/init_firebase'
import { collection, getDocs } from "firebase/firestore"; 


let titlePrestation = document.getElementsByClassName('titlePrestation')
let cardPrestation = document.getElementsByClassName('cardPrestation')

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
                ${await note(fctAvis)}
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
                <i><img src="./assets/logo/star_stroke.png" alt="" srcset=""></i>
                <i><img src="./assets/logo/star_stroke.png" alt="" srcset=""></i>
                <i><img src="./assets/logo/star_stroke.png" alt="" srcset=""></i>
                <i><img src="./assets/logo/star_stroke.png" alt="" srcset=""></i>
                <i><img src="./assets/logo/star_orange.png" alt="" srcset=""></i>
                <i><img src="./assets/logo/star_orange.png" alt="" srcset=""></i>
            `
        case 2: 
            return `
                <i><img src="./assets/logo/star_stroke.png" alt="" srcset=""></i>
                <i><img src="./assets/logo/star_stroke.png" alt="" srcset=""></i>
                <i><img src="./assets/logo/star_stroke.png" alt="" srcset=""></i>
                <i><img src="./assets/logo/star_orange.png" alt="" srcset=""></i>
                <i><img src="./assets/logo/star_orange.png" alt="" srcset=""></i>
            `
        case 3: 
            return `
                <i><img src="./assets/logo/star_stroke.png" alt="" srcset=""></i>
                <i><img src="./assets/logo/star_stroke.png" alt="" srcset=""></i>
                <i><img src="./assets/logo/star_orange.png" alt="" srcset=""></i>
                <i><img src="./assets/logo/star_orange.png" alt="" srcset=""></i>
                <i><img src="./assets/logo/star_orange.png" alt="" srcset=""></i>
            `
        
        
        case 4: 
            return `
                <i><img src="./assets/logo/star_stroke.png" alt="" srcset=""></i>
                <i><img src="./assets/logo/star_orange.png" alt="" srcset=""></i>
                <i><img src="./assets/logo/star_orange.png" alt="" srcset=""></i>
                <i><img src="./assets/logo/star_orange.png" alt="" srcset=""></i>
                <i><img src="./assets/logo/star_orange.png" alt="" srcset=""></i>
            `
        case 5: 
            return `
                <i><img src="./assets/logo/star_orange.png" alt="" srcset=""></i>
                <i><img src="./assets/logo/star_orange.png" alt="" srcset=""></i>
                <i><img src="./assets/logo/star_orange.png" alt="" srcset=""></i>
                <i><img src="./assets/logo/star_orange.png" alt="" srcset=""></i>
                <i><img src="./assets/logo/star_orange.png" alt="" srcset=""></i>
            `
    }
}


// Printemps 01/03 => 31/05
// Eté 01/06 => 31/08
// Autonne 01/09 => 30/11
// Hiver 1/12 => 28/02

function affichageHerobanner () {
   const imgBanner = document.getElementById('herobanner_photo')
   const slogan = document.getElementById('sloganBanner')
   const initDate = new Date()
   const monthDate = (initDate.getMonth()+1)
   
   switch (monthDate) {
    case 1 : 
        imgBanner.classList.add('herobanner_winter')
        break
    case 2 : 
        imgBanner.classList.add('herobanner_winter')
        break
    case 3 : 
        imgBanner.classList.add('herobanner_spring')
        break
    case 4 : 
        imgBanner.classList.add('herobanner_spring')
        break
    case 5 : 
        imgBanner.classList.add('herobanner_spring')
        break
    case 6 : 
        imgBanner.classList.add('herobanner_summer')
        slogan.classList.remove('sloganWhite')
        break
    case 7 : 
        imgBanner.classList.add('herobanner_summer')
        slogan.classList.remove('sloganWhite')
        break
    case 8 : 
        imgBanner.classList.add('herobanner_summer')
        slogan.classList.remove('sloganWhite')
        break
    case 9 : 
        imgBanner.classList.add('herobanner_autumn')
        break
    case 10 : 
        imgBanner.classList.add('herobanner_autumn')
        break
    case 11 : 
        imgBanner.classList.add('herobanner_autumn')
        break
    case 12 : 
        imgBanner.classList.add('herobanner_winter')
        break
    
}
}

affichageHerobanner()

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


/* GESTION DU HOVER SUR DIV TITLE */


for (let i = 0; i < titlePrestation.length; i++) {
    const element = titlePrestation[i];
    element.addEventListener('mouseover', (e) => {
        const form = e.relatedTarget
        form.classList.remove('cardBlur')
    })
    element.addEventListener('mouseout', (e) => {
        const form = e.relatedTarget
        form.classList.add('cardBlur')
    })
    element.addEventListener('click', (e) => {
        console.log('click', e.target.id);
        console.log(e);
        const path = e.target.id
        window.location.href = `/prestation.html?ref=${path}`
    })
}

for(let i = 0; i < cardPrestation.length; i++){
    const element = cardPrestation[i]
    element.addEventListener('click', (e) => {
        console.log('click', e.target.id);
        console.log(e);
        const path = e.target.id
        window.location.href = `/prestation.html?ref=${path}`
    })
}
