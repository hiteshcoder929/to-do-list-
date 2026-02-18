let sliderBtn = document.querySelector(".slide-bar")
let slider = document.querySelector(".slider")
let sliderContent = document.querySelector(".content")
let dark = document.querySelector(".dark")
let light = document.querySelector(".light")
let lightCss = document.createElement("link")
let darkCss = document.createElement("link")
let body = document.querySelector("body")

let sliderState = "close"

sliderBtn.addEventListener("click", (e) => {
    e.stopPropagation()
    if (sliderState === "close") {
        slider.style.width = "20rem"
        sliderState = "open"
    } else if (sliderState === "open") {
        slider.style.width = "0px"
        sliderState = "close"
    }
})

body.addEventListener("click", (e)=>{
    if (sliderState === "open") {
        slider.style.width = "0px"
        sliderState = "close"
    }
})

let mode = "light"

function lightBtn() {
    darkCss.rel = "stylesheet"
    darkCss.href = "dark.css"
    darkCss.id = "dark"
    document.head.appendChild(darkCss)
    // lightCss.remove()
    mode = "dark"
}

function darkBtn() {
    lightCss.rel = "stylesheet"
    lightCss.href = "style.css"
    lightCss.id = "light"
    document.head.appendChild(lightCss)
    darkCss.remove()
    mode = "light"
}


dark.addEventListener("click", (e) => {
    e.stopPropagation(e)
    if (mode === "light") {
        lightBtn()
    }
})


light.addEventListener("click", (e) => {
    e.stopPropagation(e)
    if (mode === "dark") {
        darkBtn()
    }
})
