//////////// ------------ AQUI É FEITO O HTML TODO EM DOM ------------ ///
//

const numeroDePeças = 5; //pode ser um input !
const numeroDeTorres = 3;

//Função criarDiv cria a div maior, o retângulo que engloba o jogo.
function criarDiv() {
  let divGlobal = document.createElement("div");
  divGlobal.id = "id-divGlobal";
  document.body.appendChild(divGlobal);
  criarTorre();
  criarPecas();
}
criarDiv();

//Função criarTorre cria três torre e atribui id para elas conforme o loop.

function criarTorre() {
  for (let index = 1; index < 4; index++) {
    let criarNovaTorre = document.createElement("div");
    criarNovaTorre.className = "torre";
    criarNovaTorre.id = "id-torre" + index;
    document.getElementById("id-divGlobal").appendChild(criarNovaTorre);
  }
}

//funcão CriarPecas  cria peças  em loop baseada na letiável numeroDePeças que pode ser um  input do usuário
function criarPecas() {
  for (let index = 1; index < 5; index++) {
    let novaPeca = document.createElement("div");
    novaPeca.id = "disco" + index;
    novaPeca.className = "discos";

    document.getElementById("id-torre1").appendChild(novaPeca);
  }
}

/* function criarSticks() {
  for (let index = 1; index < numeroDeTorres; index++ ) {
    let novoStick = document.createElement("div")
    novoStick.className = "bottom"
    novoStick.id = "z1"
    
    document.getElementsByClassName("torre").appendChild(novoStick)

  }
  
}
criarSticks() */

////// -------- AQUI COMEÇA A LÓGICA DO JOGO ------------ ///

let discos, torres, draggedone;

function init() {
  discos = document.getElementsByClassName("discos");
  torres = document.getElementsByClassName("torre");
  for (let i = 0; i < discos.length; i++) {
    discos[i].draggable = i == 0;
    discos[i].addEventListener("dragstart", dragstart);
  }
  for (let i = 0; i < torres.length; i++) {
    torres[i].addEventListener("dragover", dragover);
    torres[i].addEventListener("drop", drop);
    torres[i].addEventListener("dragenter", dragenter);
  }
}

function dragstart(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
  draggedone = ev.target.id;
}

function dragenter(ev) {
  let torre = ev.currentTarget;
  let disco = draggedone;
  let discosNaTorre = torre.getElementsByClassName("discos");
  if (discosNaTorre.length == 0 || discosNaTorre[0].id > discos) {
    torre.discoPodeSerDroppadoAqui = true;
    ev.preventDefault();
    return;
  }
  torre.discoPodeSerDroppadoAqui = false;
}

function dragover(ev) {
  if (ev.currentTarget.discoPodeSerDroppadoAqui) ev.preventDefault();
}

function drop(ev) {
  let torre = ev.currentTarget;
  let disco = document.getElementById(ev.dataTransfer.getData("text"));
  ev.dataTransfer.dropEffect = "move";
  torre.insertBefore(disco, torre.firstChild);
  for (let i = 0; i < torres.length; i++) {
    let e = torres[i].getElementsByClassName("discos");
    if (e.length) e[0].draggable = true;
    for (let j = 1; j < e.length; j++) {
      e[j].draggable = false;
    }
  }
  ev.preventDefault();
}
init();
