

let r = Number(prompt("Ingrese el radio de la base", 4));
let h = Number(prompt("Ingrese la altura", 2));

function formulaVolumenCilindro(radiobase, altura, imagen="imagenes/cilindro.png"){
    document.body.insertAdjacentHTML("afterbegin", `<img src="${imagen}">`);
    return Math.PI*Math.pow(radiobase,2)*altura;
}

console.log(`El Volumen del Cilindro es: ${formulaVolumenCilindro(r,h)}`);