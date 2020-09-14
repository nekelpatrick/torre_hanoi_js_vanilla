const numeroDePeças = 5 //pode ser um input !

//Função criarDiv cria a div maior, o retângulo que engloba o jogo.
function criarDiv() {
  let divGlobal = document.createElement("div");
  divGlobal.id = "id-divGlobal";
  document.body.appendChild(divGlobal)
  criarTorre()
  criarPecas()  
}
criarDiv()

//Função criarTorre cria três torres e atribui id para elas conforme o loop.

function criarTorre() {
    for (let index = 1; index < 4; index++) {
        let criarNovaTorre = document.createElement("div");
        criarNovaTorre.id = "id-torre" + index;
        criarNovaTorre.className = "torre"
        document.getElementById("id-divGlobal").appendChild(criarNovaTorre)
            
    }
     
  }
  

//funcão CriarPecas  cria peças  em loop baseada na variável numeroDePeças que pode ser um  input do usuário
function criarPecas () {
    for (let index = 0; index < numeroDePeças; index++) {
        let novaPeca = document.createElement("div")
        novaPeca.id = "peca" + index
        novaPeca.className = "peca"
        document.getElementById("id-torre1").appendChild(novaPeca)
        
    }
   
}

