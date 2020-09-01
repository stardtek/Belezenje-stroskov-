
document.addEventListener("DOMContentLoaded", () => {
    // This function is run after the page contents have been loaded
    // Put your initialization code here
    poDnevih()
    document.getElementById("poDnevih").onclick = poDnevih;
    document.getElementById("hrana").onclick = hrana;
    document.getElementById("prevoz").onclick = prevoz;
    document.getElementById("ostalo").onclick = ostalo;

    
})




function poDnevih(){
    // Podatki vsi
    document.getElementById("naslov").innerHTML = "Stroški po dnevih";
    let kljuci = Object.keys(localStorage);
    //console.log(kljuci)

    //canvas
    canvas = document.getElementById("graf");
    context = canvas.getContext("2d");
    context.fillStyle = "white"
    context.fillRect(0,0,context.canvas.width,context.canvas.height)

    //SKUPI ZA DNEVE
    var dnevi = new Object();
    for( let key in kljuci){
        //console.log(localStorage.getItem(key))
        let dan = JSON.parse( localStorage.getItem([kljuci[key]]));
        if(!(dan[1] in dnevi)){
            dnevi[dan[1]] = parseFloat(dan[3])
        }
        else{
            dnevi[dan[1]] += parseFloat(dan[3])
        }

    }
    kljuci = Object.keys(dnevi).sort()

    if(kljuci.length > 120){
        kljuci = kljuci.slice((kljuci.length-120),kljuci.length)
    }

    razmik = context.canvas.width/(Object.keys(dnevi).length + 1)
    console.log(dnevi)
    //console.log(kljuci)


    var maxx = 0
    for (var key in kljuci){
        var value = dnevi[kljuci[key]]
        if(value > maxx){
            maxx = value
        }
        
    }
    if(context.canvas.height < maxx){
        canvas.height = maxx +50
    //    console.log("izvede")
        context.fillStyle = "white"
        context.fillRect(0,0,context.canvas.width,context.canvas.height)
    }
    if(context.canvas.height > maxx){
        canvas.height = maxx +50
        //console.log("izvede")
        context.fillStyle = "white"
        context.fillRect(0,0,context.canvas.width,context.canvas.height)
    }
    


    var x = 0
    var zacetekY = canvas.height
    var zacetekX = 0
    //console.log(zacetekY+"zacetek")
    for(var key in kljuci){
        //console.log(key)
        var value = dnevi[kljuci[key]]
    //    console.log(value)
        context.fillStyle = "black"

        context.beginPath()
        context.arc(x+razmik,(context.canvas.height - value),5,0, 2* Math.PI) 
        context.stroke()

        context.font = "15px Arial"
        context.fillText(kljuci[key], x+razmik,(context.canvas.height - value-10))
        context.fillText(value+" €", x+razmik,(context.canvas.height - value-25))
        
        context.beginPath()
        context.moveTo(zacetekX, zacetekY)
        context.lineTo(x+razmik, (context.canvas.height - value))
        context.stroke()


        zacetekX = x+ razmik
        zacetekY = (context.canvas.height - value)
        x += razmik


    }
}
function hrana(){
    // Podatki vsi
    document.getElementById("naslov").innerHTML = "Hrana in pijača";
    let kljuci = Object.keys(localStorage);
    //console.log(kljuci+"asddddddddddd")

    //canvas
    canvas = document.getElementById("graf");
    context = canvas.getContext("2d");
    context.fillStyle = "white"
    context.fillRect(0,0,context.canvas.width,context.canvas.height)

    //SKUPI ZA DNEVE
    var dnevi = new Object();
    for( let key in kljuci){
        //console.log(localStorage.getItem(key))
        let dan = JSON.parse( localStorage.getItem([kljuci[key]]));
        if(dan[4] == "Hrana in pijača" ){
            if(!(dan[1] in dnevi)){
                dnevi[dan[1]] = parseFloat(dan[3])
            }
            else{
                dnevi[dan[1]] += parseFloat(dan[3])
            }
        }
        

    }
    kljuci = Object.keys(dnevi).sort()
    if(kljuci.length > 120){
        kljuci = kljuci.slice((kljuci.length-120),kljuci.length)
    }
    razmik = context.canvas.width/(Object.keys(dnevi).length + 1)
    //console.log(dnevi)
    //console.log(kljuci)


   
    var maxx = 0
    for (var key in kljuci){
        var value = dnevi[kljuci[key]]
        if(value > maxx){
            maxx = value
        }
        
    }
    if(context.canvas.height < maxx){
        canvas.height = maxx +50
    //    console.log("izvede")
        context.fillStyle = "white"
        context.fillRect(0,0,context.canvas.width,context.canvas.height)
    }
    if(context.canvas.height > maxx){
        canvas.height = maxx +50
    //    console.log("izvede")
        context.fillStyle = "white"
        context.fillRect(0,0,context.canvas.width,context.canvas.height)
    }

    var x = 0
    var zacetekY = context.canvas.height
    var zacetekX = 0
    for(var key in kljuci){
    //    console.log(key)
        var value = dnevi[kljuci[key]]
    //    console.log(value)
        context.fillStyle = "black"

        context.beginPath()
        context.arc(x+razmik,(context.canvas.height - value),5,0, 2* Math.PI) 
        context.stroke()

        context.font = "15px Arial"
        context.fillText(kljuci[key], x+razmik,(context.canvas.height - value-10))
        context.fillText(value+" €", x+razmik,(context.canvas.height - value-25))
        
        context.beginPath()
        context.moveTo(zacetekX, zacetekY)
        context.lineTo(x+razmik, (context.canvas.height - value))
        context.stroke()
        zacetekX = x+ razmik
        zacetekY = (context.canvas.height - value)
        x += razmik


    }
    

}
function prevoz(){
    // Podatki vsi
    document.getElementById("naslov").innerHTML = "Prevoz";
    let kljuci = Object.keys(localStorage);
    //console.log(kljuci+"asddddddddddd")

    //canvas
    canvas = document.getElementById("graf");
    context = canvas.getContext("2d");
    context.fillStyle = "white"
    context.fillRect(0,0,context.canvas.width,context.canvas.height)

    //SKUPI ZA DNEVE
    var dnevi = new Object();
    for( let key in kljuci){
        //console.log(localStorage.getItem(key))
        let dan = JSON.parse( localStorage.getItem([kljuci[key]]));
        if(dan[4] == "Prevoz" ){
            if(!(dan[1] in dnevi)){
                dnevi[dan[1]] = parseFloat(dan[3])
            }
            else{
                dnevi[dan[1]] += parseFloat(dan[3])
            }
        }
        

    }
    kljuci = Object.keys(dnevi).sort()
    if(kljuci.length > 120){
        kljuci = kljuci.slice((kljuci.length-120),kljuci.length)
    }
    razmik = context.canvas.width/(Object.keys(dnevi).length + 1)
    //console.log(dnevi)
    //console.log(kljuci)


    
    var maxx = 0
    for (var key in kljuci){
        var value = dnevi[kljuci[key]]
        if(value > maxx){
            maxx = value
        }
        
    }
    if(context.canvas.height < maxx){
        canvas.height = maxx +50
        //console.log("izvede")
    }
    if(context.canvas.height > maxx){
        canvas.height = maxx +50
        //console.log("izvede")
        context.fillStyle = "white"
        context.fillRect(0,0,context.canvas.width,context.canvas.height)
    }





    var x = 0
    var zacetekY = context.canvas.height
    var zacetekX = 0
    for(var key in kljuci){
        //console.log(key)
        var value = dnevi[kljuci[key]]
        console.log(value)
        context.fillStyle = "black"

        context.beginPath()
        context.arc(x+razmik,(context.canvas.height - value),5,0, 2* Math.PI) 
        context.stroke()

        context.font = "15px Arial"
        context.fillText(kljuci[key], x+razmik,(context.canvas.height - value-10))
        context.fillText(value+" €", x+razmik,(context.canvas.height - value-25))
        
        context.beginPath()
        context.moveTo(zacetekX, zacetekY)
        context.lineTo(x+razmik, (context.canvas.height - value))
        context.stroke()
        zacetekX = x+ razmik
        zacetekY = (context.canvas.height - value)
        x += razmik


    }
    

}


