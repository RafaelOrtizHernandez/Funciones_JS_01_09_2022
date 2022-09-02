

let B = Number(prompt("Ingrese el valor de la Base Mayor", 4));
let b = Number(prompt("Ingrese el valor de la base menor", 5));
let h = Number(prompt("Ingrese el valor de la altura", 5));
function formulaAreaTrapecio(BMayor, bmenor, altura, imagen="imagenes/trapecio.png"){
    document.body.insertAdjacentHTML("afterbegin", `<img src="${imagen}">`);
    return ((BMayor + bmenor)/2)*altura;
}
console.log(`El Area del Trapecio es: ${formulaAreaTrapecio(B, b, h)}`);
