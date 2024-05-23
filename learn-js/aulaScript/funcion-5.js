function precioConImpuestos(precio, impuesto){
    let imp = impuesto / 100;
    if (precio > 100){
        let precioConDescuento = precio - (precio * 0.1);
        let precioFinal = precioConDescuento + (precioConDescuento * imp);
        return(precioFinal);
    } else {
        precio = Number(precio);
        imp = Number(imp);
        let precioFinal = precio + (precio * imp);
        return(precioFinal);
    }
}

let precioUsuario = Number(prompt("Introduce el precio"));
let impuestoUsuario = Number(prompt("Introduce el impuesto"));

document.write("<p>El precio final a pagar es: " + precioConImpuestos(precioUsuario, impuestoUsuario));