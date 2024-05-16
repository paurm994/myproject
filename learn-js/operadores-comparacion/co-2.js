let edad = Number(29);

document.write("<p> La edad del sujeto es: " + edad + "</p>");


// Es mayor que 18?
document.write("<p>Es mayor que 18? -> " + (edad > 18) + "</p>");

// Es menor que 18?
document.write("<p>Es menor que 18? -> " + (edad < 18) + "</p>");

// Está entre 25 y 35?
document.write("<p>Está entre 25 y 35? -> " + (edad > 25 && edad < 35) + "</p>");

// No es mayor de 65?
document.write("<p>No es mayor de 65? -> " + !(edad > 65) + "</p>");

// Tiene entre 13 y 24 años cumplidos?
document.write("<p>Tiene entre 13 y 24 años cumplidos? -> " + (edad > 13 && edad < 24) + "</p>");