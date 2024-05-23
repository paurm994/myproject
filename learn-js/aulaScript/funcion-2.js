function esPar(num){
    return(num % 2 == 0);
}

const numeroUsuario = parseInt(prompt("Dame un número y te digo true si es par y false si no lo es"));

document.write("<p>El número del usuario es: " + numeroUsuario + "</p>");

document.write("<p>El número es par?: " + esPar(numeroUsuario) + "</p>");