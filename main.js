

let r = Number(prompt("Ingrese el valor del radio", 2));
function formulaAreaCirculo(radio, imagen="imagenes/circulo.png"){
    document.body.insertAdjacentHTML("afterbegin", `<img src="${imagen}">`);
    return Math.PI*r*r;
}
function formulaPerimetroCirculo(radio){
    return 2*Math.PI*r;
}
console.log(`El Area del Circulo es: ${formulaAreaCirculo(r)}`);
console.log(`El Perimetro del Circulo es: ${formulaPerimetroCirculo(r)}`);
