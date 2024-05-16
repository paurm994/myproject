// Determina si es el caso que una variable numérica entre 5 y 10 cumple:

// Es número positivo
// Tiene hasta 2 dígitos
// Es número par
// Es número impar
// Es divisible por 3

let numero = 8;
document.write("<p>El número es: " + numero + "</p>")

// Es número positivo?
document.write("<p>Es un número positivo? -> " + (numero > 0) + "</p>")

// Tiene hasta 2 dígitos?
document.write("<p>Tiene hasta 2 dígitos? -> " + (numero >= 0 && numero <= 99) + "</p>")

// Es número par?
document.write("<p>Es un número par? -> " + (numero % 2 === 0) + "</p>")

// Es número impar?
document.write("<p>Es un número impar? -> " + (numero % 2 !== 0) + "</p>")

// Es divisibe por 3?
document.write("<p>Es divisible entre 3? -> " + (numero % 3 === 0) + "</p>")


