// Pedimos al usuario el número de comensales
let numeroComensales = Number(prompt("Introduce el número de comensales"));

let gramosPatata = numeroComensales * 200; // Calculamos los gramos de patata por comensal
let kilosPatata = gramosPatata / 1000; // Convertimos los gramos de patata a kilos de patata

let huevos = kilosPatata * 5; // Calculamos la cantidad de huevos según kilos de patata

let gramosCebolla = kilosPatata * 300; // Calculamos la cantidad de gramos de cebolla según los kilos de patata

// Mostramos resultado escrito en el documento
document.write("Para " + numeroComensales + " comensales, utilizar: <ul><li>" + kilosPatata + "kg de patatas</li><li>" + huevos + " huevos</li><li> " + gramosCebolla + "gr de cebolla.</li></ul>");