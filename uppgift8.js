//Uppgift 8 skapande av objekt av Tilda Öström Linde
"use strict";
let book = { //skapar objekt för en bok i mitt fall the hunger games
    name: "The Hunger Games",
    author: "Suzanne Collins",
    release: 2008
};

function bookinfo (book) { //skapar en funktion bookinfo(book) som används för att skriva ut titeln, författaren och utgivningsåret
    console.log (`Titel: ${book.name}`);
    console.log (`Författare: ${book.author}`);
    console.log (`Utgivningsår: ${book.release}`);
}
bookinfo(book); //kallar på funktionen