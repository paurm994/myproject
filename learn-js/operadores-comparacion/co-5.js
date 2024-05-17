let dia = String(prompt("Introduce un día de la semana, con la inicial en mayúscula y sin acentos"));

document.write("<p>El día seleccionado es: " + dia + "</p>");

if (dia === "Sabado" || dia === "Domingo"){
    document.write("Es fin de semana");
} else if (dia === "Lunes" || dia === "Jueves") {
    document.write("Es Lunes o Jueves");
} else if (dia === "Viernes") {
    document.write("Es Viernes");
} else if (dia === "Martes") {
    document.write("No lectivo");
} else {
    document.write("Es día laboral");
}