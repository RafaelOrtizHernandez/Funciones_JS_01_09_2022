

let r = Number(prompt("Ingrese el valor del radio", 4));

function formulaAreaEsfera(radio, imagen="imagenes/esfera.png"){
    document.body.insertAdjacentHTML("afterbegin", `<img src="${imagen}">`);
    return 4*Math.PI*Math.pow(radio,2);
}

console.log(`El Area de la Esfera es: ${formulaAreaEsfera(r)}`);