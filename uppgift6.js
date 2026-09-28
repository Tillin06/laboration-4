//Uppgift 6 med funktion av Tilda Öström Linde
"use strict";

function calculateArea (bredd, höjd) {  //Funktion skapad som tar emot värden "bredd" och "höjd" och returnerar bredd*höjd
    return bredd * höjd;
}
let area = calculateArea (2,5);  //Test siffror som skickas till funktionen och beräknas och sen returneras och sparas i ex "area"
let area2 = calculateArea (10,12);
let area3 = calculateArea (4,7);

console.log(`Arean är ${area}`); //Skriver ut det sparade värdet
console.log(`Arean är ${area2}`);
console.log(`Arean är ${area3}`);