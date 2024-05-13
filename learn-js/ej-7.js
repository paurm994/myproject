let numeroUsuario = parseInt(prompt("Introduce un número entre 1 y 99"))

let unidades, decenas;

unidades = numeroUsuario % 10;
decenas = parseInt(numeroUsuario / 10)

document.write("En el número " + numeroUsuario + " hay " + decenas + " decenas y " + unidades + " unidades.")