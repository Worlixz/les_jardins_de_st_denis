const span1 = document.getElementById('span1')
const span2 = document.getElementById('span2')
const span3 = document.getElementById('span3')

const linkMobile = document.getElementById('linkMobile')

const divBurger = document.getElementById('divBurger')
divBurger.addEventListener('click', (e) => {
    console.log(e);
    span1.classList.toggle('span1Click')
    span2.classList.toggle('span2Click')
    span3.classList.toggle('span3Click')

    if(linkMobile.style.display === "none"){
        linkMobile.style.display = "flex"
    }else{
        linkMobile.style.display = "none"
    }
})