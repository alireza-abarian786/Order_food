let bars = document.querySelector(".fa-bars")
let closee = document.querySelector(".fa-close")
let sideMenu = document.querySelector(".top")

let about = document.querySelector(".About-us")
let textAbout = document.querySelector(".text-about")
let slides = document.getElementsByClassName("slide")
let currentIndex = 1

let work = document.querySelector(".work")
let itemWork = document.querySelector(".item-work")

let deshes = document.querySelector(".dishes")
let typoDeshes = document.querySelector(".typo-deshes")
let buttonGrey = document.querySelectorAll(".button-grey")
let modal = document.querySelector(".modal")

let chefz = document.querySelector(".chefz")
let typoChefz = document.querySelector(".typo-chefz")

let recipes = document.querySelector(".recipes")
let typoRecipes = document.querySelector(".typo-recipes")
let boxBig = document.querySelector(".img")
let iconBack = document.getElementsByClassName("icon-svg-2")
let cantainTextBox1 = document.querySelector(".cantain-text-box1")
let cantainText = document.querySelector(".cantain-text")
let cantainTextBox1PElem = document.querySelector(".cantain-text-box1 p")
let cantainFooterLeft = document.querySelector(".cantain-footer-left")
let dateBox1 = document.querySelector(".date-box1")
let author = document.getElementsByClassName("author")
let items = document.querySelectorAll(".item")
let item1 = document.querySelector(".item-1")
let item2 = document.querySelector(".item-2")
let item3 = document.querySelector(".item-3")
let isBoxbig = true
let isClickIcon = true

let social = document.querySelector(".SOCIAL")
let typoSocial = document.querySelector(".typo-SOCIAL")
let arrowInsta = document.querySelector(".arrow-Insta")
let boxImageInsta = document.querySelector(".fot-2")
let boxTitleInsta = document.querySelector(".tup-insta")

let footer = document.querySelector(".footer")

// ----------------------------------------------

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

function clickIconItems (item) {
        console.log(11111111);
        item.classList.add("item");
        item.classList.remove("box-big")
        item.style.backgroundPositionY = "-105px"
        item.style.backgroundBlendMode = "overlay"
    
        item.children[0].remove()
        item.children[1].remove()
    
        item.children[0].classList.remove("cantain-text-box1")
        item.children[0].classList.add("cantain-text")
    
        item.children[0].children[0].innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"
    
        item.children[1].children[0].classList.add("date") 
        item.children[1].children[0].classList.remove("date-box1")

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
        console.log(boxBig);
        if (iconBack[0] !== undefined) {
            iconBack[0].remove()
        }

        isClickIcon = false
}

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

        if (isBoxbig) {
            console.log(200);
            
            boxBig.classList.add("box-big")
            boxBig.classList.remove("item")
            cantainTextBox1.classList.add("cantain-text-box1")
            cantainTextBox1.classList.remove("cantain-text")
            cantainTextBox1PElem.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
            dateBox1.classList.add("date-box1")
            dateBox1.classList.remove("date")
            boxBig.style.backgroundPositionX = '-112px'
            boxBig.style.backgroundPositionY = '0'
            cantainFooterLeft.style.removeProperty("width")
            boxBig.style.gridColumn = "1 / 2"
            isClickIcon = false
            if (boxBig.childElementCount == 2) {
                boxBig.insertAdjacentHTML("afterbegin" , '<span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="icon-svg-2"><path fill-rule="evenodd" d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z" clip-rule="evenodd" /></svg></span>')     
                cantainTextBox1.insertAdjacentHTML("afterend" , '<span class="author">Jason Keller</span>')
                console.log("create");
                
            }
        }
    } else {
        if (isClickIcon === false) {
            iconBoxBig()
        }
    }
    isBoxbig = true
    console.log(isBoxbig);
    
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
            boxBig.style.gridColumn = "2 / 3"
        }
    }
    else {
        clickIconItems (item1)
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
            boxBig.style.gridColumn = "2 / 3"
        }

    } 
    else {
        clickIconItems(item2)
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
            boxBig.style.gridColumn = "2 / 3"
        }
        
    } 
    else {
        clickIconItems(item3) 
    }

    boxBig.style.backgroundPositionY = '-115px'
    boxBig.style.backgroundPositionX = '0'
}

