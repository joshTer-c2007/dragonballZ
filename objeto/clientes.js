let clientes = [
    { cedula: "123213", nombre: "Juan", edad: "20" },
    { cedula: "222222", nombre: "Jhosep", edad: "18" },
    { cedula: "777777", nombre: "Tiara", edad: "16" }
];

ejecutarBusqueda=function(){
    let valorCedula=recuperarTexto("busqueda");
    let respuesta=buscarCliente(valorCedula);
    if(respuesta==null){
        alert("cliente no encontrado");
    }else{
        mostrarTextoEnCaja("txtCedula",respuesta.cedula);
        mostrarTextoEnCaja("txtNombre",respuesta.nombre);
        mostrarTextoEnCaja("txtEdad",respuesta.edad);

    }
}

guardarCambios=function(){
      let valorCedula = recuperarTexto("txtCedula");
    let valorNombre = recuperarTexto("txtNombre");
    let valorEdad = recuperarFloat("txtEdad");

    let datosCliente = {};
    datosCliente.cedula = valorCedula;
    datosCliente.nombre = valorNombre;
    datosCliente.edad = valorEdad;

    modificarCliente(datosCliente);
    mostrarClientes();
}

modificarCliente=function(cliente){
    let clienteEncontrado=buscarCliente(cliente.cedula);
    if(clienteEncontrado!=null){
        clienteEncontrado.nombre=cliente.nombre;
        clienteEncontrado.edad=cliente.edad;
    }
}



crearCliente = function () {
    let valorCedula = recuperarTexto("txtCedula");
    let valorNombre = recuperarTexto("txtNombre");
    let valorEdad = recuperarFloat("txtEdad");

    let nuevoCliente = {};
    nuevoCliente.cedula = valorCedula;
    nuevoCliente.nombre = valorNombre;
    nuevoCliente.edad = valorEdad;

    agregarCliente(nuevoCliente);
}

agregarCliente = function (cliente) {
    let resultado;
    resultado = buscarCliente(cliente.cedula);
    if (resultado == null) {
        clientes.push(cliente);
    } else {
        alert("ya existe un cliente con la cedula: " + cliente.cedula);
    }

}

buscarCliente = function (cedula) {
    let elementoCliente;
    let clienteEncontrado;
    for (i = 0; i < clientes.length; i++) {
        elementoCliente = clientes[i];
        if (elementoCliente.cedula == cedula) {
            clienteEncontrado = elementoCliente;
            break;
        }
    }
    return clienteEncontrado;
}

mostrarClientes = function () {
    let cmpTabla = document.getElementById("Clientes");
    let contenidoTabla = "<table><tr>" +
        "<th>CEDULA</th>" +
        "<th>NOMBRE</th>" +
        "<th>EDAD</th>"+
    "</tr>";
    let elementoCliente;
    for (let i = 0; i < clientes.length; i++) {
        elementoCliente = clientes[i];
        contenidoTabla +=
            "<tr><td>" + elementoCliente.cedula + "</td>" +
            "<td>" + elementoCliente.nombre + "</td>"+
             "<td>" + elementoCliente.edad + "</td>"+
             "</tr>"
    }
    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
}