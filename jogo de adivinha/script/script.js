let caixaResposta = document.querySelector("#caixa_resposta");
let inputNumero = document.querySelector("#input_numero");
let botaoVerificar = document.querySelector("#botao_verificar");
let opcaoNao = document.querySelector("#nao");
let opcaoSim = document.querySelector("#sim");
let opcaoesconder = document.querySelector(".esconder");
let botaoComecar = document.querySelector("#botao_comecar");
let numero_sorteado;
inicio();
function inicio() {
    numero_sorteado = (Math.floor(Math.random() * 10)) + 1;
    console.log(numero_sorteado);
    inputNumero.classList.remove("esconder");
    botaoVerificar.classList.remove("esconder");
    opcaoSim.checked = false;
    opcaoNao.checked = false;
    opcaoesconder.classList.add("esconder");
    botaoComecar.classList.add("esconder");
    inputNumero.focus();

    inputNumero.value = "";

    caixaResposta.value = "tente adivinhar o numero";
    botaoVerificar.addEventListener("click", () => {
        verificaNumero(inputNumero.value);
    });

}
function verificaNumero(numero) {
    if (numero == numero_sorteado) {
        caixaResposta.value = "voce acertou\ndeseja jogar novamente?";
        opcaoesconder.classList.remove("esconder");
    }
    else {
        caixaResposta.value = "tente novamente";
        inputNumero.value = "";
        inputNumero.focus();
    }
}

opcaoSim.addEventListener("click", () => {
    if (opcaoSim.checked) {
        inicio()
    }
});
opcaoNao.addEventListener("click", () => {
    if (opcaoNao.checked) {
        opcaoesconder.classList.add("esconder");
        inputNumero.classList.add("esconder");
        botaoVerificar.classList.add("esconder");
        botaoComecar.classList.remove("esconder");
        caixaResposta.value = "Pronto pra jogar?";
    }
});
botaoComecar.addEventListener("click", () => {
    inicio();
});

inputNumero.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        botaoVerificar.click();
    }
})