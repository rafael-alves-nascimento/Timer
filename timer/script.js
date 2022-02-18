var falsa = false;
var minutos
var segundos

function start(){
    console.log(falsa)
    if (falsa == false){
        document.getElementById("contador_min").innerHTML = "24 :";
         segundos = 59
         minutos  = 24
    }
    falsa = false;

    const Segundos =  () => {
        document.getElementById('contador_seg').innerHTML = (segundos) 
        segundos = segundos - 1

        if (segundos == 0){
            segundos = 59
            minutos -= 1
        }
    }
    const Minutos = () => {
        document.getElementById('contador_min').innerHTML = (minutos) + " :"

        if(minutos == 0){
            setTimeout(interMin);
            setTimeout(intervSec);
        }
    }
    intervSec = setInterval(Segundos, 1000) 
    interMin = setInterval(Minutos, 60000)
}

function stop(){
    falsa = true;
    clearInterval(intervSec);
    clearInterval(interMin);
}

function reset(){
    stop();
    document.getElementById("contador_min").innerHTML = "25 :";
    segundos = 59
    minutos  = 24
    document.getElementById("contador_seg").innerHTML = " 00"
    falsa = false 
}
    