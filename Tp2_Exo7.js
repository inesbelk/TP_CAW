window.onload = function() {
    document.getElementById("maze").onmouseleave = mouseLeave;
    document.getElementById("maze").onmouseenter = mouseEnter;
    document.getElementById("end").onmouseover = end;

    var ran = document.getElementsByClassName("boundary");
    for (var i = 0; i < ran.length; i++) {
        ran[i].onmouseover = overBan;
        ran[i].onmousleave = overBan;
    }
};

function mouseLeave() {
    ines  = true;
}

function  mouseEnter() {
    ines  = false;
}

function overBan(){
    var x = document.getElementsByClassName("boundary");
    
    for (var i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = "red";
        if (x[i].style.backgroundColor == "red") {
            var s = document.getElementById("status").innerHTML = "You Lost.";
        }
    }
}
    
function end() {
    var x = document.getElementsByClassName("boundary");
    
    for (var i = 0; i < x.length; i++) {
        if (x[i].style.backgroundColor != "red" && ines ==false) {
            var s = document.getElementById("status").innerHTML = " You Won!";
        } else {
            var s = document.getElementById("status").innerHTML = "Stop Cheating!";
        }
    }
}
