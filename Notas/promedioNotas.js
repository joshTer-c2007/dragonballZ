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

    if(promedio < 5 && promedio >0 ){
        mostrarTexto("lblPalabras","REPROBADO");
        mostrarImagen("img","./imagenes/vegito.gif");
    }else if(promedio >= 5 && promedio <=8){
        mostrarTexto("lblPalabras","BUEN TRABAJO");
        mostrarImagen("img","./imagenes/gogeta.gif");
    }else if( promedio > 8 && promedio <=10){
        mostrarTexto("lblPalabras","EXCELENTE");
        mostrarImagen("img","./imagenes/ssj4.gif");
    }else{
        mostrarTexto("lblPalabras","DATOS INCORRECTOS");
        mostrarImagen("img","./imagenes/super17.gif")
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