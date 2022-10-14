window.onload = function() {
    var ran = document.getElementsByClassName("boundary");
    ran[0].onmouseover = ines;
    ran[1].onmouseover = ines1;
    ran[2].onmouseover = ines2;
    ran[3].onmouseover = ines3;
    ran[4].onmouseover = ines4;
};

function ines() {
    var ran = document.getElementsByClassName("boundary");
    ran[0].style.backgroundColor = "red";
}
function ines1() {
    var ran = document.getElementsByClassName("boundary");
    ran[1].style.backgroundColor = "red";
}
function ines2() {
    var ran = document.getElementsByClassName("boundary");
    ran[2].style.backgroundColor = "red";
}
function ines3() {
    var ran = document.getElementsByClassName("boundary");
    ran[3].style.backgroundColor = "red";
}
function ines4() {
    var ran = document.getElementsByClassName("boundary");
    ran[4].style.backgroundColor = "red";
}