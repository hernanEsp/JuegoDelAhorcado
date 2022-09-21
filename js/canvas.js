var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
var ctxColor = "rgba(255, 28, 32, 0.87)";

function dibujarBase(){
    ctx.fillStyle = ctxColor;
    ctx.beginPath();
    ctx.fillRect(10, 295, 280, 5);
    ctx.stroke();
}

function dibujarMastil(){
    ctx.fillStyle = ctxColor;
    ctx.beginPath();
    ctx.fillRect(50, 10, 5, 285);
    ctx.stroke();
}

function dibujarSoporte(){
    ctx.fillStyle = ctxColor;
    ctx.beginPath();
    ctx.fillRect(50, 5, 100, 5);
    ctx.stroke();
}

function dibujarSoga(){
    ctx.fillStyle = ctxColor;
    ctx.beginPath();
    ctx.fillRect(150, 5, 5, 35);
    ctx.stroke();
}

function dibujarCabeza(){
    ctx.beginPath();
    ctx.strokeStyle = ctxColor;
    ctx.lineWidth = 5;
    ctx.arc(152.5, 57.5, 15, 0, Math.PI*2, true);
    ctx.stroke();
}

function dibujarCuerpo(){
    ctx.fillStyle = ctxColor;
    ctx.fillRect(150, 75, 5, 60);
}

function dibujarBrazoDerecho(){
    ctx.beginPath();
    ctx.strokeStyle = ctxColor;
    ctx.moveTo(150, 75);
    ctx.lineTo(130, 120);
    ctx.stroke();
}

function dibujarBrazoIzquierdo(){
    ctx.beginPath();
    ctx.strokeStyle = ctxColor;
    ctx.moveTo(155, 75);
    ctx.lineTo(175, 120);   
    ctx.stroke();
}

function dibujarPiernaDerecha(){
    ctx.beginPath();
    ctx.strokeStyle = ctxColor;
    ctx.moveTo(152, 130);
    ctx.lineTo(130, 200);   
    ctx.stroke();
}

function dibujarPiernaIzquierda(){
    ctx.beginPath();
    ctx.strokeStyle = ctxColor;
    ctx.moveTo(153, 130);
    ctx.lineTo(175, 200);
    ctx.stroke();
}



export function dibujar(num){
    switch(num){
        case 0: 
            dibujarBase();
            break;
        case 1:
            dibujarMastil();
            break;
        case 2:
            dibujarSoporte();
            break;            
        case 3:
            dibujarSoga();
            break;
        case 4:
            dibujarCabeza();
            break;
        case 5:
            dibujarCuerpo();
            break;
        case 6:
            dibujarBrazoDerecho();
            break;
        case 7:
            dibujarBrazoIzquierdo();
            break;
        case 8:
            dibujarPiernaDerecha();
            break;
        case 9:
            dibujarPiernaIzquierda();
            break;
    }
}

export function limpiar(){
    ctx.clearRect(0, 0, 300, 300);
}
