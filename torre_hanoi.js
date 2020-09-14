const numeroDePeças = 5 //pode ser um input !


function criarDiv() {
  let divGlobal = document.createElement("div");
  divGlobal.id = "id-divGlobal";
  document.body.appendChild(divGlobal)
  criarTorre()
  criarPecas()  
}
criarDiv()

function criarTorre() {
    for (let index = 1; index < 4; index++) {
        let criarNovaTorre = document.createElement("div");
        criarNovaTorre.id = "id-torre" + index;
        criarNovaTorre.className = "torre"
        document.getElementById("id-divGlobal").appendChild(criarNovaTorre)
            
    }
     
  }
  


function criarPecas () {
    for (let index = 0; index < numeroDePeças; index++) {
        let novaPeca = document.createElement("div")
        novaPeca.id = "peca" + index
        novaPeca.className = "peca"
        document.getElementById("id-torre1").appendChild(novaPeca)
        
    }
   
}

