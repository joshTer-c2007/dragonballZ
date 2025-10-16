probarAtributo = function () {
    let persona = {
        nombre: "Goku",
        apellido: "kakarot",
        edad: 34,
        estaVivo: true
    }
    console.log(persona.nombre);
    console.log(persona.apellido);
    if (persona.estaVivo == false) {
        console.log("no esta vivo");
    } else {
        console.log("esta vivo");
    }
}

crearProducto = function () {
    let producto1 = {
        nombre: "SH figuart",
        precio: "60.00$",
        stock: "100 Disponibles"
    }
    let producto2 = {
        nombre: "SH figuart Goku",
        precio: "80.00$",
        stock: "50 Disponibles"
    }
    console.log(producto1.nombre);
    console.log(producto2.precio);
    if (producto1.stock > producto2.stock) {
        console.log("el producto 1 tiene mayor stock que el segundo");
    } else if (producto2 > producto1) {
        console.log("el segundo producto tiene mayor stock");
    } else {
        console.log("ambos tienen la misma cantidad de stocks");
    }
}

modificarAtributos = function () {
    let cuenta = {
        numero: "23564789",
        saldo: 0.0
    }
    cuenta.saldo = 100;
    cuenta.saldo += 10;
    console.log(cuenta.saldo);
}

crearCLiente = function () {
    let cliente = {
        cedula: "17508637",
        nombre: "Rodrigo"
    }
    let cliente1 = {}
    cliente1.nombre = "Goku";
    cliente1.apellido = "Kakarot";
    cliente1.cedula = "17507768";
}

probarIncrementoSaldo=function(){
    let cuenta={numero:"23454",saldo:34.0}
    incrementarSaldo(cuenta,100);
    console.log(cuenta.saldo);
}

probarDeterminarMayor=function(){
    let per1={nombre:"Tiara",edad:"16"};
    let per2={nombre:"Jhosep", edad:"18"};
    let mayor;
    mayor=determinarMayor(per1,per2);
    if(mayor !=null){
        console.log("El mayor es "+mayor.nombre);
    }
}

incrementarSaldo=function(cuenta,monto){
    cuenta.saldo+=monto;
}

determinarMayor=function(persona1,persona2){
    if(persona1.edad>persona2.edad){
        return persona1;
    }else if(persona2.edad>persona1.edad){
        return persona2;
    }else{
        return null;
    }
}