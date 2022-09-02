

let r = Number(prompt("Ingrese el valor del radio", 4));
let g = Number(prompt("Ingrese el valor de la generatriz", 5));
function formulaAreaLCono(radio, generatiz, imagen="imagenes/cono.png"){
    document.body.insertAdjacentHTML("afterbegin", `<img src="${imagen}">`);
    return (Math.PI*radio)*generatiz;
}

console.log(`El Area Lateral del Cono es: ${formulaAreaLCono(r, g)}`);