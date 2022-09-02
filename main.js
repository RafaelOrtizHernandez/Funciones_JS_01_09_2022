

let A = Number(prompt("Ingrese el área de la base", 4));
let h = Number(prompt("Ingrese la altura", 2));

function formulaVolumenCono(areabase, altura, imagen="imagenes/cono.png"){
    document.body.insertAdjacentHTML("afterbegin", `<img src="${imagen}">`);
    return 1/3*(areabase)*altura;
}

console.log(`El Volumen del Cono es: ${formulaVolumenCono(A,h)}`);