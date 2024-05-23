function miCalificacion(nota) {
    let calificacion = "";
    switch(nota){
        case 5:
            calificacion = "Aprobado";
            break;
        case 6:
            calificacion = "Bien";
            break;
        case 7:
        case 8:
            calificacion = "Notable";
            break;
        case 9:
            calificacion = "Sobresaliente";
            break;
        case 10:
            calificacion = "Matrícula!!";
            break;
        default:
            calificacion = "Suspendido";
            break;
    }
    return(calificacion);
}

let notaUsuario = Number(prompt("Introduce la nota que has sacado (del 1 al 10)"));

document.write("<p>Nota introducida por el usuario: " + notaUsuario + "</p>");

document.write("<p>La calificación es: " + miCalificacion(notaUsuario) + "</p>");