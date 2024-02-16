"use script";


let btn = document.querySelector(".bulb");
let background = document.querySelector("section")
let btn2 = document.querySelector(".bulb");


btn.addEventListener("click",function(){
    // background.style.backgroundColor = "yellow"
    background.classList.add("first-colour")

    if(!background.classList.contains("second.colour")){
        background.classList.add("second-colour")
        background.classList.remove("first-colour")
    }

    
})




