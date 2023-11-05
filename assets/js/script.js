const btn = document.querySelector('#btn');
const bola = document.querySelector('#bola');
const olho = document.querySelector('#olho-aberto');
const olhoFechado = document.querySelector('#olho-fechado');
const enviar = document.querySelector('input[type = "submit"]');
const email = document.querySelector("#email");
const senha = document.querySelector('#senha');
const erroSenha = document.querySelector('#container-senha > div.msg-erro > small');
const contEmail = document.querySelector("#container-email");
const contSenha = document.querySelector("#container-senha");
let tema_sitema = localStorage.getItem('theme') || 'light';
let erro = "";
var minusc = /[a-z]/; 
let maiusc = /[A-Z]/;
let num = /[0-9]/;
let carc = /[!|@|#|$|%|^|&|*|(|)|-|_|.|]/;

enviar.addEventListener('click', (e) => {
    e.preventDefault();

    if (validarEmail() == false) {
        contEmail.classList.add('erro');
    } else {
        contEmail.classList.remove('erro')
    }

    if (validarSenha() == false) {
        erroSenha.innerHTML = erro;
        contSenha.classList.add('erro');
    } else {
        contSenha.classList.remove('erro')
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

function validarSenha() {
    if (senha.value.length < 8) {
        erro = 'A senha deve conter pelo menos 8 caracteres!';
        return false
    } else if (minusc.test(senha.value) == false) {
        erro = 'Sua senha deve conter letras minúsculas!';
        return false
    } else if (maiusc.test(senha.value) == false) {
        erro = 'Sua senha deve conter letras maiúsculas!';
        return false
    } else if (num.test(senha.value) == false) {
        erro = 'Sua senha deve conter números!';
        return false
    } else if (carc.test(senha.value) == false) {
        erro = 'Sua senha deve conter caracteres especiais!';
        return false
    } else {
        erro = '';
        return true
    }

}

temaAtual(tema_sitema)