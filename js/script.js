let bars = document.querySelector(".fa-bars")
let closee = document.querySelector(".fa-close")
let sideMenu = document.querySelector(".top")

let slides = document.getElementsByClassName("slide")
let currentIndex = 1

let work = document.querySelector(".item-work")
let deshes = document.querySelector(".typo-deshes")
let chefz = document.querySelector(".typo-chefz")
let recipes = document.querySelector(".typo-recipes")
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


















