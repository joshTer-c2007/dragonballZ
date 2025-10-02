function esMayuscula(caracter) {
    let codigo = caracter.charCodeAt(0);
    return (codigo >= 65 && codigo <= 90);
}

function esDigito(caracter) {
    let codigo = caracter.charCodeAt(0);
    return (codigo >= 48 && codigo <= 57);
}

function esGuion(caracter) {
    let codigo = caracter.charCodeAt(0);
    return (codigo === 45);
}

