const btn = document.querySelector('#btn');
const bola = document.querySelector('#bola');
var tema_sitema = localStorage.getItem('theme') || 'light';

btn.addEventListener('click', () => {
    let oldTema = localStorage.getItem('theme') || 'light';
    let newTema = oldTema == 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', newTema)
    temaAtual(newTema);
})

function temaAtual(theme) {
    document.documentElement.setAttribute('data-theme', theme)
    if (theme == 'light') {
        bola.style.transform = 'translateX(28px)';
    } else {
        bola.style.transform = 'translateX(0)';
    }
}

temaAtual(tema_sitema)