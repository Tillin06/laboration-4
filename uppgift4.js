//Lösning för loopar och villkor uppgift 4 av Tilda Öström Linde
"use strict";


//i har startvärde 1 och plussas med 1 varje gång loopen körs men stannar sen när i = 20
for(let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {   //Läser bara ut talen där numret kan delas på två utan att få en rest
    console.log (i);
    }
}
