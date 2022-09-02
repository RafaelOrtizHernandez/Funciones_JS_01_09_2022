

let b = Number(prompt("Ingrese la base del triangulo", 4));
let h = Number(prompt("Ingrese la altura del triangulo", 5));
function formulaAreaTriangulo(base, altura, imagen="imagenes/triangulo.png"){
    document.body.insertAdjacentHTML("afterbegin", `<img src="${imagen}">`);
    return (base * altura)/2;
}
console.log(`El Area del Triangulo es: ${formulaAreaTriangulo(b, h)}`);
