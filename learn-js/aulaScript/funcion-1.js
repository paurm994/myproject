function suma(num1, num2){
    return(num1 + num2);
}

let num1 = parseInt(prompt("Introduce el primer número"));
let num2 = parseInt(prompt("Introduce el segundo número"));

document.write("<p>El primer número es: " + num1 + "</p>");
document.write("<p>El segundo número es: " + num2 + "</p>");

document.write("<p>Los números sumados dan: " + suma(num1, num2) + "</p>");