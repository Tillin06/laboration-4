//Uppgift 9 sammanhängande program med flera delar av Tilda Öström Linde
"use strict";
const people = [  //array med tre objekt med namn ålder och stad
    {
        name: "Tilda",
        age: 20,
        city: "Eskilstuna"
    },
    {
        name: "Filip",
        age: 15,
        city: "Eskilstuna"
    },
    {
        name: "Alice",
        age: 18,
        city: "Eskilstuna"
    }
];
function presentPeople(people) { //funktion som kollar om personen är myndig eller inte
    let myndig;

    if (people.age >= 18) {
        myndig = "är myndig";
    }
    else {
        myndig = "är inte myndig";
    }
    console.log(`${people.name} bor i ${people.city} och ${myndig}`); //text som skrivs ut när funktionen anropas
}
for (let i=0; i < people.length; i++) { //loop som går igenom arrayen och läser in alla objekt
    presentPeople(people[i]); //kallar på funktionen
}