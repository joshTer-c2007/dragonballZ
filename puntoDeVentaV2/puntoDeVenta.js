calcularValorTotal = function () {
    // 1. EJECUTAR VALIDACIONES
    // La doble negación (&&) asegura que TODAS deben ser true
    let productoOK = esProductoValido();
    let cantidadOK = esCantidadValida();
    let precioOK = esPrecioValido();

    // Condición para ejecutar cálculos: si las 3 validaciones son verdaderas
    if (productoOK && cantidadOK && precioOK) {
        // variables para recuperar los valores de las cajas de texto
        let nombreProducto;
        let precioProducto; 
        let cantidad; 
        
        // Recuperar valores (ya validados, pero se recuperan para los cálculos)
        nombreProducto = recuperarTexto("txtProducto");
        precioProducto = recuperarFloat("txtPrecio");
        cantidad = recuperarInt("txtCantidad");
        
        // variables para almacenar los retornos de las funciones
        let valorSubtotal;
        let valorDescuento;
        let valorIVA;
        let valorTotal;
        let operacion;

        // Cálculos
        valorSubtotal = calcularSubtotal(precioProducto, cantidad);
        mostrarTexto("lblSubtotal", valorSubtotal.toFixed(2));

        // 2. MODIFICACIÓN REQUERIDA: Invocar a calcularDescuentoPorVolumen
        // Este valor devuelto YA es el MONTO del descuento
        valorDescuento = calcularDescuentoPorVolumen(valorSubtotal, cantidad); 
        mostrarTexto("lblDescuento", valorDescuento.toFixed(2));

        operacion = valorSubtotal - valorDescuento;
        valorIVA = calcularIVA(operacion);
        mostrarTexto("lblValorIVA", valorIVA.toFixed(2));

        valorTotal = calcularTotal(valorSubtotal, valorDescuento, valorIVA);
        mostrarTexto("lblTotal", valorTotal.toFixed(2));

        // Mostrar resumen en el componente lblResumen
        let resumen = "Producto: " + nombreProducto + 
                      " | Precio: $" + precioProducto.toFixed(2) +
                      " | Cantidad: " + cantidad + 
                      " | Subtotal: $" + valorSubtotal.toFixed(2) + 
                      " | Descuento: $" + valorDescuento.toFixed(2) +
                      " | IVA: $" + valorIVA.toFixed(2) +
                      " | Total: $" + valorTotal.toFixed(2);
        mostrarTexto("lblResumen", resumen);
    } else {
        // Opcional: Si la validación falla, se podría limpiar el resumen o notificar al usuario.
        mostrarTexto("lblResumen", "¡ERROR! Por favor, corrija los campos marcados.");
        
        // Asegurar que los campos de resultado están en 0.0 si la validación falla.
        mostrarTexto("lblSubtotal", "0.0");
        mostrarTexto("lblDescuento", "0.0");
        mostrarTexto("lblValorIVA", "0.0");
        mostrarTexto("lblTotal", "0.0");
    }
}

// La función limpiar se mantiene igual
limpiar = function () {
    // Limpiar cajas de texto (usando mostrarTextoEnCaja para inputs)
    mostrarTextoEnCaja("txtProducto", "");
    mostrarTextoEnCaja("txtPrecio", "0");
    mostrarTextoEnCaja("txtCantidad", "0");
    
    // El campo de porcentaje de descuento ya no existe en el HTML final, pero se limpia por si acaso en una versión anterior
    // mostrarTextoEnCaja("txtPorcentajeDescuento", "0"); 

    // Limpiar mensajes de error
    mostrarTexto("lblProducto", "");
    mostrarTexto("lblCantidad", "");
    mostrarTexto("lblPrecio", "");

    // Limpiar resultados
    mostrarTexto("lblSubtotal", "0.0");
    mostrarTexto("lblDescuento", "0.0");
    mostrarTexto("lblValorIVA", "0.0");
    mostrarTexto("lblTotal", "0.0");
    mostrarTexto("lblResumen", "");
}
const MSG_OBLIGATORIO = "*CAMPO OBLIGATORIO";

// -----------------------------------------------------------------
// VALIDACIONES
// -----------------------------------------------------------------

/**
 * Valida el nombre del producto.
 * Condición: Obligatorio y no más de 10 caracteres.
 */
esProductoValido = function () {
    let nombreProducto = recuperarTexto("txtProducto");
    let esValido = true;

    if (nombreProducto == "") {
        mostrarTexto("lblProducto", MSG_OBLIGATORIO);
        esValido = false;
    } else if (nombreProducto.length > 10) {
        mostrarTexto("lblProducto", "*Máximo 10 caracteres");
        esValido = false;
    } else {
        // Limpiar el mensaje de error si es válido
        mostrarTexto("lblProducto", "");
    }
    return esValido;
}

/**
 * Valida la cantidad.
 * Condición: Obligatorio (valor recuperado) y un número entero entre 0 y 100.
 */
esCantidadValida = function () {
    let cantidad = recuperarInt("txtCantidad");
    let esValido = true;

    if (isNaN(cantidad)) {
        mostrarTexto("lblCantidad", MSG_OBLIGATORIO);
        esValido = false;
    } else if (cantidad <= 0 || cantidad > 100) {
        mostrarTexto("lblCantidad", "*Debe ser un entero entre 1 y 100");
        esValido = false;
    } else {
        // Limpiar el mensaje de error si es válido
        mostrarTexto("lblCantidad", "");
    }
    return esValido;
}

/**
 * Valida el precio.
 * Condición: Obligatorio (valor recuperado) y un número entre 0 y 50.
 */
esPrecioValido = function () {
    let precioProducto = recuperarFloat("txtPrecio");
    let esValido = true;

    if (isNaN(precioProducto)) {
        mostrarTexto("lblPrecio", MSG_OBLIGATORIO);
        esValido = false;
    } else if (precioProducto <= 0 || precioProducto > 50) {
        mostrarTexto("lblPrecio", "*Debe ser un número entre 0 y 50");
        esValido = false;
    } else {
        // Limpiar el mensaje de error si es válido
        mostrarTexto("lblPrecio", "");
    }
    return esValido;
}