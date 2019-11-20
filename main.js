let $modal = document.getElementById("Modal");
let $open = document.getElementById("openModal");
let $close = document.getElementsByClassName("closeModal")[0];
let $endgame = document.getElementById("gameOver");

 const $green = document.querySelector('#vert');
 const $red = document.querySelector('#rouge');
 const $blue = document.querySelector('#bleu');
 const $yellow = document.querySelector('#jaune');
 const $all = [$red, $blue, $green, $yellow];

let $RandomChain = [];
let $UserChain = [];
let $steps = 0;
let $erreur = false;

$scoreRound = document.getElementById('scoreByRound');
$scoreClick = document.getElementById('scoreByClick');
$scoreClick = 0;
$scoreRound = 0;


//////   MODAL   /////
$open.onclick = function() {
    $modal.style.display = "flex";
}
///// FERMETURE MODAL /////
$close.onclick = function() {
    $modal.style.display = "none";
    $endgame.style.display = "none";

}
window.onclick = function(event) {
    if (event.target == $modal) {
        $modal.style.display = "none";
        $endgame.style.display = "none";
    }
}


function initialisation() {
    setTimeout(() => displayChain(), 300);
}

function ajout() {
    for (let i = 0; i < $RandomChain.length; i++) {
       (function(j) {
            setTimeout(function timer() {
                        effet($RandomChain[j]);
                        if(j == $RandomChain.length - 1) { 
                            $RandomChain.push(effet);
                            setTimeout(() => {
                                effet($RandomChain[j+1]);
                            }, 1000);
                        }
            }, 1000 * j);
        })(i);
   }
}

const displayChain = () => {
    const $randomChoice = $all[Math.floor(Math.random() * 4)];
    if($RandomChain.length >= 1) {  
         ajout();
    }
    else {  
        const $idrandomChoice = $randomChoice.id;
        $RandomChain.push($idrandomChoice); 
         effet($randomChoice); 
         
    }
};

function effet ($randomChoice) {
	$randomChoice.classList.add("effet");
	setTimeout(() => {
		$randomChoice.classList.remove("effet");;
	}, 500);
}

const $userClick = (e) => {
    $UserChain.push(e.target.id);
    if($UserChain[$steps] === $RandomChain[$steps]) {
        console.log('yes');
        $steps++;
        $erreur=false; 
    }
    else{   
        endgame()
    }
}
function start(){
    initialisation();
}
function endgame () {
    $endgame.style.display = "flex";
}

document.getElementById('play').addEventListener("click", $userClick);

