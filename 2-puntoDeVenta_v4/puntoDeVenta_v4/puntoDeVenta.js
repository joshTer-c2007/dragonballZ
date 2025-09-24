calcularValorTotal = function () {
    //variables para recuperar los valores de las cajas de texto
    let nombreProducto;
    let precioProducto; // SE UTILIZA PARA RECUPERAR EL PRECIO COMO FLOAT
    let cantidad; // SE UTILIZA PARA RECUPERAR LA CANTIDAD COMO INT
    let porcentajeDescuento;
    nombreProducto=recuperarTexto("txtProducto");
    precioProducto=recuperarFloat("txtPrecio");
    cantidad=recuperarInt("txtCantidad");
    porcentajeDescuento=recuperarInt("txtPorcentajeDescuento");

    //variables para almacenar los retornos de las funciones
    let valorSubtotal;
    let valorDescuento;
    let valorIVA;
    let valorTotal;
    let operacion;

    valorSubtotal=calcularSubtotal(precioProducto,cantidad);
    mostrarTexto("lblSubtotal",valorSubtotal);

    valorDescuento=calcularValorDescuento(valorSubtotal,porcentajeDescuento);
    mostrarTexto("lblDescuento",valorDescuento);

    operacion= valorSubtotal-valorDescuento;
    valorIVA=calcularIVA(operacion);
    mostrarTexto("lblValorIVA",valorIVA);

    valorTotal=calcularTotal(valorSubtotal,valorDescuento,valorIVA);
    mostrarTexto("lblTotal",valorTotal);

    // Mostrar resumen en el componente lblResumen
    let resumen = "Producto: " + nombreProducto + 
                  " | Precio: $" + precioProducto.toFixed(2) +
                  " | Cantidad: " + cantidad + 
                  " | Subtotal: $" + valorSubtotal.toFixed(2) + 
                  " | Descuento: $" + valorDescuento.toFixed(2) +
                  " | IVA: $" + valorIVA.toFixed(2) +
                  " | Total: $" + valorTotal.toFixed(2);
    mostrarTexto("lblResumen", resumen);


            
   

}
limpiar = function () {
    // Limpiar cajas de texto (asumiendo nombres de IDs)
    mostrarTexto("txtProducto", "");
    mostrarTexto("txtPrecio", 0.0);
    mostrarTexto("txtCantidad", 0);
    mostrarTexto("txtPorcentajeDescuento", 0);

    // Limpiar resultados
    mostrarTexto("lblSubtotal", 0.0);
    mostrarTexto("lblDescuento", 0.0);
    mostrarTexto("lblValorIVA", 0.0);
    mostrarTexto("lblTotal", 0.0);
    mostrarTexto("lblResumen", "");
}
