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

calcularDescuentoPorVolumen=function(subtotal,cantidad){
    let porcentajeDescuento=0;
    if(cantidad>=12){
        porcentajeDescuento=0.5;
    }else if(cantidad>=6&&cantidad<=11){
        porcentajeDescuento=0.4;
    }else if(cantidad>=3&&cantidad<=5){
        porcentajeDescuento=0.3;
    }else{
        //menos de tres productos no tiene descuento
        porcentajeDescuento=0.0;
    }
    let valorDescuento=subtotal*porcentajeDescuento;
    return valorDescuento;
}