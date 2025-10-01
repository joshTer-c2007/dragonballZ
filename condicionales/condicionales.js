calcularIntereses=function(ingresoAnual){
    let tasa;
    if(ingresoAnual<300000){
        tasa=16;
    }else if(ingresoAnual>=300000&&ingresoAnual<500000){
        tasa=15;
    }else if(ingresoAnual>=500000&&ingresoAnual<1000000){
        tasa=14;
    }else if(ingresoAnual>=1000000&&ingresoAnual<2000000){
        tasa=13;
    }else{
        tasa=12;
    }
    return tasa;
}
calcularCapacidadPago=function(edad,ingresos,egresos){
    let disponible=ingresos-egresos;
    let cuota;
    if(edad>50){
        cuota=disponible*0.40;
    }else{
        cuota=disponible*0.30;
    }
    return cuota;
}
calcularDescuento=function(precio,cantidad){
    let descuento;
    if (cantidad >= 3 && cantidad <= 5) {
        descuento = 0.20;
    } else if (cantidad >= 6 && cantidad <= 11) {
        descuento = 0.30;
    } else if (cantidad >= 12) {
        descuento = 0.40;
    }

    let total = precio * cantidad;
    let totalConDescuento = total - (total * descuento);

    return totalConDescuento;
}
function determinarColesterolLDL(nivelColesterol) {
    if (nivelColesterol < 100) {
        return "Óptimo";
    } else if (nivelColesterol >= 100 && nivelColesterol < 130) {
        return "Casi óptimo";
    } else if (nivelColesterol >= 130 && nivelColesterol < 160) {
        return "Límite alto";
    } else if (nivelColesterol >= 160 && nivelColesterol < 190) {
        return "Alto";
    } else {
        return "Muy alto";
    }
}
function validarClave(clave) {
    return clave.length >= 8 && clave.length <= 16;
}
function esMayuscula(caracter) {
    let codigo = caracter.charCodeAt(0);
    return codigo >= 65 && codigo <= 90;
}
function esMinuscula(caracter) {
    let codigo = caracter.charCodeAt(0);
    return codigo >= 97 && codigo <= 122;
}
function esDigito(caracter) {
    let codigo = caracter.charCodeAt(0);
    return codigo >= 48 && codigo <= 57;
}
darPermiso=function(notaMatematica,notaFisica,notaGeometria){
    let tienePermiso=(notaMatematica>90)||(notaFisica>90)||(notaGeometria>90);
    return tienePermiso;
}
otorgarPermiso=function(notaMatematica,notaFisica,notaGeometria){
    let tienePermiso=(notaMatematica>90)||(notaFisica>90)&&(notaGeometria>80);
    return tienePermiso;
}
dejarSalir=function(notaMatematica,notaFisica,notaGeometria){
    let notaMasAlta=(notaMatematica>90)||(notaFisica>90)||(notaGeometria>90);
    let fisicaMayorQueMate=(notaFisica>notaMatematica);
    let tienePermiso=notaMasAlta&&fisicaMayorQueMate;
    return tienePermiso;
}
