let prato;
let bebida;
let sobremesa;
let custoPrato;
let custoBebida;
let custoSobremesa;
let valor = 0

function escolherPrato(pedido) {     
    const borda = document
    .querySelector(".comida")
    .querySelector(".borda-selecionar");

    if (borda !== null) {
        borda.classList.remove("borda-selecionar");                               
    }   
    pedido.classList.add("borda-selecionar");        

    let eFrango = pedido.classList.contains("frango");
    let eFeijoada = pedido.classList.contains("feijoada");
    let ePoke = pedido.classList.contains("poke");

    if (eFrango === true){
        prato = "Frango Ying Yang";
        custoPrato = 14.90;
      } else if (eFeijoada === true){
        prato = "Feijoada de mainha";
        custoPrato = 15.90;
      } else if (ePoke === true){
        prato = "Poke da moda";
        custoPrato = 16.90;
      } else{
        prato = "Vázio";        
        custoPrato = 0;
      }
    
    
    if(prato && bebida && sobremesa){
      document.querySelector(".botão-cinza").classList.add("none");
      document.querySelector(".botão-concluir").classList.remove("none");
    }     
            
}


function escolherBebida(pedido) {    
    const borda = document
    .querySelector(".bebida")
    .querySelector(".borda-selecionar");    

    if (borda !== null) {
        borda.classList.remove("borda-selecionar");
                       
    }   pedido.classList.add("borda-selecionar");    

    let eCoca = pedido.classList.contains("coquinha");
    let eSuco = pedido.classList.contains("suco");
    let eAgua = pedido.classList.contains("agua");

    if (eCoca === true){
        bebida = "Coquinha gelada";
        custoBebida = 4.90;
      } else if (eSuco === true){
        bebida = "Suco de pó";
        custoBebida = 5.90;
      } else if (eAgua === true){
        bebida = "Água da torneira";
        custoBebida = 3.90;
      } else{
        bebida = "Vázio";        
        custoBebida = 0;
      }
    
    if(prato && bebida && sobremesa){
      document.querySelector(".botão-cinza").classList.add("none");
      document.querySelector(".botão-concluir").classList.remove("none");
    } 
}

function escolherSobremesa(pedido) {
    
    const borda = document
    .querySelector(".sobremesa")
    .querySelector(".borda-selecionar");

    if (borda !== null) {
        borda.classList.remove("borda-selecionar");
                       
    }   pedido.classList.add("borda-selecionar");  
    
    let ePudim = pedido.classList.contains("coquinha");
    let eSorvete = pedido.classList.contains("suco");
    let eAcucar = pedido.classList.contains("agua");

    if (ePudim === true){
        sobremesa = "Coquinha gelada";
        custoSobremesa = 4.90;
      } else if (eSorvete === true){
        sobremesa = "Suco de pó";
        custoSobremesa = 5.90;
      } else if (eAcucar === true){
        sobremesa = "Água da torneira";
        custoSobremesa = 3.90;
      } else{
        sobremesa = "Vázio";        
        custoSobremesa = 0;
      }
    
    if(prato && bebida && sobremesa){
      document.querySelector(".botão-cinza").classList.add("none");
      document.querySelector(".botão-concluir").classList.remove("none");
    } 
}

//function botaoFinalizar() {}
