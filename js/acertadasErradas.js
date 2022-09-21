var html = {
    adivinado: document.querySelector('.adivinado'),
    errado: document.querySelector('.errado')

}

export function dibujarBarras(num){
    for(let i = 0; i < num; i++){
        let $span = document.createElement('span');
        $span.setAttribute('class', 'letra adivinada');
        html.adivinado.appendChild($span);
    }
}

export function dibujarAcertadas(pos, letra){
    let $txt = document.createTextNode(letra);
    html.adivinado.childNodes[pos].appendChild($txt);
}

export function dibujarErradas(letra){
    let $txt = document.createTextNode(letra);
    let $span = document.createElement('span');
    $span.appendChild($txt);
    $span.setAttribute('class', 'letra errada');
    html.errado.appendChild($span);
}

export function limpiarHijos(){
    while(html.adivinado.firstChild){
        html.adivinado.removeChild(html.adivinado.firstChild);
    }
    while(html.errado.firstChild){
        html.errado.removeChild(html.errado.firstChild);
    }
}