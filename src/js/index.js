/*
Objetivo - quando clicar no botão alterar imagem de fundo
*/

// 1 - Pegando elemento de botões do html
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');
// 2 - identificando o clique do usuario no botão
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () =>{
        
        // 3 - desmarcar o botão selecionado anteriomente
        desativarBotaoSelecionado();
        
        // 4 - marcar o botão selecionado
        selecionarBotaoCarrossel(botao);
        
        // 5- esconder imagem de fundo 
        escondeImagemAtiva();

        //6 - aparecer imagem a cada botão clicado 
        mostrarImagemDeFundo(indice);
    })
} )

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function escondeImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
