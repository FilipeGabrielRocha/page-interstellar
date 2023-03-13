import esconderImagemAtivado from "./service/esconderImagemAtiva.js";
import desativarBotaoSelecionado from "./service/desativarBotaoSelecionado.js";

const botoesCarrossel = document.querySelectorAll(".botao");
const imagensFundo = document.querySelectorAll(".imagem");

botoesCarrossel.forEach((botao, index) => {
  botao.addEventListener("click", () => {
    esconderImagemAtivado();
    imagensFundo[index].classList.add("ativa");

    desativarBotaoSelecionado();
    botao.classList.add("selecionado");
  });
});

