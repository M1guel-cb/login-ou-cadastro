const btn = document.querySelector('#btn');
const bola = document.querySelector('#bola');
const olhoSenha = document.querySelector('div#div-senha #olho-aberto');
const olhoFechadoSenha = document.querySelector('div#div-senha #olho-fechado');
const olhoConfirmacaoSenha = document.querySelector('div#div-confirmacao-senha #olho-aberto');
const olhoFechadoConfirmacaoSenha = document.querySelector('div#div-confirmacao-senha #olho-fechado');
const enviar = document.querySelector('input[type = "submit"]');
const email = document.querySelector("#email");
const senha = document.querySelector('#senha');
const confirmarSenha = document.querySelector('#confirmacao-senha');
const erroSenha = document.querySelector('#container-senha > div.msg-erro > small');
const contEmail = document.querySelector("#container-email");
const contSenha = document.querySelector("#container-senha");
let tema_sitema = localStorage.getItem('theme') || 'light';
let erro = "";
var minusc = /[a-z]/; 
let maiusc = /[A-Z]/;
let num = /[0-9]/;
let carc = /[!|@|#|$|%|^|&|*|(|)|-|_|.]/;

btn.addEventListener('click', () => {
    let oldTema = localStorage.getItem('theme') || 'light';
    let newTema = oldTema == 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', newTema)
    temaAtual(newTema);
})

function verSenha(tipo) {
    if (tipo == 'text') {
        olhoSenha.style.display = 'block';
        olhoFechadoSenha.style.display = 'none';
        senha.type = tipo
    } else if (tipo == 'password') {
        olhoSenha.style.display = 'none';
        olhoFechadoSenha.style.display = 'block';
        senha.type = tipo
    }
}

function verConfirmacaoSenha(tipo) {
    if (tipo == 'text') {
        olhoConfirmacaoSenha.style.display = 'block';
        olhoFechadoConfirmacaoSenha.style.display = 'none';
        confirmarSenha.type = tipo
    } else if (tipo == 'password') {
        olhoConfirmacaoSenha.style.display = 'none';
        olhoFechadoConfirmacaoSenha.style.display = 'block';
        confirmarSenha.type = tipo
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
    } else if (senha.value.length > 20) {
        erro = 'Sua senha só pode conter até 20 caracteres!';
        return false
    } else {
        erro = '';
        return true
    }
    
}

temaAtual(tema_sitema)

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