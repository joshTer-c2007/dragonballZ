let esNuevo = false;

let empleados = [
    { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
    { cedula: "0914632123", nombre: "Luisa", apellido: "Gonzalez", sueldo: 900.0 },
    { cedula: "1750771435", nombre: "Carmen", apellido: "Toasa", sueldo: 800.0 }
]

mostrarOpcionEmpleado = function () {
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
    mostrarEmpleados();
}

mostrarOpcionRol = function () {
    mostrarComponente("divRol");
    ocultarComponente("divEmpleado");
    ocultarComponente("divResumen");
}

mostrarOpcionResumen = function () {
    mostrarComponente("divResumen");
    ocultarComponente("divEmpleado");
    ocultarComponente("divRol");
}

mostrarEmpleados = function () {
    let cmpTabla = document.getElementById("tablaEmpleados");
    let contenidoTabla = "<table><tr>" +
        "<th>CEDULA</th>" +
        "<th>NOMBRE</th>" +
        "<th>APELLIDO</th>" +
        "<th>SUELDO</th>" +
        "</tr>";
    let elementoCliente;
    for (let i = 0; i < empleados.length; i++) {
        elementoCliente = empleados[i];
        contenidoTabla +=
            "<tr><td>" + elementoCliente.cedula + "</td>" +
            "<td>" + elementoCliente.nombre + "</td>" +
            "<td>" + elementoCliente.apellido + "</td>" +
            "<td>" + elementoCliente.sueldo + "</td>" +
            "</tr>"
    }
    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
}

ejecutarNuevo = function () {
    habilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar");
    if (esNuevo == true) {
        return true;
    } else {
        return false;
    }
}

buscarEmpleado = function (cedula) {
    let elementoCliente;
    let empleadoEncontrado;
    for (i = 0; i < empleados.length; i++) {
        elementoCliente = empleados[i];
        if (elementoCliente.cedula == cedula) {
            empleadoEncontrado = elementoCliente;
        }
    }
    return empleadoEncontrado;
}

agergarEmpleado = function (empleado) {
    let resultado;
    resultado = buscarCliente(empleado.cedula);
    if (resultado == null) {
        empleados.push(empleado);
    } else {
        alert("ya existe un usuario con la siguiente cedula: " + empleado.cedula);
    }
}

guardarCambios = function () {
    let cambios;
    let hayErrores = false;
    let digitos = recuperarTexto("txtCedula");
    if (digitos <= 10) {
        mostrarTexto("lblErrorCedula", " DEBEN SER MENOS DE 10 DIGITOS");
        hayErrores = true;
    } else {
        mostrarTexto("lblErrorCedula", " ");
    }
    let nombreMayus = recuperarTexto("txtNombre"); //A=65 Z=90
    if (nombreMayus >= 65 || nombreMayus <= 90) {
        mostrarTexto("lblErrorNombre", "TODAS LAS LETRAS DEBEN ESTAR CON MAYUSCULA");
        hayErrores = true;
    } else {
        mostrarTexto("lblErrorNombre", " ");
    }
    let apellidoMayus = recuperarTexto("txtApellido"); //A=65 Z=90
    if (apellidoMayus >= 65 || apellidoMayus <= 90) {
        mostrarTexto("lblErrorApellido", "TODAS LAS LETRAS DEBEN ESTAR CON MAYUSCULA");
        hayErrores = true;
    } else {
        mostrarTexto("lblErrorApellido", " ");
    }
    let sueldoEmpleado = recuperarFloat("txtSueldo");
    if (sueldoEmpleado >= 400 && sueldoEmpleado <= 5000) {
        mostrarTexto("lblErrorSueldo", "EL SUELDO DEBE SER MINIMO 400 Y MAXIMO 5000");
        hayErrores = true;
    } else {
        mostrarTexto("lblErrorSueldo", " ");
    }

    if (esNuevo == true) {
        let empleadoNuevo = {};
        empleadoNuevo.cedula = digitos;
        empleadoNuevo.nombre = nombreMayus;
        empleadoNuevo.apellido = apellidoMayus;
        empleadoNuevo.sueldo = sueldoEmpleado;
        agergarEmpleado(empleadoNuevo);
    } else {
        return false;
    }

    if (agergarEmpleado) {
        alert("EMPLEADO GUARDADO CORRECTAMENTE, BIENVENIDO");
    } else {
        alert("YA XISTE UN EMPLEADO CON ESTA CEDULA", empleados.cedula);
    }
    mostrarEmpleados();
    cambios = buscarEmpleado(datosEmpleados);
    let datosEmpleados = {
        cedula: "1750771435",
        nombre: "Carmen",
        apellido: "Toasa",
        sueldo: "800.0"
    }
    if (cambios) {
        alert("EMPLEO GUARDADO CORRECTAMENTE");
        esNuevo = false;
        mostrarEmpleados();
    } else {
        alert("YA EXISTE UN EMPLEADO CON LA CEDULA", empleados.cedula);
    }
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
}

ejecutarBusqueda = function () {
    let digitos = recuperarTexto("txtBusquedaCedula");
    let respuesta = buscarEmpleado(digitos);
    if (respuesta == null) {
        alert("cliente no encontrado");
    } else {
        mostrarTextoEnCaja("txtCedula", respuesta.cedula);
        habilitarComponente("txtNombre");
        habilitarComponente("txtApellido");
        habilitarComponente("txtSueldo");
        deshabilitarComponente("txtCedula");
    }

}

limpiar=function(){
    mostrarTexto("txtCedula"," ");
    mostrarTexto("txtNombre"," ");
    mostrarTexto("txtApellido"," ");
    mostrarTexto("txtSueldo"," 0.0");
}

buscarPorRol=function(){
    let rol=recuperarTexto("divRol");
    if(!rol){
        alert("Por favor, ingrese un valor de Rol para buscar");
        return;
    }
    let empleado=buscarEmpleado(rol);
    if(empleado){
        let nombreCompleto=empleado.nombre+" "+empleado.apellido;
        mostrarComponente(empleado.cedula,empleado.sueldo,nombreCompleto);
        console.log("EMPLEADO ENCONTRADO:"+nombreCompleto+"CEDULA:"+empleado.cedula);    
    }else{
        alert("ERROR: El empleado con el Rol Ingresado no existe");
    }
}

calcularAporteEmpleado=function(sueldo){
    //9.45% = 0.0945
    let porcentajeAporte=0.0945;
    let aporte=sueldo*porcentajeAporte;
    return parseFloat(aporte.toFixed(2));
}

calcularValorAPagar=function(sueldo,aporteIess,descuento){
    let valorAPagar=sueldo-aporteIess-descuento;
    return parseFloat(valorAPagar.toFixed(2));
}

calcularRol=function(){
    let sueldo=recuperarFloat("infoSueldo");
    let descuentos=recuperarFloat("txtDescuentos");
    if(isNaN(sueldo)||sueldo<=0){
        alert("ERROR: El sueldo no es valido o no ha sido recargado");
        return;
    }
    if(isNaN(descuentos)){
        alert("ERROR: El valor de los descuentos no puede ser negativo");
        return;
    }
    if(descuentos<0){
        alert("ERROR: los descuentos no pueden ser negativos");
        return;
    }
    if(descuentos>sueldo){
        alert("ERROR: los descuentos"+descuentos.toFixed(2)+"no pueden ser mayores al sueldo"+sueldo.toFixed(2));
    }

    let aporteIESS=calcularAporteEmpleado(sueldo);
    mostrarComponente("infoSueldo",aporteIESS);

    let valorAPagar=calcularValorAPagar(sueldo,aporteIESS,descuentos);
    mostrarComponente("txtDescuentos",valorAPagar);
}
