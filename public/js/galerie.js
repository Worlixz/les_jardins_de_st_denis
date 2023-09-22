import { db, storage } from './init_firebase'
import { collection, getDocs } from "firebase/firestore"; 
import { ref, getDownloadURL } from "firebase/storage";

const divContainer = document.getElementById('containerGalerie')
let arrayRef = []


const querySnapshot = await getDocs(collection(db, 'galerie'))
querySnapshot.forEach((doc) => {
    arrayRef.push(doc.data())
    /* console.log(doc.id, '=>', doc.data()) */
})

async function convertRefToUrl (arrayRef) {
    const fctArray = arrayRef
    const newArray = fctArray.map( element => {
        let refStorage = ref(storage, element.url)
        element.photo = getDownloadURL(refStorage)
        .then(url => {
            return new Promise(resolve => {
                resolve(url)
            })
        })
        .catch(err => console.log(err))
    })
   console.log('new array ',newArray);
}


async function creationDiv () {
    const data = await convertRefToUrl(arrayRef)
    console.log(data);
    data.map(element => {
        const divPhoto = document.createElement('div')
        // J'obtiens une promesse 
        divPhoto.innerHTML = `<img src="${element.photo}" alt="" srcset="">`
        divContainer.append(divPhoto)
    })
}

creationDiv()