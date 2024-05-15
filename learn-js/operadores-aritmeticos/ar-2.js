// Como calculamos el área de un triángulo:
// A = (base * altura)= / 2

let areaEnunciado = 0;
let baseEnunciado = 6;
let alturaEnunciado = 4;

areaEnunciado = (baseEnunciado * alturaEnunciado) / 2;
document.write("<p>El área de un triángulo que tiene base: " + baseEnunciado + " y altura: " + alturaEnunciado + " es de: " + areaEnunciado + "</p>");

let area = 0;
let base = Number(prompt("Dime la base del triángulo"));
let altura = Number(prompt("Dime la altura del triángulo"));

area = (base * altura) / 2;
document.write("<p>El área del triángulo que me has dado, que tiene base: " + base + " y altura: " + altura + ", es de: " + area + "</p>");

