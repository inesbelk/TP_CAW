var trying = false; 

window.onload = function() {
    document.getElementById("start").onclick = Go;
    document.getElementById("end").onmouseover = Stop;
    var ran = document.getElementsByClassName("boundary");
    for (var i = 0; i < ran.length; i++) {
        ran[i].onmouseover = ines;
    }
};

function ines() {
    trying = true;
    var ran = document.getElementsByClassName("boundary");
    for (var i = 0; i < ran.length; i++) {
         ran[i].style.backgroundColor="red";
    }
}

function Go() {
    trying = false;
    var ran = document.getElementsByClassName("boundary");
    for (var i = 0; i < ran.length; i++) {
        ran[i].style.backgroundColor="#eeeeee";
    }
}

function Stop() {
    if(trying) {
        var s = document.getElementById("status").innerHTML = " You lost";
    } else {
                var s = document.getElementById("status").innerHTML = "You win!";
    }
}