let perimetroEnunciado = 0;
let ladoEnunciado = 8;

perimetroEnunciado = ladoEnunciado * 4;
document.write("<p>El perímetro del cuadrado con lado de " + ladoEnunciado + " es de: " + perimetroEnunciado + "</p>");

let perimetro = 0;
let lado = Number(prompt("Introduce la longitud del lado del cuadrado que quieres calcular"));

perimetro = lado * 4;
document.write("<p>El perímetro del cuadrado con lado de " + lado + " (dato introducido por el usuario) es de: " + perimetro + "</p>");
