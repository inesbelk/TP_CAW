window.onload = function() {
    var ran = document.getElementsByClassName("boundary");
    for (var i = 0; i < ran.length; i++) {
        ran[i].onmouseover = ines;
    }
};

function ines() {
    var ran = document.getElementsByClassName("boundary");
    for (var i = 0; i < ran.length; i++) {
        ran[i].style.backgroundColor = "red";
    }
}