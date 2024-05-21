let cadena1 = "";
document.write("<p>La cadena1 es: " + cadena1 + "</p>");
document.write("<p>La cadena cadena1 tiene longitud: " + cadena1.length + "</p>");

let cadena2 = "Hola";
document.write("<p>La cadena2 es: " + cadena2 + "</p>");
document.write("<p>La cadena cadena2 tiene longitud: " + cadena2.length + "</p>");

let cadena3 = "1+1=2";
document.write("<p>La cadena3 es: " + cadena3 + "</p>");
document.write("<p>La cadena cadena3 tiene longitud: " + cadena3.length + "</p>");

const diasDeLaSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
const diaDeLaSemana = diasDeLaSemana[new Date().getDay()];

let cadena4 = "Hoy es " + diaDeLaSemana;
document.write("<p>La cadena4 es: " + cadena4 + "</p>");
document.write("<p>La cadena cadena4 tiene longitud: " + cadena4.length + "</p>");
