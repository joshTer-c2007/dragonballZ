calcularValorDescuento=function(monto,porcentajeDescuento){
    let operacion=monto*porcentajeDescuento/100;
    let resultado=operacion;
    return resultado;
}

calcularIVA = function (valor) {
    let tasaIVA = 0.12; // 12%
    return valor * tasaIVA;
}


calcularSubtotal=function(precio,cantidad){
    let operacion=precio*cantidad;
    let resultado=operacion;
    return resultado;
}

calcularTotal=function(subtotal,descuento,iva){
    let operacion=subtotal-descuento+iva;
    let resultado=operacion;
    return resultado;
}