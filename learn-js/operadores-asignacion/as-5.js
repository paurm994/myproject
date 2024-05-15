// Declaramos la variable saldo con valor 100 y hacemos los calculos:

let saldo = 100;
document.write("<p>Inicializamos la variable 'saldo' con valor 100 -> " + saldo + "</p>");

// Le restamos el 10%
saldo -= 0.1 * saldo;
document.write("<p>Le restamos el 10% -> " + saldo + "</p>");

// Le restamos 15
saldo -= 15;
document.write("<p>Le restamos 15 -> " + saldo + "</p>");

// Le añadimos 12.5%
saldo += 0.125 * saldo;
document.write("<p>Le sumamos 12.5% -> " + saldo + "</p>");

// Lo dividimos entre 2
saldo /= 2;
document.write("<p>Lo dividimos entre 2 -> " + saldo + "</p>");

// Añadimos el 21%
saldo += 0.21 * saldo;
document.write("<p>Le sumamos 21% -> " + saldo + "</p>");

