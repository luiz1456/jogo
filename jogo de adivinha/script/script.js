// definindo variaveis e referenciando os elementos html 

let caixaResposta = document.querySelector("#caixa_resposta");
let inputNumero = document.querySelector("#input_numero");
let botaoVerificar = document.querySelector("#botao_verificar");
let opcaoNao = document.querySelector("#nao");
let opcaoSim = document.querySelector("#sim");
let botoesEscolha = document.querySelector(".esconder");
let botaoComecar = document.querySelector("#botao_comecar");
let containerInputNumero = document.querySelector("#container_input_numero");
let contadorVidas = document.querySelector("#numero_vidas");
let contadorPontuacao = document.querySelector("#pontuacao");
let detalhes = document.querySelector("#detalhes_jogo");
let numero_sorteado;
let vidas;
let pontos = parseInt(contadorPontuacao.innerHTML);

// FUNCAO INICIO : Inicia o jogo ,gera um numero aleatorio,adiciona e remove classes necessarias

inicio();
function inicio() {
    numero_sorteado = (Math.floor(Math.random() * 10)) + 1;
    
    containerInputNumero.classList.remove("esconder");
    botaoVerificar.classList.remove("esconder");
    opcaoSim.checked = false;
    opcaoNao.checked = false;
    botoesEscolha.classList.add("esconder");
    botaoComecar.classList.add("esconder");
    detalhes.classList.remove("esconder");
    vidas = 3;
    contadorPontuacao.innerHTML = pontos;
    inputNumero.focus();

    caixaResposta.innerHTML = "tente adivinhar o numero de 1 a 10!";
    inputNumero.value = "";
    contadorVidas.innerHTML = vidas;


}

// FUNCAO VERIFICANUMERO : Verifica se o usuario acertou ou errou

function verificaNumero(numero, vidas) {
    if (numero == numero_sorteado) {
        caixaResposta.innerHTML = "Você acertou!!<br>deseja jogar novamente?";
        detalhes.classList.add("esconder");
        somaPontos();
        jogarNovamente();
    }
    else {
        verificaVidas(inputNumero.value);
        contadorVidas.innerHTML = vidas - 1;

    }
}

// FUNCAO JOGARNOVAMENTE : o usuario escolhe continuar ou nao 

function jogarNovamente() {
    botoesEscolha.classList.remove("esconder");
    containerInputNumero.classList.add("esconder");
    botaoVerificar.classList.add("esconder");
}

// FUNCAO VERIFICAVIDAS : verifica se o usuario ainda tem vidas 

function verificaVidas(numero) {
    if (vidas > 1) {
        vidas -= 1;
        inputNumero.value = "";
        inputNumero.focus();
        caixaResposta.innerHTML = "tente novamente";
        if (numero < numero_sorteado) {
            caixaResposta.innerHTML += "<br>o numero é maior que " + numero;
        } else {
            caixaResposta.innerHTML += "<br>o numero é menor que " + numero;
        }

    } else {
        detalhes.classList.add("esconder");
        caixaResposta.innerHTML = "você perdeu.<br>o numero era " + numero_sorteado + ",<br>deseja jogar novamente?";
        jogarNovamente();
    }
}

// FUNCAO SOMAPONTOS : soma os pontos do usuario a cada acerto 

function somaPontos() {
    if (vidas == 3) {
        pontos += 3;
    }
    else if (vidas == 2) {
        pontos += 2;
    } else {
        pontos += 1;
    }
}

// Definindo os eventos dos botoes de escolha sum e nao 
opcaoSim.addEventListener("click", () => {
    if (opcaoSim.checked) {
        inicio()
    }
});
opcaoNao.addEventListener("click", () => {
    if (opcaoNao.checked) {
        botoesEscolha.classList.add("esconder");
        containerInputNumero.classList.add("esconder");
        botaoVerificar.classList.add("esconder");
        botaoComecar.classList.remove("esconder");
        caixaResposta.innerHTML = "sua pontuação foi " + pontos + " pontos!<br><br>Pronto para jogar?";
    }
});

// definindo eventos do botao verificar, comecar e inputNumero 

botaoVerificar.addEventListener("click", () => {
    verificaNumero(inputNumero.value, vidas);
});

botaoComecar.addEventListener("click", () => {
    pontos = 0;
    inicio();
});

inputNumero.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        botaoVerificar.click();
    }
});