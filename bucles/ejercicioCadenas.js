ejecutarPrueba1=function(){
    let mensaje;
    mensaje=recuperarTexto("txtCadena");
    recorrerCadena(mensaje);
}

ejecutarPrueba2=function(){
    let cadena;
    let invertida;
    cadena=recuperarTexto("txtCadena");
    invertida=invertirCadena(cadena);
    cambiarTexto("lblResultado ",invertida);
}






recorrerCadena=function(cadena){
    //0123456
    //Juanito
    let caracter;

    for(let posicion=0;posicion<cadena.length;posicion++){
        caracter=cadena.charAt(posicion);
        console.log("Caracter "+caracter+" posicion "+posicion);
    }
    for(let posicion=0;posicion<=cadena.length-1;posicion++){
        caracter=cadena.charAt(posicion);
        console.log(" CARACTER "+caracter+" posicion "+posicion);
    }
}

invertirCadena=function(cadena){
    let resultado="";
    for(let posicion=cadena.length-1;posicion>=0;posicion--){
        let letra=cadena.charAt(posicion);
        resultado=resultado+letra;
    }
    return resultado;
}