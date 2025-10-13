ejecutarValidacion=function(){
    let password=recuperarTexto("txtPassword");
    let resultado=validarPassword(password);

    if(resultado===""){
        cambiarTexto("lblResultado","Password Correcto");
    }else{
        cambiarTexto("lblResultado",resultado);
    }
}







validarPassword = function (password) {
    let errores = "";
    if (password.length < 8) {
        errores = "Debes al menos tener 8 caracteres maximo";
    }
    if (password.length > 16) {
        errores = "Debes al menos tener 16 caracteres minimos";
    }
    let tieneMayusculas = false;
    for (let i = 0; i < password.length; i++) {
        let x = password.charAt(i);
        if (x >= "A" && x <= "Z") {
            tieneMayusculas = true;
            break;
        }
    }
    if(!tieneMayusculas){
        errores="Debe tener al menos una letra mayuscula";
    }

    let tieneDigito=false;
    for(let i=0;i<password.length;i++){
        let x=password.charAt(i);
        if(x>="0"&&x<="9"){
            tieneDigito=true;
            break;
        }
    }
    if(!tieneDigito){
        errores="Debe tener al menos un numero"
    }

    let tieneEspecial=false;
    let especiales=["*","_","."];
    for(let i=0;i<password.length;i++){
        let x=password.charAt(i);
        if(especiales.includes(x)){
            tieneEspecial=true;
            break;
        }
    }
    if(!tieneEspecial){
        errores="Debe tener al menos un caracter especial (*,_o.)";
    }
    return errores;
}