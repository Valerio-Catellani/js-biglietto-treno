import * as hype from "./hypeUtility.js"



/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
let cost = 3 */

let ticketCost = 0.21;
let over65 = 0.40;
let minor = 0.20;
let distance = prompt("Quanti km vuoi percorrere?").trim();
let age = parseInt(prompt("Scrivi l'età del passeggero").trim());


if (isNaN(distance)) { //ho anche creato una funzione hype.isaN
    alert("Devi scrivere il numero dei Kilometri e senza unità di misura!");
} else if (isNaN(age)) {
    alert("Scrivi un età appropriata!");
} else {
    let totalCost;
    if (age > 65) {
        totalCost = (ticketCost * distance) - (ticketCost * distance * over65).toFixed(2);
    } else if (age < 18) {
        totalCost = (ticketCost * distance) - (ticketCost * distance * minor).toFixed(2);
    } else {
        totalCost = (ticketCost * distance).toFixed(2);
    }
    document.getElementById("app").innerHTML = `il costo del biglietto per un passeggero di età ${age} è di ${totalCost}€`

}