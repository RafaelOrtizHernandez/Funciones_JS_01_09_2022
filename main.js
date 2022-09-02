

let P = Number(prompt("Ingrese el valor del Perímetro", 4));
let a = Number(prompt("Ingrese el valor de la apotema", 5));
function formulaAreaPoligono(perimetro, apotema, imagen="imagenes/pregular.png"){
    document.body.insertAdjacentHTML("afterbegin", `<img src="${imagen}">`);
    return (perimetro/2)*apotema;
}
console.log(`El Area del Poligono Regular es: ${formulaAreaPoligono(P, a)}`);
