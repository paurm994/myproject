let kilometros = Number(prompt("Introduce los kilómetros recorridos"));
let litros = Number(prompt("Introduce los litros de gasolina que has gastado"));

let consumo = litros / kilometros;

document.write("El consumo es de: " + consumo + " l/km");