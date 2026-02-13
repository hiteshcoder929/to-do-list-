let sliderBtn = document.querySelector(".slide-bar")
let slider = document.querySelector(".slider")
let sliderContent = document.querySelector(".content")

let sliderState= "close"

sliderBtn.addEventListener("click", (e) => {
    if (sliderState === "close") {
        slider.style.width = "20rem"
        sliderState = "open"
    } else if (sliderState === "open") {
        slider.style.width = "0px"
        sliderState = "close"
    }
})