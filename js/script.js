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
let imgBoxChefz = document.querySelectorAll(".box-picher-user")
let BoxUser = document.querySelectorAll(".box-user")

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
        if (window.innerWidth <= 480) {
            item.style.removeProperty("background-position-y")
        } else {
            item.style.backgroundPositionY = "-105px"
        }
        addItem(item)
        iconBoxBig()
}

function changeClassBoxbig () {
    
    if (!boxBig.classList.contains("box-big")) {
        addBoxBig()
        if (item1.classList.contains("box-big")) {
            addItem(item1)
        } else if (item2.classList.contains("box-big")) {
            addItem(item2)
        } else if (item3.classList.contains("box-big")) {
            addItem(item3)
        } else {
            console.log(10);
        }

    } else {
            iconBoxBig()
    }
}

function changeClassItem1 () {           

    if (!item1.classList.contains("box-big")) {

        addBoxBigToItem(item1)

        if (item2.classList.contains("box-big")) {
            addItem(item2)
        } else if (item3.classList.contains("box-big")) {
            addItem(item3)
        } else {
            boxBig.style.gridColumn = "2 / 3"
        }
    }
    else {
        clickIconItems (item1)
    }

    changePositon()
}

function changeClassItem2 () {

    if (!item2.classList.contains("box-big")) {
        addBoxBigToItem(item2)
        if (item1.classList.contains("box-big")) {
            addItem(item1)
        } else if (item3.classList.contains("box-big")) {
            addItem(item3)
        } else {
            boxBig.style.gridColumn = "2 / 3"
        }

    } 
    else {
        clickIconItems(item2)
    }

    changePositon()
}

function changeClassItem3 () {

    if (!item3.classList.contains("box-big")) {
        addBoxBigToItem(item3)
        if (item2.classList.contains("box-big")) {
            addItem(item2)
        } else if (item1.classList.contains("box-big")) {
            addItem(item1)
        } else {
            boxBig.style.gridColumn = "2 / 3"
        }
        
    } 
    else {
        clickIconItems(item3) 
    }

    changePositon()
}

function iconBoxBig () {

    boxBig.classList.replace("box-big" , "item")
    
    boxBig.style.gridColumn = "1 / 2"
    changePositon()
    boxBig.style.backgroundPositionX = '0'

    cantainTextBox1.classList.add("cantain-text")
    cantainTextBox1.classList.remove("cantain-text-box1")
    cantainTextBox1PElem.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"

    cantainFooterLeft.style.width = "100%"

    dateBox1.classList.add("date")
    dateBox1.classList.remove("date-box1")

    if (author[0] != undefined) {
        author[0].remove() 
    }
    if (iconBack[0] != undefined) {
        iconBack[0].parentElement.remove()
    }    
}

function changePositon() {
    if (window.innerWidth <= 480) {
        boxBig.style.removeProperty("background-position")
    } else {
        boxBig.style.backgroundPositionY = '-115px'
        boxBig.style.backgroundPositionX = '0'
    }
}

function responseChefz () {
    
    if (window.innerWidth <= 380) {
        imgBoxChefz.forEach(box => box.remove())
       
        BoxUser[0].insertAdjacentHTML("beforeend" , `
            <img class="img-item-one" src="./images/25005c67efdddf0cd070638a2b5ba6e8.jpg" alt="">
            <img class="img-item-two" src="./images/27b450f246f65a55ed71a8f982295126.jpg" alt="">
            <img class="three" src="./images/1e157d9b1f6fc7f77860f24fbd7d0b6c.jpg" alt="">`
        )
        BoxUser[1].insertAdjacentHTML("beforeend" , `
                <img class="img-item-one" src="./images/d59512e67abe654272d6345e9be40a93.jpg" alt="">
                <img class="img-item-two" src="./images/6e4f0b61ced5c016e3f8e3bab8e3770f.jpg" alt="">
                <img class="three" src="./images/e38ac483fc29e500c2cad7aed75f6e10.jpg" alt="">`
        )
        BoxUser[2].insertAdjacentHTML("beforeend" , `
                <img class="img-item-one" src="./images/8e2209fa7fc1af0f90afaf6ba50aab24.jpg" alt="">
                <img class="img-item-two" src="./images/19b3011258b75523162abb66f2a445dc.jpg" alt="">
                <img class="three" src="./images/f37143a4e54ff440ed6bafd20de87190.jpg" alt="">`
        )
    }
}
responseChefz()

