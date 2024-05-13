// Pedimos un número al usuario y lo convertimos a entero
let numeroUsuario = parseInt(prompt("Introduce un número"));

// Calculamos el resto de la división. Si es 0 será par y sino, impar.
let resto = numeroUsuario % 2;
// Comprobamos si el resto es 0 (en cuyo caso será true) o no (será false)
let par = resto == 0;

// Escribimos el resultado en el documento
document.write("¿El número es par? ->> " + par);