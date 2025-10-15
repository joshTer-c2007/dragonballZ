numeroAleatorio=function(){
    return Math.floor(Math.random()*100)+1;
}

function mostrarResultados(arregloNumeros) {
    const contenedor = document.getElementById('lblResultado');
    contenedor.innerHTML = ''; // Limpiar resultados anteriores

    const tabla = document.createElement('table');
    tabla.border = '1';
    tabla.style.borderCollapse = 'collapse';
    tabla.style.marginTop = '20px';

    const fila = document.createElement('tr');

    arregloNumeros.forEach(numero => {
        const celda = document.createElement('td');
        celda.textContent = numero;
        celda.style.padding = '8px';
        celda.style.textAlign = 'center';
        fila.appendChild(celda);
    });

    tabla.appendChild(fila);
    contenedor.appendChild(tabla);
}

generarAleatorios=function(){
    let aleatorios=[];
    let numero=recuperarTexto("txtValor");
    let valor=parseInt(numero.value);

  if (isNaN(valor) || valor < 5 || valor > 20) {
        alert("Por favor, ingrese un numero valido entre 5 y 20.");
        return;
    }

    for(let i=0;i<valor;i++){
        console.log(i);
        let numero=numeroAleatorio();
        aleatorios.push(numero);
    }
    mostrarResultados(aleatorios);
}