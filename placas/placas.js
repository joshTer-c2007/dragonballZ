
function validarPlaca() {
    let placa = recuperarTexto("txtPlaca").trim();   // usando utilitario
    let erroresEstructura = validarEstructura(placa);

    if (erroresEstructura === null) {
        mostrarTexto("resultado", "✅ ESTRUCTURA VÁLIDA");

        let prov = obtenerProvincia(placa);
        if (prov) {
            mostrarTexto("provincia", "Provincia: " + prov);
        } else {
            mostrarTexto("provincia", "❌ Provincia incorrecta");
        }

        let tipo = obtenerTipoVehiculo(placa);
        if (tipo) {
            mostrarTexto("tipoVehiculo", "Tipo de vehículo: " + tipo);
        } else {
            mostrarTexto("tipoVehiculo", "❌ Tipo de vehículo incorrecto");
        }

    } else {
        mostrarTexto("resultado", "❌ ESTRUCTURA INCORRECTA: " + erroresEstructura);
        mostrarTexto("provincia", "");
        mostrarTexto("tipoVehiculo", "");
    }
}
