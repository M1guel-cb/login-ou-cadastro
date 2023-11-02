const btn = document.querySelector('#btn');
const bola = document.querySelector('#bola');
const olho = document.querySelector('#olho-aberto');
const olhoFechado = document.querySelector('#olho-fechado');
const senha = document.querySelector('input#senha');
var tema_sitema = localStorage.getItem('theme') || 'light';

btn.addEventListener('click', () => {
    let oldTema = localStorage.getItem('theme') || 'light';
    let newTema = oldTema == 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', newTema)
    temaAtual(newTema);
})

function verSenha(tipo) {
    if (tipo == 'text') {
        olho.style.display = 'block';
        olhoFechado.style.display = 'none';
        senha.type = tipo
    } else if (tipo == 'password') {
        olho.style.display = 'none';
        olhoFechado.style.display = 'block';
        senha.type = tipo
    }
}

function temaAtual(theme) {
    document.documentElement.setAttribute('data-theme', theme)
    if (theme == 'light') {
        bola.style.transform = 'translateX(28px)';
    } else {
        bola.style.transform = 'translateX(0)';
    }
}

temaAtual(tema_sitema)