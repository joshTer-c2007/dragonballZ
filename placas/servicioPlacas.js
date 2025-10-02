const { esMayuscula, esDigito, esGuion } = require('./utilitariosCadenas');

function validarEstructura(placa) {
    let errores = [];

    if (placa.length < 7 || placa.length > 8) {
        errores.push("La placa debe tener 7 u 8 caracteres.");
    }

    if (!esMayuscula(placa[0])) errores.push("El primer carácter debe ser una letra mayúscula.");
    if (!esMayuscula(placa[1])) errores.push("El segundo carácter debe ser una letra mayúscula.");
    if (!esMayuscula(placa[2])) errores.push("El tercer carácter debe ser una letra mayúscula.");
    if (!esGuion(placa[3])) errores.push("El cuarto carácter debe ser un guion (-).");
    if (!esDigito(placa[4])) errores.push("El quinto carácter debe ser un dígito.");
    if (!esDigito(placa[5])) errores.push("El sexto carácter debe ser un dígito.");
    if (!esDigito(placa[6])) errores.push("El séptimo carácter debe ser un dígito.");

    if (placa.length === 8 && !esDigito(placa[7])) {
        errores.push("El octavo carácter debe ser un dígito.");
    }

    return errores.length > 0 ? errores.join(" ") : null;
}

function obtenerProvincia(placa) {
    if (!placa || placa.length < 1) return null;

    const provincias = {
        A: "Azuay",
        B: "Bolívar",
        C: "Carchi",
        E: "Esmeraldas",
        G: "Guayas",
        I: "Imbabura",
        L: "Loja",
        M: "Manabí",
        N: "Napo",
        O: "El Oro",
        P: "Pichincha",
        R: "Los Ríos",
        S: "Sucumbíos",
        T: "Tungurahua",
        U: "Cañar",
        V: "Morona Santiago",
        X: "Cotopaxi",
        Y: "Pastaza",
        Z: "Zamora Chinchipe"
    };

    let primeraLetra = placa[0].toUpperCase();
    return provincias[primeraLetra] || null;
}

function obtenerTipoVehiculo(placa) {
    if (!placa || placa.length < 2) return null;

    const tipos = {
        A: "Vehículo comercial",
        Z: "Vehículo gubernamental",
        E: "Vehículo del Estado",
        M: "Vehículo municipal",
        P: "Vehículo particular",
        S: "Vehículo de servicio público"
    };

    let segundaLetra = placa[1].toUpperCase();
    return tipos[segundaLetra] || null;
}

obtenerDiaPicoYPlaca = function(placa) {
    let ultimoCaracter = placa.charAt(placa.length - 1);

    if (isNaN(ultimoCaracter)) {
        mostrarTexto("resultado", "❌ Placa no válida (último caracter debe ser un número)");
        mostrarImagen("imgResultado", "imagenes/error.png");
        return;
    }

    let digito = parseInt(ultimoCaracter);
    let dia = "";
    let imagen = "";

    switch (digito) {
        case 1:
        case 2:
            dia = "Lunes";
            imagen = "imagenes/lunes.png";
            break;
        case 3:
        case 4:
            dia = "Martes";
            imagen = "imagenes/martes.png";
            break;
        case 5:
        case 6:
            dia = "Miércoles";
            imagen = "imagenes/miercoles.png";
            break;
        case 7:
        case 8:
            dia = "Jueves";
            imagen = "imagenes/jueves.png";
            break;
        case 9:
        case 0:
            dia = "Viernes";
            imagen = "imagenes/viernes.png";
            break;
        default:
            dia = "Número inválido";
            imagen = "imagenes/error.png";
    }

    // Mostrar el resultado en la página
    mostrarTexto("resultado", "🚗 Día de Pico y Placa: " + dia);
    mostrarImagen("imgResultado", imagen);
}

