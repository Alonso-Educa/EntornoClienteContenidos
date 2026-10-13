"use strict";

function dibujar(){
    let meses=["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
    document.open();
    for(let i=0;i<12;i++){
        let posX = Math.random()*800;
        let posY = Math.random()*200;
        let r = Math.random()*255;
        let g = Math.random()*255;
        let b = Math.random()*255;
        
        document.write("<div id='"+meses[i]+"' style='position: fixed; top:"+posY+"; left:"+posX+"; background-color: rgb("+r+" "+g+" "+b+"); border: 1px solid black; padding = 50px;'>"+meses[i]+"</div>");
    }
    document.close();
}

setInterval(dibujar, 1500);