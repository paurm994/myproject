// Este script coge un boton del documento html, y le cambia el texto aleatoriamente
// cada vez que es clikado (dentro de los valores del array 'textos')
document.addEventListener("DOMContentLoaded", function () {
    let boton = document.getElementById("miBoton");
    let textos = ["Clicked!", "Again!", "Otrotexto!", "Blabla!"];
    function textoAleatorio(textos){
        let indiceAleatorio = Math.floor(Math.random() * textos.length);
        return textos[indiceAleatorio];
    }


    boton.addEventListener("click", function () {
        boton.innerHTML = textoAleatorio(textos);
        // boton.innerHTML = "Clicked!"
    })
})