function iconBoxBig () {
    console.log(100);

    isClickIcon = true
    if (isBoxbig) {
        isBoxbig = false
    } else {
        isBoxbig = true    
    }
    

    boxBig.classList.replace("box-big" , "item")
    
    boxBig.style.gridColumn = "1 / 2"
    boxBig.style.backgroundPositionY = '-115px'
    boxBig.style.backgroundPositionX = '0'

    cantainTextBox1.classList.add("cantain-text")
    cantainTextBox1.classList.remove("cantain-text-box1")
    cantainTextBox1PElem.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"

    cantainFooterLeft.style.width = "100%"

    dateBox1.classList.add("date")
    dateBox1.classList.remove("date-box1")

    author[0].remove()    
    iconBack[0].parentElement.remove()
}

// ---------------------------------------

window.addEventListener("scroll" , () => {    
    about.style.visibility = "visible"
    about.classList.add("fade")

    if (scrollY >= 1100) {
        work.style.visibility = "visible"
        work.classList.add("fade")
    }
    if (scrollY >= 1800) {
        deshes.style.visibility = "visible"
        deshes.classList.add("fade")
    }
    if (scrollY >= 3000) {
        chefz.style.visibility = "visible"
        chefz.classList.add("fade")
    }
    if (scrollY >= 3600) {
        recipes.style.visibility = "visible"
        recipes.classList.add("fade")
    }
    if (scrollY >= 4500) {
        social.style.visibility = "visible"
        social.classList.add("fade")
    }
    if (scrollY >= 4900) {
        footer.style.visibility = "visible"
        footer.classList.add("fade")
    }       
})

bars.addEventListener("click" , () => {
    sideMenu.style.transform = "translateX(0)"
    sideMenu.style.transition = "2s ease-out 0.2s"
})

buttonGrey.forEach((grey) => {
    grey.addEventListener("click" , (event) => {
        event.preventDefault()
        modal.style.display = "flex"
    })
})

arrowInsta.addEventListener("click" , () => {
    let a = boxImageInsta.remove()
    boxTitleInsta.insertAdjacentHTML("afterend" , `<div class="fot fade">
                  <span>26 Jun at 16:20 pm</span>
                  <h6>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet,
                    consectetur adipiscing Lorem ipsum dolor sit amet,
                    consectetur adipiscing
                  </h6>
                  <!-- <p>@DennisFerguson</p> -->
                </div>`)
    
})

modal.addEventListener("click" , () => modal.style.display = "none")

closee.addEventListener("click" , () => sideMenu.style.transform = "translateX(-250px)")

itemWork.addEventListener("mouseover" , () => itemWork.classList.add('change-after-width'))
itemWork.addEventListener("mouseout" , () => itemWork.classList.remove('change-after-width'))
typoRecipes.addEventListener("mouseover" , () => typoRecipes.classList.add('change-after-width'))
typoRecipes.addEventListener("mouseout" , () => typoRecipes.classList.remove('change-after-width'))
typoChefz.addEventListener("mouseover" , () => typoChefz.classList.add('change-after-width'))
typoChefz.addEventListener("mouseout" , () => typoChefz.classList.remove('change-after-width'))
typoDeshes.addEventListener("mouseover" , () => typoDeshes.classList.add('change-after-width'))
typoDeshes.addEventListener("mouseout" , () => typoDeshes.classList.remove('change-after-width'))
typoSocial.addEventListener("mouseover" , () => typoSocial.classList.add('change-after-width'))
typoSocial.addEventListener("mouseout" , () => typoSocial.classList.remove('change-after-width'))

boxBig.addEventListener("click" , changeClassBoxbig)
iconBack[0].addEventListener("click" , iconBoxBig)
item1.addEventListener("click" , changeClassItem1)
item2.addEventListener("click" , changeClassItem2)
item3.addEventListener("click" , changeClassItem3)


