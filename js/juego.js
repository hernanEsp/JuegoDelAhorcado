import {dibujarBarras, dibujarAcertadas, dibujarErradas, limpiarHijos} from "./acertadasErradas.js";
import {dibujar, limpiar } from "./canvas.js";

var palabras = ['ALURA', 'ONE', 'ORACLE', 'HTML'];
var expr = new RegExp("[A-Z]");
var juego = {};
var victoria = document.querySelector(".victoria");
var derrota = document.querySelector(".derrota");

function sorteo(){
    let cant = palabras.length;
    let aleatorio = Math.floor(Math.random()*cant);
    let sorteada = palabras[aleatorio];
    let juego = {
        palabra: sorteada,
        adivinado: [],
        cantAdiviniado: 0,
        errado: []
    }

    return juego;
}

export function nuevoJuego(){
    juego = sorteo();
    limpiar();
    dibujar(juego.errado.length);
    limpiarHijos();
    agregarClases();
    window.addEventListener("keydown", verificar);
    dibujarBarras(juego.palabra.length);
}

function verificar(){
    let letra = event.key + " ";
    letra = letra[0].toUpperCase();
    if(expr.test(letra))
    if(juego.adivinado.indexOf(letra) == -1){
        var estado = false;
        let cant = 0;
        for(let i = 0; i < juego.palabra.length; i++){
            if(juego.palabra[i] === letra){
                estado = true;
                cant++;
                dibujarAcertadas(i ,letra);
            }
        }
        if(estado){
            juego.cantAdiviniado+= cant;
            juego.adivinado.push(letra);
            verificarVictoria();
        }else if(juego.errado.indexOf() == -1){
            juego.errado.push(letra);
            dibujar(juego.errado.length);
            dibujarErradas(letra);
            verificarDerrota();
        }
    }
}

function verificarVictoria(){
    if(juego.cantAdiviniado == juego.palabra.length){
        victoria.classList.remove("hide");
        window.removeEventListener("keydown", verificar);
    }
}

function verificarDerrota(){
    if(juego.errado.length === 9){
        derrota.classList.remove("hide");
        window.removeEventListener("keydown", verificar);
    }
}

function agregarClases(){
    victoria.classList.add("hide");
    derrota.classList.add("hide");
}

export function guardarPalabra(){

}