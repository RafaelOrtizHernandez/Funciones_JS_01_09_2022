

let l = Number(prompt("Ingrese el valor del lado", 4));
function formulaAreaCuadrado(lado, imagen="imagenes/cuadrado.png"){
    document.body.insertAdjacentHTML("afterbegin", `<img src="${imagen}">`);
    return Math.pow(lado, 2);
}

console.log(`El Area del Cuadrado es: ${formulaAreaCuadrado(l)}`);