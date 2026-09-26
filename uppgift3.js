//Lösning för uppgift 3 villkor för ålder av Tilda Öström Linde
"use strict";

let age = 64;

if (age < 18) { //om age är mindre än 18 = barn
    console.log ("Barn"); 
} else if (age <= 64) { //om age är mindre än 64 = vuxen
    console.log("Vuxen");
} else { //om age större än 65 = pensionär
    console.log ("Pensionär");
}