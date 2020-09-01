"use strict";

function domRemoveParticipant(event) {
    let index = event.currentTarget.rowIndex-1;
    //console.log(index)
    //de nemormo zbrisat TH-ja
    if(index == -1){
        return;
    }
    let kljuci = Object.keys(localStorage);
    kljuci = kljuci.sort();
    //console.log(kljuci)
    
    
    var r = confirm("Ste prepričani da želite izbrisati?");
    if(r){
        $(this).remove();
        localStorage.removeItem([kljuci[index]]);


        //console.log(kljuci[index]+" "+index)
        //console.log(localStorage.length)

    }

}


document.addEventListener("DOMContentLoaded", () => {
    // This function is run after the page contents have been loaded
    // Put your initialization code here

   
    let data = Object.keys(localStorage);
    
    data = data.sort();
    //console.log(data);
    var dates =  []
    for(let key in data){
        let participant = JSON.parse( localStorage.getItem([data[key]]) );
        //console.log(typeof(participant[1]))
        if(!(dates.includes(participant[1]))){
            dates.push(participant[1])
        }
    }
    dates = dates.sort();
dates.forEach(element => {
    for( let key in data){
        //console.log(localStorage.getItem([data[key]]))
        let participant = JSON.parse( localStorage.getItem([data[key]]) );
        if(participant[1] == element){
            let tr = $('<tr id="rem"></tr>');
            tr.append($('<td></td>').text(participant[1]));
            tr.append($('<td></td>').text(participant[2]));
            tr.append($('<td></td>').text(participant[3]));
            //console.log(tr);
            if(participant[4] == "Hrana in pijača"){
                $('#hrana_pijaca').append(tr);
                //$('#hrana_pijaca tbody tr').dblclick(domRemoveParticipant);
            }
            if(participant[4] == "Prevoz"){

                $('#prevoz').append(tr);
                //$('#prevoz tbody tr').dblclick(domRemoveParticipant);
            }
            if(participant[4] == "Ostalo"){

                $('#ostalo').append(tr);
                //$('#ostalo tbody tr').dblclick(domRemoveParticipant);
        }
    }


    }


});
    
    //console.log($('#hrana_pijaca'))
    $('#hrana_pijaca tbody tr').dblclick(domRemoveParticipant);
    $('#prevoz tbody tr').dblclick(domRemoveParticipant);
    $('#ostalo tbody tr').dblclick(domRemoveParticipant);
    //console.log(localStorage.getItem("3"))


    if(data.length > 5){
        var zacetek = data.length-5
    }
    else{
        var zacetek = 0
    }
    var zadnji = data.slice(zacetek,data.length)
    
    var text = ""
    if (data.length > 0){
        for(let key in zadnji){
            let participant = JSON.parse( localStorage.getItem(zadnji[key]) );
            //console.log(participant+ " " + key)
            text += participant[1] + " " + participant[2] + " " + participant[3] + " €<br><br>"


        }

        document.getElementById("zadnji").innerHTML = text
    }




    //reversamo
    document.getElementById("revers").onclick = revers;





  
})


function revers(){
    var dates =  []

    var dolzina = document.getElementById("hrana_pijaca").rows.length
    for (let index = 0; index < dolzina; index++) {
        var datum = $('#rem').text()
        $('#rem').remove()
        datum = datum.slice(0,10)    
        if(!(dates.includes(datum))&& datum.length > 1){
            dates.push(datum)
        }
        
    }

    var dolzina = document.getElementById("prevoz").rows.length
    for (let index = 0; index < dolzina; index++) {
        var datum = $('#rem').text()
        $('#rem').remove()
        datum = datum.slice(0,10)       
        if(!(dates.includes(datum)) && datum.length > 1){
            dates.push(datum)
        }  
        
    }

    var dolzina = document.getElementById("ostalo").rows.length
    for (let index = 0; index < dolzina; index++) {
        var datum = $('#rem').text()
        $('#rem').remove()
        datum = datum.slice(0,10)      
        if(!(dates.includes(datum)) && datum.length > 1){
            dates.push(datum)
        } 
        
    }
    
    








    let data = Object.keys(localStorage);
    
    data = data.sort();


    dates.reverse()



dates.forEach(element => {
    for( let key in data){
        //console.log(localStorage.getItem([data[key]]))
        let participant = JSON.parse( localStorage.getItem([data[key]]) );
        if(participant[1] == element){
            let tr = $('<tr id="rem"></tr>');
            tr.append($('<td></td>').text(participant[1]));
            tr.append($('<td></td>').text(participant[2]));
            tr.append($('<td></td>').text(participant[3]));
            //console.log(tr);
            if(participant[4] == "Hrana in pijača"){
                $('#hrana_pijaca').append(tr);
                //$('#hrana_pijaca tbody tr').dblclick(domRemoveParticipant);
            }
            if(participant[4] == "Prevoz"){

                $('#prevoz').append(tr);
                //$('#prevoz tbody tr').dblclick(domRemoveParticipant);
            }
            if(participant[4] == "Ostalo"){

                $('#ostalo').append(tr);
                //$('#ostalo tbody tr').dblclick(domRemoveParticipant);
        }
    }


    }


});
$('#hrana_pijaca tbody tr').dblclick(domRemoveParticipant);
$('#prevoz tbody tr').dblclick(domRemoveParticipant);
$('#ostalo tbody tr').dblclick(domRemoveParticipant);





}


