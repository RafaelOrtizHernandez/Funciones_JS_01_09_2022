

let D = Number(prompt("Ingrese el valor de la Diagonal Mayor", 4));
let d = Number(prompt("Ingrese el valor de la Diagonal menor", 5));
function formulaAreaRombo(DMayor, dmenor, imagen="imagenes/rombo.png"){
    document.body.insertAdjacentHTML("afterbegin", `<img src="${imagen}">`);
    return (DMayor * dmenor)/2;
}
console.log(`El Area del Rombo es: ${formulaAreaRombo(D, d)}`);
