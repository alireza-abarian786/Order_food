let bars = document.querySelector(".fa-bars")
let closee = document.querySelector(".fa-close")
let sideMenu = document.querySelector(".top")




bars.addEventListener("click" , function () {
    sideMenu.style.transform = "translateX(0)"
    sideMenu.style.transition = "2s ease-out 0.2s"
})

closee.addEventListener("click" , function () {
    sideMenu.style.transform = "translateX(-250px)"
    // sideMenu.style.transition = "2s ease-out 0.2s"
})

window.addEventListener("loadeddata" , function () {
    this.alert(4)
})



















