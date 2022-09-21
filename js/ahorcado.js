import {nuevoJuego, guardarPalabra} from "./juego.js";

var juego = document.querySelectorAll(".nuevo-juego");
var cancelar = document.querySelectorAll(".cancelar");
var agregarPalabra = document.querySelector(".agregar-palabra");

juego[0].onclick = nuevo;
juego[1].onclick = nuevo;
cancelar[1].onclick = cancelarJuego;
cancelar[0].onclick = volver;
agregarPalabra.onclick = agregar;

function cancelarJuego(){
    let pantalla = document.querySelector(".principal");
    let juego = document.querySelector(".juego");
    juego.classList.add("hide");
    pantalla.classList.remove("hide");
}

function nuevo(){
    nuevoJuego();
    let pantalla = document.querySelector(".principal");
    let juego = document.querySelector(".juego");
    juego.classList.remove("hide");
    pantalla.classList.add("hide");
}

function volver(){
    let pantalla = document.querySelector(".principal");
    let palabra = document.querySelector(".palabra");
    palabra.classList.add("hide");
    pantalla.classList.remove("hide");
}

function agregar(){
    //let guardar = document.querySelector(".guardar");
    let pantalla = document.querySelector(".principal");
    let palabra = document.querySelector(".palabra");
    palabra.classList.remove("hide");
    pantalla.classList.add("hide");
    //guardar.onclick = guardarPalabra;
}