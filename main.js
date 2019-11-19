let $modal = document.getElementById("Modal");
let $open = document.getElementById("openModal");
let $close = document.getElementsByClassName("closeModal")[0];

let $all = document.querySelector('.exter');
let $green = document.querySelector('.vert');
let $red = document.querySelector('.rouge');
let $blue = document.querySelector('.blue');
let $yellow = document.querySelector('.yellow');

$scoreRound = document.getElementById('scoreByRound');
$scoreClick = document.getElementById('scoreByClick');


//////   MODAL   /////
$open.onclick = function() {
    $modal.style.display = "flex";
}
///// FERMETURE MODAL /////
$close.onclick = function() {
    $modal.style.display = "none";
}
window.onclick = function(event) {
if (event.target == $modal) {
    $modal.style.display = "none";
}
}

function regles() {
    alert("Bienvenue sur mon Jeu Super Simon ! <br>Pour lancer le jeu, cliquez sur 'Jouer'");
}


function start(){
    console.log('Jeu commencé')
}