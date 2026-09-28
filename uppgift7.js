//Uppgift 7 med arrayer och funktioner av Tilda Öström Linde
"use strict";
let numbers = [ 2, 3, 10, 4, 6, 4, 7]  //Array med nummer skapad
function count(arr) {                  //Funktion där start summa är 0
    let summa = 0;

    for (let i=0; i<arr.length; i++) { //for loop skapad för att gå igenom arrayens innehåll (stannar när i är lika med längden)
        summa += arr [i]; //räknar ihop summa med talen som hittas i arrayen [i] = 0 vilket är första talet i arrayen
    }
    return summa;
}
let total=count(numbers); //kallar på funktionen och sparar resultatet till total

console.log (`Summan är ${total}`); //Läser ut "summan är (totala summan av alla tal)"