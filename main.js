

let r = Number(prompt("Ingrese el radio de la esfera", 4));

function formulaVolumenEsfera(radio, imagen="imagenes/esfera.png"){
    document.body.insertAdjacentHTML("afterbegin", `<img src="${imagen}">`);
    return 4/3*(Math.PI)*Math.pow(radio, 3);
}

console.log(`El Volumen de la Esfera es: ${formulaVolumenEsfera(r)}`);