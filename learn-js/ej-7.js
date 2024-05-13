// Pedimos un numero al usuario y lo convertimos a entero, descartando
// posibles decimales.
let numeroUsuario = parseInt(prompt("Introduce un número entre 1 y 99"))

// Declaramos las variables que usaremos, de momento vacías.
let unidades, decenas;

// Asignamos valor a las variables vacías.
// Para las unidades hacemos el  resto de la division entre 10.
unidades = numeroUsuario % 10;
// Para las decenas, convertimos a entero la división del número del usuario
// entre 10, para quedarnos con el número de decenas.
decenas = parseInt(numeroUsuario / 10)

// Mostramos el resultado en una línea de texto en el documento.
document.write("En el número " + numeroUsuario + " hay " + decenas + " decenas y " + unidades + " unidades.")