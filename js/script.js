let bars = document.querySelector(".fa-bars")
let closee = document.querySelector(".fa-close")
let sideMenu = document.querySelector(".top")

let textAbout = document.querySelector(".text-about")
let slides = document.getElementsByClassName("slide")
let currentIndex = 1

let work = document.querySelector(".item-work")

let deshes = document.querySelector(".typo-deshes")
let buttonGrey = document.querySelectorAll(".button-grey")

let chefz = document.querySelector(".typo-chefz")

let recipes = document.querySelector(".typo-recipes")
let boxBig = document.querySelector(".box-big")
let iconBack = document.querySelector(".icon-svg-2")
let cantainTextBox1 = document.querySelector(".cantain-text-box1")
let cantainText = document.querySelector(".cantain-text")
let cantainTextBox1PElem = document.querySelector(".cantain-text-box1 p")
let cantainFooterLeft = document.querySelector(".cantain-footer-left")
let dateBox1 = document.querySelector(".date-box1")
let author = document.querySelector(".author")
let item = document.querySelectorAll(".item")


let social = document.querySelector(".typo-SOCIAL")


function displayImages(n) {
    currentIndex = n    

    if (currentIndex > slides.length) {
        currentIndex = 1;        
    }
    
    if (currentIndex < 1) {
        currentIndex = slides.length;
    }
    
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }    

    slides[currentIndex - 1].style.display = "block";

    if (currentIndex == 1) {
        textAbout.innerHTML = "In aliqua ea ullamco ad est ex non deserunt nulla. Consectetur sint ea aliquip aliquip consectetur voluptate est. Eu minim dolore laboris enim mollit voluptate irure esse aliquip."
    } else {
        textAbout.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint ipsam non cupiditate totam. Rerum cumque repellat excepturi eos facilis praesentium nobis qui voluptate optio fugiat nostrum aliquid, ad ducimus totam."
    }
}
displayImages(currentIndex)

function changeSlide (n) {    
    currentIndex += n;
    displayImages(currentIndex);
}

bars.addEventListener("click" , () => {
    sideMenu.style.transform = "translateX(0)"
    sideMenu.style.transition = "2s ease-out 0.2s"
})

buttonGrey.forEach((grey) => {
    grey.addEventListener("click" , (event) => {
        event.preventDefault()
        alert("End of inventory")
    })
})

closee.addEventListener("click" , () => sideMenu.style.transform = "translateX(-250px)")

work.addEventListener("mouseover" , () => work.classList.add('change-after-width'))
work.addEventListener("mouseout" , () => work.classList.remove('change-after-width'))
deshes.addEventListener("mouseover" , () => deshes.classList.add('change-after-width'))
deshes.addEventListener("mouseout" , () => deshes.classList.remove('change-after-width'))
chefz.addEventListener("mouseover" , () => chefz.classList.add('change-after-width'))
chefz.addEventListener("mouseout" , () => chefz.classList.remove('change-after-width'))
recipes.addEventListener("mouseover" , () => recipes.classList.add('change-after-width'))
recipes.addEventListener("mouseout" , () => recipes.classList.remove('change-after-width'))
social.addEventListener("mouseover" , () => social.classList.add('change-after-width'))
social.addEventListener("mouseout" , () => social.classList.remove('change-after-width'))

iconBack.addEventListener("click" , () => {

    boxBig.classList.add("item")
    boxBig.classList.remove("box-big")
    boxBig.style.gridColumn = "1 / 2"

    boxBig.style.backgroundPositionY = '-115px'
    boxBig.style.backgroundPositionX = '0'

    cantainTextBox1.classList.add("cantain-text")
    cantainTextBox1.classList.remove("cantain-text-box1")
    cantainTextBox1PElem.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"
    
    cantainFooterLeft.style.width = "100%"

    dateBox1.classList.add("date")
    dateBox1.classList.remove("date-box1")

    author.remove()
    iconBack.remove()
})

item.forEach((box) => {
    box.addEventListener("click" , () => {

        box.classList.add("box-big")
        box.classList.remove("item")

        box.style.backgroundPositionY = "0"
        box.style.backgroundBlendMode = "normal"

        box.insertAdjacentHTML("afterbegin" , '<span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="icon-svg-2"><path fill-rule="evenodd" d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z" clip-rule="evenodd" /></svg></span>')
        
        let a = box.childNodes[2]
        let b = box.childNodes[4].children[0]
        let c = box.childNodes[2].children[0]
        
        a.insertAdjacentHTML("afterend" , '<span class="author">Jason Keller</span>')

        a.classList.remove("cantain-text")
        a.classList.add("cantain-text-box1")

        b.classList.remove("date")
        b.classList.add("date-box1")

        c.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit,"

        boxBig.classList.remove("box-big")
        boxBig.classList.add("item")
        
        
        boxBig.children[0].remove()
        boxBig.children[1].remove()

        boxBig.children[0].classList.add("cantain-text")
        boxBig.children[0].classList.remove("cantain-text-box1")
        cantainTextBox1PElem.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"
        
        boxBig.children[1].firstElementChild.classList.add("date")
        boxBig.children[1].firstElementChild.classList.remove("date-box1")
        
        boxBig.style.backgroundPositionY = '-115px'
        boxBig.style.backgroundPositionX = '0'

    })
})












