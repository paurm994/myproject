let num1 = Number(prompt("Introduce el primer número"));
let num2 = Number(prompt("Introduce el segundo número"));

document.write("num1 = " + num1 + "<br>num2 = " + num2 + "<br>");


let temp = num1;
num1 = num2;
num2 = temp;

document.write("Ahora intercambiamos los valores, usando el mismo document.write que arriba:<br>");
document.write("num1 = " + num1 + "<br>num2 = " + num2 + "<br>");
