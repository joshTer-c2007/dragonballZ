saludar=function(){
    //recuperar el valor de la caja de texto txtNombre
    let nombre;
    nombre=recuperarTexto("txtNombre");
    //recuperar el valor de la caja de texto txtApellido
    let apellido;
    apellido=recuperarTexto("txtApellido");
    
    let edad=recuperarInt("txtEdad");

    let estatura=recuperarFloat("txtEstatura");

    let mensajeBienvenida="Bienvenido "+nombre+" "+apellido;

    mostrarTexto("lblResultado",mensajeBienvenida);

    mostrarImagen("img","./imagenes/goku.gif");

    mostrarTextoEnCaja("txtNombre"," ");

}


