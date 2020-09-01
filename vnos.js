"use strict";
//localStorage.clear()
function addParticipant(event) {
    // TODO: Get values
    const date = document.querySelector("#date").value;
    const cost_type = document.querySelector("#cost_type").value;
    const price = document.querySelector("#price").value;
    const description = document.querySelector("#opis").value;
    
    // TODO: Set input fields to empty values
    // ...
    document.querySelector("#price").value = "";
    document.querySelector("#opis").value = "";


    
    // Create participant object
    const participant = {
        date: date,
        description: description,
        price: price,
        cost_type: cost_type
        
    };
    console.log(participant)

    // Add participant to the HTML
    //domAddParticipant(participant);

    let dolzina = localStorage.length;
    if(dolzina > 0){
        
        let kljuci = Object.keys(localStorage);
        //console.log(kljuci)
        dolzina = Math.max(...kljuci)
    }
    else{
        dolzina = 0
    }
    console.log(dolzina)



    if(participant["date"].length != 0 && participant["price"].length != 0 ){

        let podatki = [dolzina+1, participant["date"], participant["description"], participant["price"],participant["cost_type"]];
        let shranimo = JSON.stringify(podatki);
        console.log(participant["price"])
        
        localStorage.setItem(dolzina+1,shranimo);
    }
    else{
        alert("Vnesti morate datum in ceno.")
    }
 /*   
    for (var i = 0; i<localStorage.length; i++) {
        console.log(localStorage.getItem(localStorage.key(i)));
        console.log(localStorage.key(i))
    }
    console.log("----------------------------------")
    */


    // Move cursor to the first name input field
    document.getElementById("price").focus();



}





document.addEventListener("DOMContentLoaded", () => {
    // This function is run after the page contents have been loaded
    // Put your initialization code here
    document.getElementById("addButton").onclick = addParticipant;

    
})