function scrollAnimation () {
    console.log(scrollY);
    if (window.innerWidth >= 1200) {

        if (scrollY >= 400) {
            about.style.visibility = "visible"
            about.classList.add("fade")
        }
        if (scrollY >= 1400) {
            work.style.visibility = "visible"
            work.classList.add("fade")
        }
        if (scrollY >= 2100) {
            deshes.style.visibility = "visible"
            deshes.classList.add("fade")
        }
        if (scrollY >= 3400) {
            chefz.style.visibility = "visible"
            chefz.classList.add("fade")
        }
        if (scrollY >= 4000) {
            recipes.style.visibility = "visible"
            recipes.classList.add("fade")
        }
        if (scrollY >= 4700) {
            social.style.visibility = "visible"
            social.classList.add("fade")
        }
        if (scrollY >= 5200) {
            footer.style.visibility = "visible"
            footer.classList.add("fade")
        }

    } 
    else if (window.innerWidth <= 1200 && window.innerWidth >= 992) {
        
        if (scrollY >= 1200) {
            work.style.visibility = "visible"
            work.classList.add("fade")
        }
        if (scrollY >= 2100) {
            deshes.style.visibility = "visible"
            deshes.classList.add("fade")
        }
        if (scrollY >= 3900) {            
            chefz.style.visibility = "visible"
            chefz.classList.add("fade")
        }
        if (scrollY >= 4800) {
            recipes.style.visibility = "visible"
            recipes.classList.add("fade")
        }  
        if (scrollY >= 6100) {
            social.style.visibility = "visible"
            social.classList.add("fade")
        }  
        if (scrollY >= 6550) {
            footer.style.visibility = "visible"
            footer.classList.add("fade")
        }  

    } 
    else if (window.innerWidth <= 992 && window.innerWidth >= 768) {
        
        if (scrollY >= 1200) {            
            work.style.visibility = "visible"
            work.classList.add("fade")
        }
        if (scrollY >= 1600) {
            deshes.style.visibility = "visible"
            deshes.classList.add("fade")
        }
        if (scrollY >= 3400) {            
            chefz.style.visibility = "visible"
            chefz.classList.add("fade")
        }
        if (scrollY >= 4150) {
            recipes.style.visibility = "visible"
            recipes.classList.add("fade")
        }  
        if (scrollY >= 5100) {
            social.style.visibility = "visible"
            social.classList.add("fade")
        }  
        if (scrollY >= 6500) {
            footer.style.visibility = "visible"
            footer.classList.add("fade")
        }  

    }
    else if (window.innerWidth <= 768 && window.innerWidth >= 576) {
        
        if (scrollY >= 1000) {            
            work.style.visibility = "visible"
            work.classList.add("fade")
        }
        if (scrollY >= 1900) {
            deshes.style.visibility = "visible"
            deshes.classList.add("fade")
        }
        if (scrollY >= 5300) {            
            chefz.style.visibility = "visible"
            chefz.classList.add("fade")
        }
        if (scrollY >= 6200) {
            recipes.style.visibility = "visible"
            recipes.classList.add("fade")
        }  
        if (scrollY >= 7500) {
            social.style.visibility = "visible"
            social.classList.add("fade")
        }  
        if (scrollY >= 8600) {
            footer.style.visibility = "visible"
            footer.classList.add("fade")
        }  

    }
    else if (window.innerWidth <= 576) {
        
        if (scrollY >= 850) {            
            work.style.visibility = "visible"
            work.classList.add("fade")
        }
        if (scrollY >= 1700) {
            deshes.style.visibility = "visible"
            deshes.classList.add("fade")
        }
        if (scrollY >= 5000) {            
            chefz.style.visibility = "visible"
            chefz.classList.add("fade")
        }
        if (scrollY >= 5800) {
            recipes.style.visibility = "visible"
            recipes.classList.add("fade")
        }  
        if (scrollY >= 7200) {
            social.style.visibility = "visible"
            social.classList.add("fade")
        }  
        if (scrollY >= 8350) {
            footer.style.visibility = "visible"
            footer.classList.add("fade")
        }  

    } 
    else {
        console.log("res");
    }
}

function clickBar () {
    sideMenu.style.transform = "translateX(0)"
    sideMenu.style.transition = "2s ease-out 0.2s"
}

function btnGreyDishes(event) {
    event.preventDefault()
    modal.style.display = "flex"
}

function arrowBoxInsta() {
    boxImageInsta.remove()
    boxTitleInsta.insertAdjacentHTML("afterend" , `<div class="fot fade">
                  <span>26 Jun at 16:20 pm</span>
                  <h6>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet,
                    consectetur adipiscing Lorem ipsum dolor sit amet,
                    consectetur adipiscing
                  </h6>
                  <!-- <p>@DennisFerguson</p> -->
                </div>`
    )
}

function addBoxBig() {
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
    if (boxBig.childElementCount == 2) {
        boxBig.insertAdjacentHTML("afterbegin" , '<span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="icon-svg-2"><path fill-rule="evenodd" d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z" clip-rule="evenodd" /></svg></span>')     
        cantainTextBox1.insertAdjacentHTML("afterend" , '<span class="author">Jason Keller</span>')                
    }
}

function addItem(item) {
    item.classList.add("item")
    item.classList.remove("box-big")

    item.children[0].remove()
    item.children[1].remove()

    item.children[0].classList.remove("cantain-text-box1")
    item.children[0].classList.add("cantain-text")

    item.children[0].children[0].innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"

    item.children[1].children[0].classList.add("date") 
    item.children[1].children[0].classList.remove("date-box1")

    item.style.backgroundPositionY = "-105px"
    item.style.backgroundBlendMode = "overlay"
}

function addBoxBigToItem(item) {
    let boxPElem = item.children[0]
    let pElem = item.children[0].children[0]
    let boxDate = item.children[1].children[0]

    item.insertAdjacentHTML("afterbegin" , '<span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="icon-svg-2"><path fill-rule="evenodd" d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z" clip-rule="evenodd" /></svg></span>')
    item.classList.add("box-big")
    item.classList.remove("item")
    item.style.backgroundPositionY = "0"
    item.style.backgroundBlendMode = "normal"
    
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
}

// ---------------------------------------
buttonGrey.forEach((grey) => grey.addEventListener("click" , (event) => btnGreyDishes(event)))

window.addEventListener("scroll" , scrollAnimation)

bars.addEventListener("click" , clickBar)

arrowInsta.addEventListener("click" , arrowBoxInsta)

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


