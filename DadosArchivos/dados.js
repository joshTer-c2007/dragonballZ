jugar=function(){
    let valorRecuperado;
    valorRecuperado=lanzarDado();
    cambiarTexto("lblNumero",valorRecuperado);
    if(valorRecuperado>3){
        cambiarTexto("lblRespuesta","El valor es mayor a 3, que bien");
    }else{
        cambiarTexto("lblRespuesta","Bro? WTF tu puedes sigue ;)");
    }
}

//Crear una funcion llamada lanzar dado
//No recibe parametros
//Retorna un numero aleatorio entre 1 y 6
lanzarDado=function(){
   let aleatorio;
   let numeroMultiplicado;
   let numeroEntero;
   let valorDado;
   aleatorio=Math.random(); //entre 0 y 1
   numeroMultiplicado=aleatorio*6;
   numeroEntero=parseInt(numeroMultiplicado);//entre 0 y 5
   valorDado=numeroEntero+1;
   return valorDado;
}