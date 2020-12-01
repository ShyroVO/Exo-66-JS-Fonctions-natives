let entierElement = document.getElementById("entier").innerHTML;
let flottantElement = document.getElementById("flottant").innerHTML;
let nonNumElement = document.getElementById("non-numerique").innerHTML;
let truncElement = document.getElementById("trunc").innerHTML;
let replaceElement = document.getElementById("replace").innerHTML;
let operande = 10;

entierElement= entierElement * operande;
flottantElement= flottantElement * operande;
randomElement = Math.floor(Math.random() * 100);
truncElement = Math.trunc(truncElement);
replaceElement = replaceElement.replace("world","Bosquet Laurie")

document.getElementById("entier").innerText= entierElement ;
document.getElementById("flottant").innerText= (flottantElement + entierElement) ;
document.getElementById("random").innerText= randomElement;
document.getElementById("trunc").innerText= truncElement;
document.getElementById("replace").innerText= replaceElement;