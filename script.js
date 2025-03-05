function calcularDescuento() {
    let monto = parseFloat(document.getElementById("monto").value);
    let descuento = 0;
    let mensaje = "";
    if (monto >= 1000) {
        descuento = 15;
    } else if (monto >= 500 && monto <= 999) {
        descuento = 10;
    } else {
        descuento = 5;
    }
    let totalDescuento = (monto * descuento) / 100;
    let totalPagar = monto - totalDescuento;
    mensaje = `Descuento aplicado: ${descuento}% <br>
               Ahorro: $${totalDescuento.toFixed(2)} <br>
               Total a pagar: $${totalPagar.toFixed(2)}`;
    document.getElementById("resultado").innerHTML = mensaje;
 }