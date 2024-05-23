function repetirLetra(letra, numero) {
    let cadena = "";
    for (i=0; i < numero; i++) {
        cadena += letra;
    }
    return(cadena);
}

let letraUsuario = prompt("Introduce una letra");
let numeroUsuario = prompt("Introduce un número");

document.write("<p>La letra '" + letraUsuario + "' repetida '" + numeroUsuario + "' veces: '" + repetirLetra(letraUsuario, numeroUsuario) + "' </p>");
