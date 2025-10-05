let puntosUsuario = 0;
let puntosComputador = 0;
const PUNTAJE_META = 5;
const idMap = {piedra:'imgPiedra', papel:'imgPapel', tijera:'imgTijera'};

function actualizarMarcador(){
  mostrarTexto('puntosUsuario', puntosUsuario);
  mostrarTexto('puntosComputador', puntosComputador);
}

function marcarSeleccionUsuario(nombre){
  byId('imagenUsuario').src = generarRuta(nombre);
  document.querySelectorAll('.choices .choice img').forEach(i=>i.classList.remove('selected'));
  const el = byId(idMap[nombre]);
  if(el) el.classList.add('selected');
}

function disableChoices(){ document.querySelector('.choices').classList.add('disabled'); }
function enableChoices(){ document.querySelector('.choices').classList.remove('disabled'); document.querySelectorAll('.choices .choice img').forEach(i=>i.classList.remove('selected')); }

function jugar(seleccionado){
  if(puntosUsuario >= PUNTAJE_META || puntosComputador >= PUNTAJE_META) return;
  marcarSeleccionUsuario(seleccionado);
  const elecComputador = generarElemento();
  byId('imagenComputador').src = generarRuta(elecComputador);
  const resultado = determinarGanador(seleccionado, elecComputador);
  if(resultado === 0){
    mostrarTexto('resultadoTexto', 'EMPATE');
  } else if(resultado === 1){
    puntosUsuario++;
    mostrarTexto('resultadoTexto', 'GANASTE LA PARTIDA!!');
  } else {
    puntosComputador++;
    mostrarTexto('resultadoTexto', 'PERDISTE LA PARTIDA!!');
  }
  actualizarMarcador();
  if(puntosUsuario === PUNTAJE_META){
    mostrarTexto('resultadoTexto', 'HAS GANADO EL JUEGO');
    disableChoices();
  } else if(puntosComputador === PUNTAJE_META){
    mostrarTexto('resultadoTexto', 'EL COMPUTADOR TE HA VENCIDO');
    disableChoices();
  }
}

function nuevaPartida(){
  puntosUsuario = 0;
  puntosComputador = 0;
  actualizarMarcador();
  mostrarTexto('resultadoTexto', 'Selecciona una opción para jugar');
  enableChoices();
  byId('imagenUsuario').src = './imagenes/piedra.png';
  byId('imagenComputador').src = './imagenes/piedra.png';
}
