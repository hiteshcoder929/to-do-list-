let sliderBtn = document.querySelector(".slide-bar")
let slider = document.querySelector(".slider")
let sliderContent = document.querySelector(".content")
let body = document.querySelector("body")
let submitBtn = document.querySelector(".submit")
let taskList = document.querySelector(".task-list")
let taskText = document.querySelector("#input")

let sliderState = "close"

function gearFunction() {
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

    body.addEventListener("click", (e) => {
        if (sliderState === "open") {
            slider.style.width = "0px"
            sliderState = "close"
        }
    })

}
gearFunction()

const tasks = [

]

submitBtn.addEventListener("click", (e) => {
    e.preventDefault()
    if (taskText.value !== "") {
        let taskHtml = `<div class="task">
                    <div class="left">
                        <input type="checkbox" class="checkbox">
                        <p class="text">${taskText.value}</p>
                    </div>
                    <div class="right">
                        <div class="delete">
                            <i class="fa-solid fa-trash"></i>
                        </div>
                        <div class="edit">
                            <i class="fa-solid fa-pen-to-square"></i>
                        </div>
                    </div>
                </div>`
        taskList.innerHTML += `${taskHtml}`
        taskText.value = ""
        console.log("hitesh")
    }

})


