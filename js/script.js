let bars = document.querySelector(".fa-bars")
let closee = document.querySelector(".fa-close")
let sideMenu = document.querySelector(".top")

let slides = document.getElementsByClassName("slide")
let currentIndex = 1

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


bars.addEventListener("click" , function () {
    sideMenu.style.transform = "translateX(0)"
    sideMenu.style.transition = "2s ease-out 0.2s"
})

closee.addEventListener("click" , function () {
    sideMenu.style.transform = "translateX(-250px)"
})

function changeSlide (n) {    
    currentIndex += n;
    displayImages(currentIndex);
}



















