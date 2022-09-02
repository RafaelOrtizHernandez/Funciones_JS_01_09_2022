

let b = Number(prompt("Ingrese la base del rectangulo", 4));
let h = Number(prompt("Ingrese la altura del rectangulo", 5));
function formulaAreaRectangulo(base, altura, imagen="imagenes/rectangulo.png"){
    document.body.insertAdjacentHTML("afterbegin", `<img src="${imagen}">`);
    return base * altura;
}
console,console.log(`El Area del Rectangulo es: ${formulaAreaRectangulo(b, h)}`);
