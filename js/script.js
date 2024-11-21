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
let boxBig = document.querySelector(".img")
let iconBack = document.querySelector(".icon-svg-2")
let cantainTextBox1 = document.querySelector(".cantain-text-box1")
let cantainText = document.querySelector(".cantain-text")
let cantainTextBox1PElem = document.querySelector(".cantain-text-box1 p")
let cantainFooterLeft = document.querySelector(".cantain-footer-left")
let dateBox1 = document.querySelector(".date-box1")
let author = document.querySelector(".author")
let items = document.querySelectorAll(".item")

let item1 = document.querySelector(".item-1")
let item2 = document.querySelector(".item-2")
let item3 = document.querySelector(".item-3")

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

function changeClassBoxbig () {
    console.log(4);
    
    if (!boxBig.classList.contains("box-big")) {
        
        if (item1.classList.contains("box-big")) {
            item1.classList.add("item")
            item1.classList.remove("box-big")
            
            item1.children[0].remove()
            item1.children[1].remove()
            
            item1.children[0].classList.remove("cantain-text-box1")
            item1.children[0].classList.add("cantain-text")
            
            item1.children[0].children[0].innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"
            
            item1.children[1].children[0].classList.add("date") 
            item1.children[1].children[0].classList.remove("date-box1")
        } else if (item2.classList.contains("box-big")) {
            item2.classList.add("item")
            item2.classList.remove("box-big")
        
            item2.children[0].remove()
            item2.children[1].remove()
        
            item2.children[0].classList.remove("cantain-text-box1")
            item2.children[0].classList.add("cantain-text")
        
            item2.children[0].children[0].innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"
        
            item2.children[1].children[0].classList.add("date") 
            item2.children[1].children[0].classList.remove("date-box1")
        } else if (item3.classList.contains("box-big")) {
            item3.classList.add("item")
            item3.classList.remove("box-big")
            
            item3.children[0].remove()
            item3.children[1].remove()
            
            item3.children[0].classList.remove("cantain-text-box1")
            item3.children[0].classList.add("cantain-text")
            
            item3.children[0].children[0].innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"
            
            item3.children[1].children[0].classList.add("date") 
            item3.children[1].children[0].classList.remove("date-box1")
        } else {
            console.log(10);
        }

        boxBig.classList.add("box-big")
        boxBig.classList.remove("item")
        cantainTextBox1.classList.add("cantain-text-box1")
        cantainTextBox1.classList.remove("cantain-text")
        cantainTextBox1PElem.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
        dateBox1.classList.add("date-box1")
        dateBox1.classList.remove("date")
        cantainTextBox1.insertAdjacentHTML("afterend" , '<span class="author">Jason Keller</span>')
        boxBig.insertAdjacentHTML("afterbegin" , '<span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="icon-svg-2"><path fill-rule="evenodd" d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z" clip-rule="evenodd" /></svg></span>')     
        boxBig.style.backgroundPositionX = '-112px'
        boxBig.style.backgroundPositionY = '0'
    }   
}

function changeClassItem1 () {           
    console.log(1);
    let boxPElem = item1.children[0]
    let pElem = item1.children[0].children[0]
    let boxDate = item1.children[1].children[0]

    if (!item1.classList.contains("box-big")) {

        item1.insertAdjacentHTML("afterbegin" , '<span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="icon-svg-2"><path fill-rule="evenodd" d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z" clip-rule="evenodd" /></svg></span>')
        item1.classList.add("box-big")
        item1.classList.remove("item")
        
        boxPElem.classList.add("cantain-text-box1")
        boxPElem.classList.remove("cantain-text")
        boxPElem.insertAdjacentHTML("afterend" , '<span class="author">Jason Keller</span>')
    
        pElem.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
    
        boxDate.classList.add("date-box1") 
        boxDate.classList.remove("date") 
        
        boxBig.classList.add("item")
        boxBig.classList.remove("box-big")
        if (boxBig.childElementCount === 4) {            
            boxBig.children[0].remove()
            boxBig.children[1].remove()
        }
        cantainTextBox1.classList.add("cantain-text")
        cantainTextBox1.classList.remove("cantain-text-box1")
        cantainTextBox1PElem.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"
        dateBox1.classList.add("date")
        dateBox1.classList.remove("date-box1")


        if (item2.classList.contains("box-big")) {
            // changeClassItem2()
            item2.classList.add("item")
            item2.classList.remove("box-big")
            item2.style.backgroundPositionY = "-105px"
            item2.style.backgroundBlendMode = "overlay"
            
            item2.children[0].remove()
            item2.children[1].remove()
            
            item2.children[0].classList.remove("cantain-text-box1")
            item2.children[0].classList.add("cantain-text")
            
            item2.children[0].children[0].innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"
            
            item2.children[1].children[0].classList.add("date") 
            item2.children[1].children[0].classList.remove("date-box1")
        } else if (item3.classList.contains("box-big")) {
            // changeClassItem3()
            item3.classList.add("item")
            item3.classList.remove("box-big")
            
            item3.children[0].remove()
            item3.children[1].remove()
            
            item3.children[0].classList.remove("cantain-text-box1")
            item3.children[0].classList.add("cantain-text")
            
            item3.children[0].children[0].innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"
            
            item3.children[1].children[0].classList.add("date") 
            item3.children[1].children[0].classList.remove("date-box1")
        } else {
            console.log(1);
        }
    }
    else {

        if (!item1.classList.contains("box-big") && !item2.classList.contains("box-big") && !item3.classList.contains("box-big")) {
            console.log(10);
            
            boxBig.classList.add("box-big")
            boxBig.classList.remove("item")   
        }
    }

    boxBig.style.backgroundPositionY = '-115px'
    boxBig.style.backgroundPositionX = '0'
}

