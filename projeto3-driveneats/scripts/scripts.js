let prato;
let bebida;
let sobremesa;
let custoPrato;
let custoBebida;
let custoSobremesa;
let valor = 0

function escolherPrato(pedido) {
    let borda = document
        .querySelector(".comida")
        .querySelector(".borda-selecionar");

    if (borda !== null) {
        borda.classList.remove("borda-selecionar");
    }
    pedido.classList.add("borda-selecionar");

    let eFrango = pedido.classList.contains("frango");
    let eFeijoada = pedido.classList.contains("feijoada");
    let ePoke = pedido.classList.contains("poke");

    if (eFrango === true) {
        prato = "Frango Yin Yang";
        custoPrato = 14.90;
    } else if (eFeijoada === true) {
        prato = "Feijoada de mainha";
        custoPrato = 15.90;
    } else if (ePoke === true) {
        prato = "Poke da moda";
        custoPrato = 16.90;
    } else {
        prato = "Vazio";
        custoPrato = 0;
    }


    if (prato && bebida && sobremesa) {
        document.querySelector(".botao-cinza").classList.add("none");
        document.querySelector(".botao-concluir").classList.remove("none");
    }
}


function escolherBebida(pedido) {
    let borda = document
        .querySelector(".bebida")
        .querySelector(".borda-selecionar");

    if (borda !== null) {
        borda.classList.remove("borda-selecionar");

    } pedido.classList.add("borda-selecionar");

    let eCoca = pedido.classList.contains("coquinha");
    let eSuco = pedido.classList.contains("suco");
    let eAgua = pedido.classList.contains("agua");

    if (eCoca === true) {
        bebida = "Coquinha gelada";
        custoBebida = 4.90;
    } else if (eSuco === true) {
        bebida = "Suco de pó";
        custoBebida = 5.90;
    } else if (eAgua === true) {
        bebida = "Água mineral";
        custoBebida = 3.90;
    } else {
        bebida = "Vazio";
        custoBebida = 0;
    }

    if (prato && bebida && sobremesa) {
        document.querySelector(".botao-cinza").classList.add("none");
        document.querySelector(".botao-concluir").classList.remove("none");
    }
}

function escolherSobremesa(pedido) {

    let borda = document
        .querySelector(".sobremesa")
        .querySelector(".borda-selecionar");

    if (borda !== null) {
        borda.classList.remove("borda-selecionar");

    } pedido.classList.add("borda-selecionar");

    let ePudim = pedido.classList.contains("pudim");
    let eSorvete = pedido.classList.contains("sorvete");
    let eAcucar = pedido.classList.contains("acucar");

    if (ePudim === true) {
        sobremesa = "Pudim";
        custoSobremesa = 7.90;
    } else if (eSorvete === true) {
        sobremesa = "Sorvete";
        custoSobremesa = 8.90;
    } else if (eAcucar === true) {
        sobremesa = "Torrão de açúcar";
        custoSobremesa = 1.90;
    } else {
        sobremesa = "Vazio";
        custoSobremesa = 0;
    }

    if (prato && bebida && sobremesa) {
        document.querySelector(".botao-cinza").classList.add("none");
        document.querySelector(".botao-concluir").classList.remove("none");
    }
}

function finalizarPedido() {
    valor = custoPrato + custoBebida + custoSobremesa;

    document.querySelector(".confirmar-pedido").classList.remove("none");

    document.querySelector(".pedido-comida").innerHTML = prato;
    document.querySelector(".custo-prato").innerHTML = custoPrato.toFixed(2);

    document.querySelector(".pedido-bebida").innerHTML = bebida;
    document.querySelector(".custo-bebida").innerHTML = custoBebida.toFixed(2);

    document.querySelector(".pedido-sobremesa").innerHTML = sobremesa;
    document.querySelector(".custo-sobremesa").innerHTML = custoSobremesa.toFixed(2);

    document.querySelector(".custo-total").innerHTML = valor.toFixed(2);
}

function cancelarPedido() {
    document.querySelector(".confirmar-pedido").classList.add("none");
}

function enviarPedido() {
    let nome = prompt("Seu nome?");
    let endereco = prompt("Qual é o seu endereço?");


    let mensagem = "Olá, gostaria de fazer o pedido:" + "\n" +
        "%0a- Prato: " + prato + "\n" +
        "%0a- Bebida: " + bebida + "\n" +
        "%0a- Sobremesa: " + sobremesa + "\n" +
        "%0aTotal: R$ " + valor.toFixed(2) + "\n" +
        "%0a%0aNome: " + nome + "\n" +
        "%0aEndereço: " + endereco;



    window.open("http://wa.me/+5581998204352?text=" + mensagem);
}


