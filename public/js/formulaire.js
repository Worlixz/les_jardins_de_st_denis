const divForm = document.getElementById('containerForm')
const btnClick = document.getElementById('btnClick')


const initStep = 1
let currentStep = 1


let dataForm = {
    type: "",
    prestation : [],
    superficie: "",
    recurrence: "",
    information : {
        civilite: "",
        nom: "",
        prenom: "",
        tel: "",
        mail: ""
    }
}


btnClick.addEventListener('click', (e) => {
    currentStep += 1
    
    switch (currentStep) {
        case 1 : 
        firstStep ()
        break
        case 2 : 
        secondtStep ()
        break
        case 3 : 
        thirdStep ()
        break
        case 4 : 
        fourthtStep ()
        break
        case 5 : 
        fiveStep ()
        break
    }
    
})


function firstStep () {
    divForm.innerHTML = `
        <div class="titleForm">
            <h2>Que souhaitez-vous réaliser ?</h2>
            <p>Etapes ${currentStep}/5</p>
            <p>Les devis sont personnalisés et gratuit</p>
        </div>
        <div class="containerBtnForm">
            <div id="divBtnCrea">
                <label for="crea">Création d'un jardin*</label>
                <input type="radio" name="btnRealisation" id="crea" value="creation">
            </div>
            <div  id="divBtnReal">
                <label for="real">Entretien d'un jardin*</label>
                <input type="radio" name="btnRealisation" id="real" value="realisation">
            </div>
        </div>
        <div>
            <p>*Vous êtes particulier n'oubliez pas que vous bénéficiez d'un crédit d'impot de 50%</p>
        </div>
    `
    const divBtnCrea = document.getElementById('divBtnCrea')
    const divBtnReal = document.getElementById('divBtnReal')
    divBtnCrea.addEventListener('click', (e) => {
        dataForm.type = "crea"
        console.log(dataForm);
        divBtnCrea.classList.add('selected')
        divBtnReal.classList.remove('selected')
    })
    divBtnReal.addEventListener('click', (e) => {
        dataForm.type = "real"
        console.log(dataForm);
        divBtnReal.classList.add('selected')
        divBtnCrea.classList.remove('selected')
    })

}
function secondtStep () {
    divForm.innerHTML = `
        <div class="titleForm">
          <h2>Choissez votre ou vos prestations</h2>
          <p>Etapes ${currentStep}/5</p>
          <p>Ces prestations sont d'ordre informative et nous permettent de traiter votre demande dans les meilleures conditions.</p>
        </div>
        <div class="gridFrom">

          <div>
            <div class="titleCard">
              <p>Taille</p>
              <input type="checkbox" name="checkFrom" id="taille" value="taille">
            </div>
            <div class="listCard">
              <ul>
                <li>Haie</li>
                <li>Arbuste</li>
                <li>Arbres ( mûrier, platane )</li>
              </ul>
            </div>
          </div>

          <div>
            <div class="titleCard">
              <p>Pelouse</p>
              <input type="checkbox" name="checkFrom" id="pelouse" value="pelouse">
            </div>
            <div class="listCard">
              <ul>
                <li>Tonte</li>
                <li>Scarification</li>
                <li>Engazonnement semi</li>
                <li>Engazonnement en plaque</li>
              </ul>
            </div>
          </div>

          <div>
            <div class="titleCard">
              <p>Aménagement</p>
              <input type="checkbox" name="checkFrom" id="amenagement"  value="amenagement">
            </div>
            <div class="listCard">
              <ul>
                <li>Extérieur</li>
                <li>Cours</li>
                <li>Allées</li>
                <li>Chemin</li>
              </ul>
            </div>
          </div>

          <div>
            <div class="titleCard">
              <p>Création</p>
              <input type="checkbox" name="checkFrom" id="creation" value="creation">
            </div>
            <div class="listCard">
              <ul>
                <li>Massifs</li>
                <li>Arrosage goutte à goutte</li>
                <li>Arrosage automatique</li>
              </ul>
            </div>
          </div>

          <div>
            <div class="titleCard">
              <p>Pose</p>
              <input type="checkbox" name="checkFrom" id="pose" value="pose">
            </div>
            <div class="listCard">
              <ul>
                <li>Gazon synthétique</li>
              </ul>
            </div>
          </div>

          <div>
            <div class="titleCard">
              <p>Entretien</p>
              <input type="checkbox" name="checkFrom" id="entretien" value="entretien">
            </div>
            <div class="listCard">
              <ul>
                <li>Débroussaillage</li>
                <li>Massfis</li>
              </ul>
            </div>
          </div>

          <div>
            <div class="titleCard">
              <p>Clôture</p>
              <input type="checkbox" name="checkFrom" id="cloture" value="cloture">
            </div>
            <div class="listCard">
              <ul>
                <li>Grillage rigide</li>
                <li>Grillage souple</li>
                <li>Bois</li>
              </ul>
            </div>
          </div>

          <div>
            <div class="titleCard">
              <p>Travaux</p>
              <input type="checkbox" name="checkFrom" id="travaux" value="travaux">
            </div>
            <div class="listCard">
              <ul>
                <li>Haie</li>
                <li>Arbuste</li>
                <li>Arbres ( mûrier, platane )</li>
              </ul>
            </div>
          </div>
        </div>
    `

    const inputTaille = document.getElementById('taille')
    const inputPelouse = document.getElementById('pelouse')
    const inputAmenagement = document.getElementById('amenagement')
    const inputCreation = document.getElementById('creation')
    const inputPose = document.getElementById('pose')
    const inputEntretien = document.getElementById('entretien')
    const inputCloture = document.getElementById('cloture')
    const inputTravaux = document.getElementById('travaux')

    inputTaille.addEventListener('change', function(e) {
        if (this.checked) {
          dataForm.prestation.push(e.target.value)
          console.log(dataForm);
      } else {
          dataForm.prestation = dataForm.prestation.filter( (element) =>  element !== e.target.value)
          console.log(dataForm);
      }
    });
    inputPelouse.addEventListener('change', function(e) {
        if (this.checked) {
            dataForm.prestation.push(e.target.value)
            console.log(dataForm);
        } else {
            dataForm.prestation = dataForm.prestation.filter( (element) =>  element !== e.target.value)
            console.log(dataForm);
    }
    });
    inputAmenagement.addEventListener('change', function(e) {
    if (this.checked) {
        dataForm.prestation.push(e.target.value)
        console.log(dataForm);
    } else {
        dataForm.prestation = dataForm.prestation.filter( (element) =>  element !== e.target.value)
        console.log(dataForm);
    }
    });
    inputCreation.addEventListener('change', function(e) {
        if (this.checked) {
            dataForm.prestation.push(e.target.value)
            console.log(dataForm);
        } else {
            dataForm.prestation = dataForm.prestation.filter( (element) =>  element !== e.target.value)
            console.log(dataForm);
    }
    });
    inputPose.addEventListener('change', function(e) {
    if (this.checked) {
        dataForm.prestation.push(e.target.value)
        console.log(dataForm);
    } else {
        dataForm.prestation = dataForm.prestation.filter( (element) =>  element !== e.target.value)
        console.log(dataForm);
    }
    });
    inputEntretien.addEventListener('change', function(e) {
        if (this.checked) {
            dataForm.prestation.push(e.target.value)
            console.log(dataForm);
        } else {
            dataForm.prestation = dataForm.prestation.filter( (element) =>  element !== e.target.value)
            console.log(dataForm);
    }
    });
    inputCloture.addEventListener('change', function(e) {
    if (this.checked) {
        dataForm.prestation.push(e.target.value)
        console.log(dataForm);
    } else {
        dataForm.prestation = dataForm.prestation.filter( (element) =>  element !== e.target.value)
        console.log(dataForm);
    }
    });
    inputTravaux.addEventListener('change', function(e) {
        if (this.checked) {
            dataForm.prestation.push(e.target.value)
            console.log(dataForm);
        } else {
            dataForm.prestation = dataForm.prestation.filter( (element) =>  element !== e.target.value)
            console.log(dataForm);
    }
    });
}
function thirdStep () {
    divForm.innerHTML = `
        <div class="titleForm">
          <h2>Quelle est la taille de votre jardin</h2>
          <p>Etapes ${currentStep}/5</p>
          <p>Ces prestations sont d'ordre informative et nous permettent de traiter votre demande dans les meilleures conditions.</p>
        </div>
        <div class="containerInputGarden">
          <button id="btnUnstep">-</button>
          <div>
            <input type="number" id="btnGrandeur" value="0">
            <label class="labelm²" for="">m²</label>
          </div>
          <button id="btnUpstep">+</button>
        </div>
    `

    const btnGrandeur = document.getElementById('btnGrandeur')
    const btnUnstep = document.getElementById('btnUnstep')
    const btnUpstep = document.getElementById('btnUpstep')

    btnGrandeur.addEventListener('change', (e) => {
        dataForm.superficie = btnGrandeur.value
        console.log(dataForm);
    })
    
    btnUnstep.addEventListener('click', (e) => {
        btnGrandeur.valueAsNumber -=1
        dataForm.superficie = btnGrandeur.value
        console.log(dataForm);
    })
    btnUpstep.addEventListener('click', (e) => {
        btnGrandeur.valueAsNumber +=1
        dataForm.superficie = btnGrandeur.value
        console.log(dataForm);
    })
    
}
function fourthtStep () {
    divForm.innerHTML = `
        <div class="titleForm">
            <h2>La récurrence de la prestation?</h2>
            <p>Etapes ${currentStep}/5</p>
            <p>Ces prestations sont d'ordre informative et nous permettent de traiter votre demande dans les meilleures conditions.</p>
        </div>
        <div class="containerBtnForm">
            <div id="divBtnPonc">
                <label for="ponctuel">Ponctuel</label>
                <input type="radio" name="btnPrestation" id="ponctuel" value="ponctuel">
            </div>
            <div  id="divBtnRecu">
                <label for="recurrent">Récurrent</label>
                <input type="radio" name="btnPrestation" id="recurrent" value="recurrent">
            </div>
            <div  id="divBtnInco">
                <label for="inconnu">Je ne sais pas</label>
                <input type="radio" name="btnPrestation" id="inconnu" value="inconnu">
            </div>
        </div>
    `

    const divBtnPonc = document.getElementById('divBtnPonc')
    const divBtnRecu = document.getElementById('divBtnRecu')
    const divBtnInco = document.getElementById('divBtnInco')
    divBtnPonc.addEventListener('click', (e) => {
        dataForm.recurrence = "Ponctuel"
        console.log(dataForm);
        divBtnPonc.classList.add('selected')
        divBtnRecu.classList.remove('selected')
        divBtnInco.classList.remove('selected')
    })
    divBtnRecu.addEventListener('click', (e) => {
        dataForm.recurrence = "Recurrent"
        console.log(dataForm);
        divBtnRecu.classList.add('selected')
        divBtnPonc.classList.remove('selected')
        divBtnInco.classList.remove('selected')
    })
    divBtnInco.addEventListener('click', (e) => {
        dataForm.recurrence = "Je ne sais pas"
        console.log(dataForm);
        divBtnInco.classList.add('selected')
        divBtnPonc.classList.remove('selected')
        divBtnRecu.classList.remove('selected')
    })
}
function fiveStep () {
    btnClick.remove()
    divForm.innerHTML = `
        <div class="titleForm">
          <h2>Vos informations</h2>
          <p>Etapes ${currentStep}/5</p>
          <p>Ces prestations sont d'ordre informative et nous permettent de traiter votre demande dans les meilleures conditions.</p>
        </div>
        <div class="containerInformation">
          <div>
            <select class="selector-civi" name="civilite" id="civilite">
              <option value="Rien">Civilité</option>
              <option value="Monsieur">Mr.</option>
              <option value="Madame">Mme.</option>
            </select>
          </div>
          <div>
            <input type="text" name="nom" id="nom" placeholder="Nom">
          </div>
          <div>
            <input type="text" name="prenom" id="prenom" placeholder="Prénom">
          </div>
          <div>
            <input type="number" name="tel" id="tel" placeholder="Téléphone">
          </div>
          <div>
            <input type="email" name="email" id="email" placeholder="E-mail">
          </div>
        </div>
        <button id="btnEnvoyer" class="btnSuivant">Envoyer</button>
    `

    const selectElement = document.querySelector(".selector-civi")
    const inputNom = document.getElementById('nom')
    const inputPrenom = document.getElementById('prenom')
    const inputTel = document.getElementById('tel')
    const inputEmail = document.getElementById('email')
    const btnEnvoyer = document.getElementById('btnEnvoyer')

    selectElement.addEventListener("change", (event) => {
        dataForm.information.civilite = event.target.value
        console.log(dataForm);
    });

    inputNom.addEventListener("change", (event) => {
        dataForm.information.nom = event.target.value
        console.log(dataForm);
    });
    inputPrenom.addEventListener("change", (event) => {
        dataForm.information.prenom = event.target.value
        console.log(dataForm);
    });
    inputTel.addEventListener("change", (event) => {
        dataForm.information.tel = event.target.value
        console.log(dataForm);
    });
    inputEmail.addEventListener("change", (event) => {
        dataForm.information.mail = event.target.value
        console.log(dataForm);
    });
    btnClick.remove()
    btnEnvoyer.addEventListener('click', (e) => {
        console.log('jenvoie');
    })
}


firstStep()