function ostalo(){
    // Podatki vsi
    document.getElementById("naslov").innerHTML = "Ostalo";
    let kljuci = Object.keys(localStorage);
    //console.log(kljuci+"asddddddddddd")

    //canvas
    canvas = document.getElementById("graf");
    context = canvas.getContext("2d");
    context.fillStyle = "white"
    context.fillRect(0,0,context.canvas.width,context.canvas.height)

    //SKUPI ZA DNEVE
    var dnevi = new Object();
    for( let key in kljuci){
        //console.log(localStorage.getItem(key))
        let dan = JSON.parse( localStorage.getItem([kljuci[key]]));
        if(dan[4] == "Ostalo" ){
            if(!(dan[1] in dnevi)){
                dnevi[dan[1]] = parseFloat(dan[3])
            }
            else{
                dnevi[dan[1]] += parseFloat(dan[3])
            }
        }
        

    }
    kljuci = Object.keys(dnevi).sort()
    if(kljuci.length > 120){
        kljuci = kljuci.slice((kljuci.length-120),kljuci.length)
    }
    razmik = context.canvas.width/(Object.keys(dnevi).length + 1)
    //console.log(dnevi)
    //console.log(kljuci)


    
    var maxx = 0
    for (var key in kljuci){
        var value = dnevi[kljuci[key]]
        if(value > maxx){
            maxx = value
        }
        
    }
    if(context.canvas.height < maxx){
        canvas.height = maxx +50
        //console.log("izvede")
        context.fillStyle = "white"
        context.fillRect(0,0,context.canvas.width,context.canvas.height)
    }
    if(context.canvas.height > maxx){
        canvas.height = maxx +50
        //console.log("izvede")
        context.fillStyle = "white"
        context.fillRect(0,0,context.canvas.width,context.canvas.height)
    }



    var x = 0
    var zacetekY = context.canvas.height
    var zacetekX = 0
    for(var key in kljuci){
        //console.log(key)
        var value = dnevi[kljuci[key]]
        console.log(value)
        context.fillStyle = "black"

        context.beginPath()
        context.arc(x+razmik,(context.canvas.height - value),5,0, 2* Math.PI) 
        context.stroke()

        context.font = "15px Arial"
        context.fillText(kljuci[key], x+razmik,(context.canvas.height - value-10))
        context.fillText(value+" €", x+razmik,(context.canvas.height - value-25))
        
        context.beginPath()
        context.moveTo(zacetekX, zacetekY)
        context.lineTo(x+razmik, (context.canvas.height - value))
        context.stroke()
        zacetekX = x+ razmik
        zacetekY = (context.canvas.height - value)
        x += razmik


    }
    

}






    