function changeClassItem2 () {
    console.log(2);
    let boxPElem = item2.children[0]
    let pElem = item2.children[0].children[0]
    let boxDate = item2.children[1].children[0]

    if (!item2.classList.contains("box-big")) {

        item2.insertAdjacentHTML("afterbegin" , '<span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="icon-svg-2"><path fill-rule="evenodd" d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z" clip-rule="evenodd" /></svg></span>')
        item2.classList.add("box-big")
        item2.classList.remove("item")
        item2.style.backgroundPositionY = "0"
        item2.style.backgroundBlendMode = "normal"
        
        boxPElem.classList.add("cantain-text-box1")
        boxPElem.classList.remove("cantain-text")
        boxPElem.insertAdjacentHTML("afterend" , '<span class="author">Jason Keller</span>')
    
        pElem.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
    
        boxDate.classList.add("date-box1") 
        boxDate.classList.remove("date") 
        
        boxBig.classList.add("item")
        boxBig.classList.remove("box-big")
        if (boxBig.childElementCount === 4) {            
            boxBig.children[0].remove()
            boxBig.children[1].remove()
        }
        cantainTextBox1.classList.add("cantain-text")
        cantainTextBox1.classList.remove("cantain-text-box1")
        cantainTextBox1PElem.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"
        dateBox1.classList.add("date")
        dateBox1.classList.remove("date-box1")

        if (item1.classList.contains("box-big")) {
            // changeClassItem1()
            item1.classList.add("item")
            item1.classList.remove("box-big")
            
            item1.children[0].remove()
            item1.children[1].remove()
            
            item1.children[0].classList.remove("cantain-text-box1")
            item1.children[0].classList.add("cantain-text")
            
            item1.children[0].children[0].innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"
            
            item1.children[1].children[0].classList.add("date") 
            item1.children[1].children[0].classList.remove("date-box1")
        } else if (item3.classList.contains("box-big")) {
            // changeClassItem3()
            item3.classList.add("item")
            item3.classList.remove("box-big")
            
            item3.children[0].remove()
            item3.children[1].remove()
            
            item3.children[0].classList.remove("cantain-text-box1")
            item3.children[0].classList.add("cantain-text")
            
            item3.children[0].children[0].innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"
            
            item3.children[1].children[0].classList.add("date") 
            item3.children[1].children[0].classList.remove("date-box1")
        } else {
            console.log(2);
        }

    } 
    else {
        
        if (!item1.classList.contains("box-big") && !item2.classList.contains("box-big") && !item3.classList.contains("box-big")) {
            console.log(10);
            
            boxBig.classList.add("box-big")
            boxBig.classList.remove("item")   
        }
    }

    boxBig.style.backgroundPositionY = '-115px'
    boxBig.style.backgroundPositionX = '0'
}

function changeClassItem3 () {
    console.log(3);
    let boxPElem = item3.children[0]
    let pElem = item3.children[0].children[0]
    let boxDate = item3.children[1].children[0]

    if (!item3.classList.contains("box-big")) {

        item3.insertAdjacentHTML("afterbegin" , '<span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="icon-svg-2"><path fill-rule="evenodd" d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z" clip-rule="evenodd" /></svg></span>')
        item3.classList.add("box-big")
        item3.classList.remove("item")
        
        boxPElem.classList.add("cantain-text-box1")
        boxPElem.classList.remove("cantain-text")
        boxPElem.insertAdjacentHTML("afterend" , '<span class="author">Jason Keller</span>')
    
        pElem.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
    
        boxDate.classList.add("date-box1") 
        boxDate.classList.remove("date") 
        
        boxBig.classList.add("item")
        boxBig.classList.remove("box-big")
        if (boxBig.childElementCount === 4) {            
            boxBig.children[0].remove()
            boxBig.children[1].remove()
        }
        cantainTextBox1.classList.add("cantain-text")
        cantainTextBox1.classList.remove("cantain-text-box1")
        cantainTextBox1PElem.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"
        dateBox1.classList.add("date")
        dateBox1.classList.remove("date-box1")

        if (item2.classList.contains("box-big")) {
            item2.classList.add("item")
            item2.classList.remove("box-big")
            item2.style.backgroundPositionY = "-105px"
            item2.style.backgroundBlendMode = "overlay"
            
            item2.children[0].remove()
            item2.children[1].remove()
            
            item2.children[0].classList.remove("cantain-text-box1")
            item2.children[0].classList.add("cantain-text")
            
            item2.children[0].children[0].innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"
            
            item2.children[1].children[0].classList.add("date") 
            item2.children[1].children[0].classList.remove("date-box1")
        } else if (item1.classList.contains("box-big")) {
            // changeClassItem1()
            item1.classList.add("item")
            item1.classList.remove("box-big")
            
            item1.children[0].remove()
            item1.children[1].remove()
            
            item1.children[0].classList.remove("cantain-text-box1")
            item1.children[0].classList.add("cantain-text")
            
            item1.children[0].children[0].innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"
            
            item1.children[1].children[0].classList.add("date") 
            item1.children[1].children[0].classList.remove("date-box1")
        } else {
            console.log(3);
        }
        
    } 
    else { 

        if (!item1.classList.contains("box-big") && !item2.classList.contains("box-big") && !item3.classList.contains("box-big")) {
            console.log(10);
            
            boxBig.classList.add("box-big")
            boxBig.classList.remove("item")   
        }
    }

    boxBig.style.backgroundPositionY = '-115px'
    boxBig.style.backgroundPositionX = '0'
}

boxBig.addEventListener("click" , changeClassBoxbig)
item1.addEventListener("click" , changeClassItem1)
item2.addEventListener("click" , changeClassItem2)
item3.addEventListener("click" , changeClassItem3)








