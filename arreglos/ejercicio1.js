let notas = [];

agregarElementos = function () {
    notas.push(5);
    notas.push(10);
    console.log(notas.length);
}

recorrerArreglo = function () {
    let notaR;
    for (let i = 0; i < notas.length; i++) {
        notaR = notas[i];
        console.log(notaR);
    }
}

ejecutarPromedio = function () {
    let promedioCalculado;
    promedioCalculado = calcularPromedio();
    cambiarTexto("lblPromedio ", promedioCalculado);

}

probarAgregar = function () {
    let notaRecuperada;
    notaRecuperada = recuperarEntero("txtNota");
    agregarNota(notaRecuperada);
}

agregarNota = function (nota) {
    notas.push(nota);
    mostrarNotas();
}

calcularPromedio = function () {
    let sumaNotas = 0;
    let promedio = 0;

    for (i = 0; i < notas.length; i++) {
        sumaNotas += notas[i];
    }
    if (notas.length > 0) {
        promedio = sumaNotas / notas.length;
    }
    return promedio;
}

generarTabla = function () {
    let contenidoTabla = "";
    let cmpTabla = document.getElementById("divTabla");
    contenidoTabla += "<table><tr><td>UNO</td></tr>" +
        "<tr><td>DOS</td></tr></table>"
    cmpTabla.innerHTML = contenidoTabla;
}

mostrarNotas = function () {
    let cmpTabla = document.getElementById("divTabla");
    let contenidoTabla="<table><tr><th>NOTA</th></tr>";
    for(let i=0;i<notas.length;i++){
        miNota=notas[i];
        contenidoTabla+="<tr><td>";
        contenidoTabla+=miNota;
        contenidoTabla+="</tr></td>"
    }
    contenidoTabla+="</table>"
    cmpTabla.innerHTML=contenidoTabla;
}