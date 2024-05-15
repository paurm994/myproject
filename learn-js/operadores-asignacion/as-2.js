let total = 50;
document.write("<p>El valor inicial de la variable es: " + total + "</p>");

// Le restamos 10
total -= 10;
document.write("<p>Le restamos 10 -> " + total + "</p>");

// Le sumamos el 21%
total += 0.21 * total;
document.write("<p>Le sumamos el 21% -> " + total + "</p>");

// Añadir 20 más el 10% de 20
total += 20 + (0.1 * 20);
document.write("<p>Añadimos 20 más el 10% de 20 (que seria añadir 20 + 2) -> " + total + "</p>");
