import { db, storage } from './init_firebase'
import { collection, getDocs } from "firebase/firestore"; 
import { ref, getDownloadURL } from "firebase/storage";

const divContainer = document.getElementById('containerGalerie')
let arrayRef = []

const querySnapshot = await getDocs(collection(db, 'galerie'))
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

