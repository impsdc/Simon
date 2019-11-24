//selecteurs pour le modal
let $modal = document.getElementById("Modal");
let $open = document.getElementById("openModal");
let $close = document.getElementsByClassName("closeModal")[0];
let $close2 = document.getElementsByClassName("closeModal")[1];
let $endgame = document.getElementById("gameOver");
let $onReset= document.getElementById('onReset')
let $onStart= document.getElementById('onStart')

//selecteurs des divs qui vont recevoir l'effet
const $green = document.querySelector('#vert');
const $red = document.querySelector('#rouge');
const $blue = document.querySelector('#bleu');
const $yellow = document.querySelector('#jaune');
const $all = [$red, $blue, $green, $yellow];

//selecteurs parameètres de jeux
let $serie = [];
let $userchain = [];
let $isinit= false;

//selecteurs des scores
$nbRound = document.getElementById('r');
$nbClick = document.getElementById('c');
$rdfinal = document.getElementById('roundfinal');
$cqfinal = document.getElementById('cliquefinal');
var p = 0;
var m = 0;

//////   MODAL   /////
$open.onclick = function() {
    $modal.style.display = "flex";
}
///// FERMETURE MODAL /////
$close.onclick = function() {
    $modal.style.display = "none";
}
$close2.onclick = function () {
    $endgame.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == $modal) {
        $modal.style.display = "none";
    }
}

const $start = () => {  
    $userchain = [];
    initialisation();
}

//définir si l'utilsiateur a appuipé sur start//
const initialisation = () => {
    $isinit = true;
    setTimeout(() => displayChain(), 500);
}

/////// Simon ////////
const displayChain = () => {
    $userChain = []
    const $randomChoice = $all[Math.floor(Math.random() * $all.length)]; // choix de la couleurs aléatoire
    const $idchoice = $randomChoice.id;  // récupérer l'id de l'objet choisi
    if($serie.length >= 1) {
         ajout($idchoice);
         console.log('yes')
    }
    else {   
        $serie = [];
        $serie.push($idchoice); 
        effet($idchoice);
    }
};

//fonction qui ajoute une couleurs a la série de Simon 
const ajout = ($idchoice) => { 
     for( let i = 0; i < $serie.length; i++) { //boucle qui rajoute une couleurs à chaque round
        console.log($serie);
       (function(t) {
            setTimeout(function suite() {
                        effet($serie[t]);
                        if(t == $serie.length - 1) { 
                            console.log($idchoice);
                            console.log($serie);
                            $serie.push($idchoice);
                            setTimeout(() => {
                                effet($idchoice);
                            }, 1000);
                        }
            }, 1000 * t);
        })(i);
   }
}

//effet qui prend en parametre l'id de l'objet choisi
const effet = ($idchoice) => {
    console.log($idchoice);
	document.getElementById($idchoice).className = $idchoice + " " +"effet" + "_" + $idchoice + ' ' + "box";
	setTimeout(() => {
		document.getElementById($idchoice).className = $idchoice + ' ' + "box";
	}, 1000);
}

// ////////Clique de l'utilisateur/////////
const $userClick = (e) => {
    $userchain.push(e.target.id);
    // $userchain = String($userchain);
    // $serie= String($serie);
    console.log($userchain);
    console.log($serie);
    counterClick();
    if(String($userchain) === String($serie)) { //compare l'array de simon et l'array de l'utilisateur en chaine de caractère
        counterround();
        console.log('yes')
        displayChain();
        
    }
    else if($isinit == true){ // si la partie initialisé, le joueur a perdu
          endgame();
    }
    else { // si le joueur n'a pas initialisé la partie, on vide l'array 
        $userchain = [];
    }
}

//affichage du modal de fin de jeux
const endgame = () => {
    $rdfinal.innerHTML = p;
    $cqfinal.innerHTML = m;
    $endgame.style.display = "flex";
}

//counter de clicks
const counterClick = () => {
    p++;
    $nbClick.innerHTML= +p
}
//counter de rounds
const counterround = () => {
    m++;
    $nbRound.innerHTML= +m
}

//rebbot tous les paramètres afin de recommencer une partie
const $reset = () => {
    $userChain = [];
    $serie = [];
    $nbClick.innerHTML = 0;
    $nbRound.innerHTML = 0
    $endgame.style.display = "none";
}

document.getElementById('play').addEventListener("click", $userClick);

$onStart.addEventListener("click", $start);

$onReset.addEventListener("click",$reset);


