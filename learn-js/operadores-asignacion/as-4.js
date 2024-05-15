// Asigna el valor 15 a una variable y y luego divídela por 3, 5, 7, 10. 
// ¿Cómo sabes en qué casos la división es exacta?

let y = 15;
document.write("<p>Inicializamos la variable en 15</p>")


// Dividimos y comprobamos si el resultado es exacto
// Dividimos entre 3
if (y % 3 === 0){
    document.write("<p> El resultado de dividir entre 3 es exacto</p>")
} else {
    document.write("<p> El resultado de dividir entre 3 NO es exacto</p>")
}

// Dividimos entre 5
if (y % 5 === 0){
    document.write("<p> El resultado de dividir entre 5 es exacto</p>")
} else {
    document.write("<p> El resultado de dividir entre 5 NO es exacto</p>")
}

// Dividimos entre 7
if (y % 7 === 0){
    document.write("<p> El resultado de dividir entre 7 es exacto</p>")
} else {
    document.write("<p> El resultado de dividir entre 7 NO es exacto</p>")
}

// Dividimos entre 10
if (y % 10 === 0){
    document.write("<p> El resultado de dividir entre 10 es exacto</p>")
} else {
    document.write("<p> El resultado de dividir entre 10 NO es exacto</p>")
}