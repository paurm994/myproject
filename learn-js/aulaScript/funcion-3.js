function esMultiplo(mult, divi) {
    return(mult % divi == 0);
}

let num1 = parseInt(prompt("Introduce el primer número"));
let num2 = parseInt(prompt("Introduce el segundo número"));

document.write("<p>El número " + num1 + " es múltiplo de " + num2 + "? " + esMultiplo(num1, num2) + "</p>");