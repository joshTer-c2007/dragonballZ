let personas = [
    { nombre: "Marcos", edad: 18 },
    { nombre: "Roberto", edad: 15 },
    { nombre: "Kate", edad: 25 },
    { nombre: "Diana", edad: 12 },
    { nombre: "Benja", edad: 5 }
]

agregarPersona = function () {
    mostrarTexto("lblErrorNombre", " ");
    mostrarTexto("lblErrorEdad", " ");

    let nombre = recuperarTexto("txtNombre");
    let edad = recuperarInt("txtEdad");

    let esValido = true;
    if (nombre.length < 3) {
        mostrarTexto("lblErrorNombre", "El nombre debe tener al menos 3 caracteres");
        esValido = false;
    }
    if (isNaN(edad) || edad < 0 || edad > 100) {
        mostrarTexto("lblErrorEdad", "La edad debe estar entre 0 y 100");
        esValido = false;
    }
    if (esValido) {
        let nuevaPersona = {};
        nuevaPersona.nombre = nombre;
        nuevaPersona.edad = edad;
        personas.push(nuevaPersona);
        alert("Nueva persona agergada correctamente ", nuevaPersona);
    }
    mostrarPersona();
}

mostrarPersona = function () {
    let cmpTabla = document.getElementById("tablaEmpleados");
    let contenidoTabla = "<table><tr>" +
        "<th>EDAD</th>" +
        "<th>NOMBRE</th>" +
        "</tr>";
    let elementoPersona;
    for (let i = 0; i < personas.length; i++) {
        elementoPersona = personas[i];
        contenidoTabla +=
            "<tr><td>" + elementoPersona.edad + "</td>" +
            "<td>" + elementoPersona.nombre + "</td>" +
            "</tr>"
    }
    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
}

encontrarMayor = function () {
    personaMayor = personas[0];
    let elementoPersona;
    for (i = 1; i < personas.length; i++) {
        elementoPersona = personas[i];
        if (elementoPersona.edad > personaMayor.edad) {
            personaMayor = elementoPersona;
        }
        console.log("La persona con mayor edad es " + elementoPersona.nombre + " con " + elementoPersona.edad);
    }
    return personaMayor;
}

determinarMayor = function () {
    let mayor = encontrarMayor();
    mostrarComponente(mayor);
}

determinarMenor = function () {
    let menor = encontrarMenor();
    mostrarComponente(menor);
}

encontrarMenor = function () {
    personaMenor = personas[0];
    let elementoPersona;
    for (i = 1; i < personas.length; i++) {
        elementoPersona = personas[i];
        if (elementoPersona.edad < personaMenor.edad) { 
            personaMenor=elementoPersona;
        }
        console.log("La persona con menor edad es " + elementoPersona.nombre + " con " + elementoPersona.edad);
    }
    return personaMenor;
}