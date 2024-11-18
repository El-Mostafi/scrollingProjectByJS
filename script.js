const body = document.querySelector("body");
const stars = document.getElementById("stars");
const moon = document.getElementById("moon");
const mountains3 = document.getElementById("mountains3");
const mountains4 = document.getElementById("mountains4");
const river = document.getElementById("river");
const boat = document.getElementById("boat");
const mountains7 = document.getElementById("mountains7");
const mostafi =document.getElementById("mostafi");
window.onscroll = () => {
    if (scrollY >= 92) {
        body.style.background = "linear-gradient( rgb(50, 109, 152),rgb(36, 0, 42)60%)";
    } else {
        body.style.background = ""; 
    }
    stars.style.left=scrollY+'px';
    moon.style.top=scrollY*(4)+'px';
    mountains3.style.top=scrollY*(2)+'px';
    mountains4.style.top=scrollY*(1.5)+'px';
    river.style.top=scrollY+'px';
    boat.style.top=scrollY+'px';
    boat.style.left=scrollY*3+'px';
    if(scrollY<=68){
    mostafi.style.fontSize=scrollY+'px';
    mostafi.style.position="fixed";
    }
    if(scrollY>444){
        mostafi.style.display="none";
    }
    else{
        mostafi.style.display="";
    }
    // mountains7.style.bottom=scrollY*(0.5)+'px';
};
