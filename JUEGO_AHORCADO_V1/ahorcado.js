//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
esMayuscula=function(caracter){
    let codigo=caracter.charCodeAt(0);
    if(codigo>=65&&codigo<=90){
        return true;
    }else{
        return false;
    }
}

//Variable global
let palabraSecreta="";

guardarPalabra=function(){
    let palabra=recuperarTexto("txtLetra");
    if(palabra.length !==5){
        alert("Debes ingresar una palabra de exactamente 5 letras mayusculas");
        return;
    }
    for(let i=0; i<palabra.length;i++){
        let letra=palabra.charAt(i);
        if(!esMayuscula(letra)){
            alert("Debe ingresar solo letras mayusculas (A-Z)");
            return;
        }
    }
    palabraSecreta=palabra;
    console.log("Palabra ingresada:", palabraSecreta);
    alert("Palabra secreeta guardada correctamente");
}

function validar(letra) {
    let letrasEncontradas = 0;

    for (let i = 0; i < palabraSecreta.length; i++) {
        if (palabraSecreta[i] === letra) {
            mostrarLetra(letra, i);
            letrasEncontradas++;
            coincidencias++; // ¡Coincidencia global!
        }
    }

    if (letrasEncontradas === 0) {
        alert("LA LETRA NO ES PARTE DE LA PALABRA");
        errores++;
    }
}



let intentos = 0;
let coincidencias = 0;
let errores = 0;

function ingresarLetra() {
    let letra = recuperarTexto("letra");

    if (letra.length !== 1) {
        alert("Debe ingresar solo UNA letra.");
        return;
    }

    // Verifica si la letra es mayúscula
    if (letra !== letra.toUpperCase()) {
        alert("SOLO SE ACEPTAN MAYÚSCULAS");
        return;
    }

    intentos++; // Aumentamos los intentos válidos
    validar(letra);

    // Verifica condiciones de victoria o derrota
    if (coincidencias === palabraSecreta.length) {
        alert("HA GANADO");
    } else if (intentos === 10) {
        alert("HA PERDIDO");
    }
}

mostrarAhorcado=function(){
    if(errores=1){
        mostrarImagen("ahorcadoImagen","Ahorcado_01.png");
    }else if(errores=2){
        mostrarImagen("ahorcadoImagen","Ahorcado_02.png");
    }else if(errores=3){
        mostrarImagen("ahorcadoImagen","Ahorcado_03.png");
    }else if(errores=4){
        mostrarImagen("ahorcadoImagen","Ahorcado_04.png");
    }else if(errores=5){
        mostrarImagen("ahorcadoImagen","Ahorcado_05.png");
    }else if(errores=6){
        mostrarImagen("ahorcadoImagen","Ahorcado_06.png");
    }else if(errores=7){
        mostrarImagen("ahorcadoImagen","Ahorcado_07.png");
    }else if(errores=8){
        mostrarImagen("ahorcadoImagen","Ahorcado_08.png");
    }else if(errores=9){
        mostrarImagen("ahorcadoImagen","Ahorcado_09.png");
    }
}

