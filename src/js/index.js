const botoesCarrossel = document.querySelectorAll(".botao");
const imagensFundo = document.querySelectorAll(".imagem");

botoesCarrossel.forEach((botao, index) => {
  botao.addEventListener("click", () => {
    imagensFundo.forEach((imagemFundo) => {
      if (imagemFundo.classList.contains("ativa")) {
        imagemFundo.classList.remove("ativa");
      }
    });
    imagensFundo[index].classList.add("ativa");

    botoesCarrossel.forEach((botaoSelecionado) => {
      if (botaoSelecionado.classList.contains("selecionado")) {
        botaoSelecionado.classList.remove("selecionado");
      }
    });
    botoesCarrossel[index].classList.add("selecionado");
  });
});
