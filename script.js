document.addEventListener('DOMContentLoaded', function () {
    // Seleção dos elementos
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');
    const alternaContraste = document.getElementById('alterna-contraste');

    // Tamanho de fonte inicial
    let tamanhoAtualFonte = 1;

    // Abrir/fechar menu de acessibilidade
    botaoDeAcessibilidade.addEventListener('click', function () {
        botaoDeAcessibilidade.classList.toggle('rotacao-botao');
        opcoesDeAcessibilidade.classList.toggle('apresenta-lista');

        const expandido = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';
        botaoDeAcessibilidade.setAttribute('aria-expanded', !expandido);
    });

    // Aumentar fonte
    aumentaFonteBotao.addEventListener('click', function () {
        tamanhoAtualFonte += 0.1;
        if (tamanhoAtualFonte > 2) tamanhoAtualFonte = 2; // limite máximo
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    });

    // Diminuir fonte
    diminuiFonteBotao.addEventListener('click', function () {
        tamanhoAtualFonte -= 0.1;
        if (tamanhoAtualFonte < 0.5) tamanhoAtualFonte = 0.5; // limite mínimo
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    });

    // Alternar alto contraste
    alternaContraste.addEventListener('click', function () {
        document.body.classList.toggle('alto-contraste');
    });
});
