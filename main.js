

let a = Number(prompt("Ingrese el valor de la arista", 3));

function formulaVolumenCubo(arista, imagen="imagenes/cubo.png"){
    document.body.insertAdjacentHTML("afterbegin", `<img src="${imagen}">`);
    return Math.pow(arista, 3);
}

console.log(`El Volumen del Cubo es: ${formulaVolumenCubo(a)}`);