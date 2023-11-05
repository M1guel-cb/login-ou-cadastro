const btn = document.querySelector('#btn');
const bola = document.querySelector('#bola');
const olho = document.querySelector('#olho-aberto');
const olhoFechado = document.querySelector('#olho-fechado');
const senha = document.querySelector('input#senha');
const enviar = document.querySelector('input[type = "submit"]');
const email = document.querySelector("#email");
const contEmail = document.querySelector("#container-email");
const contSenha = document.querySelector("#container-senha");
var tema_sitema = localStorage.getItem('theme') || 'light';

enviar.addEventListener('click', (e) => {
    e.preventDefault();
    if (validarEmail() == false) {
        contEmail.classList.add('erro');
    } else {
        contEmail.classList.remove('erro')
    }
});

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

function validarEmail() {
    var re = /\S+@\S+\.\S+/;
    return re.test(email.value);
}

temaAtual(tema_sitema)