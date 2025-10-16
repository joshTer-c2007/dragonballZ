probarAtributo=function(){
    let persona={
        nombre: "Goku",
        apellido: "kakarot",
        edad : 34,
        estaVivo: true
    }
    console.log(persona.nombre);
    console.log(persona.apellido);
    if(persona.estaVivo==false){
        console.log("no esta vivo");
    }else{
        console.log("esta vivo");
    }
}

crearProducto=function(){
    let producto1={
        nombre: "SH figuart",
        precio: "60.00$",
        stock: "100 Disponibles"
    }
    let producto2={
        nombre: "SH figuart Goku",
        precio: "80.00$",
        stock: "50 Disponibles"
    }
    console.log(producto1.nombre);
    console.log(producto2.precio);
    if(producto1.stock>producto2.stock){
        console.log("el producto 1 tiene mayor stock que el segundo");
    }else if(producto2>producto1){
        console.log("el segundo producto tiene mayor stock");
    }else{
        console.log("ambos tienen la misma cantidad de stocks");
    }
}