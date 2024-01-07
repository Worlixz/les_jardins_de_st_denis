import { db, storage } from './init_firebase'
import { collection, getDocs } from "firebase/firestore"; 
import { ref, getDownloadURL } from "firebase/storage";

const path = window.location.href.split("ref=")[1]
const spanPrestation = document.getElementById('spanPrestation')
console.log(spanPrestation);

let path_valid = path.includes("_") ? path.split("_")[0] : path

window.addEventListener('DOMContentLoaded', (e) => {

    switch (path_valid){
        case "jardin" : 
            spanPrestation.innerText = ", vos jardins"
            break;
        case 'taille' : 
            spanPrestation.innerText = ", les tailles d'arbres et arbustes"
            break;
        case 'espace' : 
            spanPrestation.innerText = ", nos création d'espace"
            break;
        case 'pelouse' : 
            spanPrestation.innerText = ", l'entretien de vos pelouse"
            break;
        case 'arrosage' : 
            spanPrestation.innerText = ", la création de vos arrosage automatique"
            break;
        case 'terrasse' : 
            spanPrestation.innerText = ", la création de vos terrasse"
            break;
        case 'cloture':
            spanPrestation.innerText = ", la création de vos clôture"
            break;

    }

})





const divContainer = document.getElementById('containerPrestation')
let arrayRef = []

const querySnapshot = await getDocs(collection(db, path_valid))
querySnapshot.forEach((doc) => {
    arrayRef.push(doc.data())
})

async function convertRefToUrl (arrayRef) {
    const fctArray = arrayRef
    let arrayUrl = []

    for (let i = 0; i < fctArray.length; i++) {
        const refStorage = ref(storage, fctArray[i].url)
        arrayUrl.push( await getDownloadURL(refStorage))
    }

    return arrayUrl
    
}

async function creationDiv () {
    const url = await convertRefToUrl(arrayRef)
    url.map(element => {
        const divPhoto = document.createElement('div')
    // J'obtiens une promesse 
    divPhoto.innerHTML = `<img src="${element}" alt="" srcset="">`
    divContainer.append(divPhoto)
    })
}

creationDiv()

