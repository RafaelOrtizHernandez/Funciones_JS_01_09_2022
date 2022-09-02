

let A = Number(prompt("Ingrese el área de la base", 4));
let h = Number(prompt("Ingrese la altura", 2));

function formulaVolumenPrisma(areabase, altura, imagen="imagenes/prisma.png"){
    document.body.insertAdjacentHTML("afterbegin", `<img src="${imagen}">`);
    return areabase*altura;
}

console.log(`El Volumen del Prisma es: ${formulaVolumenPrisma(A,h)}`);