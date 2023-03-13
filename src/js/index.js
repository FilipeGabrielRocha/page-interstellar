const botoesCarrossel = document.querySelectorAll(".botao");
const imagensFundo = document.querySelectorAll(".imagem");

botoesCarrossel.forEach((botao, index) => {
  botao.addEventListener("click", () => {
    const imagemFundo = document.querySelector(".ativa");
    imagemFundo.classList.remove("ativa");
    imagensFundo[index].classList.add("ativa");

    const botaoSelecionado = document.querySelector(".selecionado");
    botaoSelecionado.classList.remove("selecionado");
    botao.classList.add("selecionado");
  });
});
