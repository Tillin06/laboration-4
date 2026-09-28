//Uppgift 5 array som innehåller minst fem maträtter av Tilda Öström Linde
"use strict";
let mat= [" Tacos"," Köttbullar"," Pasta"," Fiskpinnar"," Sushi"]; //Gör en array med fem maträtter
console.log (`Hela arrayen från början: ${mat}`); //Skriver ut arrayen 
console.log (`Första maträtten: ${mat[0]}`); //Skriver ut första maträtten i arrayen
console.log (`Sista maträtten: ${mat[4]}`); //Skriver ut sista maträtten i arrayen
mat.push (" Pizza"); //Lägger till en maträtt sist i arrayen
mat.shift(); //Tar bort första maträtten i arrayen
console.log (`Arrayen efter förändringarna: ${mat}`) //Skriver ut hela arrayen igen med nya innehållet