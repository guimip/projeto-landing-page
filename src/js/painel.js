/*
mostarar e esconder imagens quando apertar nas setas

    a imagem atual começa no 0
    assim que for clicado no apertado no avançar
        preciso adicionar mais um no contador
        para poder saber qual imagem será mostrada

    esconder todas as imagens
        pegar todas a imagens usando DOM e remover a classe mostrar

    mostrar a próxima imagem
        pegar todas as imagens, descobrir qual é a próxima, e colocar a classe mostrar nela
*/

const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');
let imagemAtual = 0;

setaAvancar.addEventListener('click', function () {
    if(imagemAtual === imagensPainel.length-1) {
        imagemAtual = -1;
    };
    imagemAtual++;

    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    });

    imagensPainel[imagemAtual].classList.add('mostrar');
})

setaVoltar.addEventListener('click', function() {
    if(imagemAtual === 0) {
        imagemAtual = 3;
    };

    imagemAtual--;

    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    });

    imagensPainel[imagemAtual].classList.add('mostrar');
})
