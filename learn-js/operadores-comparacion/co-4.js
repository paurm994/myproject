// Comprueba si el string Hola, ¿qué tal?:

// Tiene más de 10 caracteres
// Empieza por H
// Tiene algún espacio
// No es nulo o undefined
// Tiene más de 5 caracteres

let frase = String("Hola, ¿qué tal?");
document.write("<p> La frase '" + frase + "' tiene " + frase.length + " caracteres </p>");

// Tiene más de 10 caracteres?
document.write("<p> Tiene más de 10 caracteres? -> " + (frase.length > 10) + "</p>");

// Empieza por H?
document.write("<p> Empieza por H? -> " + (frase.startsWith("H")) + "</p>");

// Tiene algún espacio?
document.write("<p> Contiene algún espacio? -> " + (frase.includes(" ")) + "</p>");

// No es null o undefined
document.write("<p> No es null o undefined -> " + (frase == null || frase == undefined) + "</p>");

// Tiene más de 5 carácteres?
document.write("<p> Tiene más de 5 caracteres? -> " + (frase.length > 5) + "</p>");