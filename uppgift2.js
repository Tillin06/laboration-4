//Lösning av uppgift 2 beräkna priser av Tilda Öström Linde
"use strict";
let price = "100";
let amount = "3";
let total = price * amount; //räknar ut hela priset
let moms = total * 1.25; //räknar ut hela priset + moms

console.log (`Pris: ${price}`); //skriver ut pris, antal, totalt och totalt+moms
console.log (`Antal: ${amount}`);
console.log (`Totalt: ${total}`);
console.log (`Totalt inklusive moms: ${moms}`);