alert("quem leu isso aki é gay");
const botao = document.querySelector(".btn-plataforma")
const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas")

botao.addEventListener("click", () => {
    
    elementoPlataformas.classList.toggle("ativo");
})

