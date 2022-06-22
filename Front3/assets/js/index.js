
const navbar = document.getElementById("navbar")

window.addEventListener("scroll",function(){
    console.log(window.scrollY)
    if (window.scrollY > 100) {
        navbar.style.backgroundColor = " #2C2D31"
    }
    else{
        navbar.style.background = " none"
    }
})

