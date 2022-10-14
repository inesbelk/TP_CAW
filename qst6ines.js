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
}

function Go() {
    trying = false;
    var ran = document.getElementsByClassName("boundary");
}

function Stop() {
    if(!trying) {
        var s = document.getElementById("status").innerHTML = "You WIN.";

    } else{
        var s = document.getElementById("status").innerHTML = "You Lost.";

    }
}
