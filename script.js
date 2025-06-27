// Aguarda o HTML ser completamente carregado antes de executar o script

document.addEventListener('DOMContentLoaded', function () {
    // Pega o botão pelo seu ID

    const botaoMensage = document.getElementById('mensagemBtn');
    // Pega o parágrafo onde a mensagem será exibida

    const textoMensagem = document.getElementById('mensagemTexto');

    // Adiciona um "ouvinte de evento" ao botão.
    // Quando o botão for clicado, a função dentro dele será executada.
    botaoMensage.addEventListener('click', function () {
        // Define o texto que aparecerá

        const mensagem = "Obrigado por ter clicado, que todos seus sonhos se realizem. Agora meu trabalho foi finalizado! Caso queira aprender mais sobre tecnogocia, basta acessar o link no final da página."
        // Atualiza o conteúdo do parágrafo com a mensagem

        textoMensagem.textContent = mensagem;
    });
});