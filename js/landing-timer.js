'use strict'

document.addEventListener("DOMContentLoaded", () => {

    timer();
})


function updateTimer(hr, min, sec) {
    document.querySelector("#timer-hr").innerHTML = hr;
    document.querySelector("#timer-min").innerHTML = min;
    document.querySelector("#timer-sec").innerHTML = sec;
}

function setTimerMsg(msg){
    document.querySelector("#timer-msg").innerHTML = "<b>"+msg+"</b>";
}

function timer() {
    let now = new Date();
    // si el dia es jueves y la hora actual es entre las 5 y 8 pm
    if (now.getDay() == 4 && (now.getHours() >= 17 && now.getHours() < 20 )) {
        setTimerMsg("¡Vamos! Aún queda tiempo para que seas feliz con nosotros")
        setInterval(() => {
            now = new Date();
            let hr = 19 - now.getHours();
            let min = 60 - now.getMinutes();
            let sec = 60 - now.getSeconds();
            updateTimer(hr, min, sec);
        }, 1000);
    } else {
        setTimerMsg("La promoción aun no empieza, quédate pendiente para el próximo día");
        document.querySelector("#timer-cont").style.display = "none";
    }
}