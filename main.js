

let l = Number(prompt("Ingrese el largo", 4));
let a = Number(prompt("Ingrese el ancho", 3));
let h = Number(prompt("Ingrese la altura", 2));

function formulaVolumenOrtoedro(largo, ancho, altura, imagen="imagenes/ortoedro.png"){
    document.body.insertAdjacentHTML("afterbegin", `<img src="${imagen}">`);
    return largo*ancho*altura;
}

console.log(`El Volumen del Ortoedro es: ${formulaVolumenOrtoedro(l,a,h)}`);