let numeroUsuario = parseInt(prompt("Introduce un número"));

let resto = numeroUsuario % 2;
let par = resto == 0;

document.write("¿El número es par? ->> " + par);