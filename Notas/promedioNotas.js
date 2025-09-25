calcularPromedioNotas=function(){
    //Recuperar el valor de las cajas de texto
    let nota1;
    let nota2;
    let nota3;
    let promedio;
    nota1=recuperarFloat("txtNota1");
    nota2=recuperarFloat("txtNota2");
    nota3=recuperarFloat("txtNota3");

    promedio=calcularPromedio(nota1,nota2,nota3);

    mostrarTexto("lblResultado",promedio);

    if(promedio>7){
        mostrarTexto("lblPalabras","Lo lograste disfruta tus vacaciones");
        mostrarImagen("img","./imagenes/gogeta.gif");
    }else{
        mostrarTexto("lblPalabras","Que paso bro, no le echaste ganas :(");
        mostrarImagen("img","./imagenes/vegito.gif");
    }
    

}

limpiar=function(){
    mostrarTexto("txtNota1","0");
    mostrarTexto("txtNota2","0");
    mostrarTexto("txtNota3","0");
    mostrarTexto("lblResultado","CALCULANDO...");
    mostrarTexto("lblPalabras","...");
    mostrarImagen("img"," ");
}