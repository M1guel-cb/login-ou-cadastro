const btn = document.querySelector('#btn');
const bola = document.querySelector('#bola');

const olhoSenha = document.querySelector('div#div-senha #olho-aberto');
const olhoFechadoSenha = document.querySelector('div#div-senha #olho-fechado');
const olhoConfirmacaoSenha = document.querySelector('div#div-confirmacao-senha #olho-aberto');
const olhoFechadoConfirmacaoSenha = document.querySelector('div#div-confirmacao-senha #olho-fechado');

const enviar = document.querySelector('button[type = "submit"]');
const criar = document.querySelector("input[value='Criar']");

const email = document.querySelector("#email");
const nome = document.querySelector("#nome");
const senha = document.querySelector('#senha');
const confirmacaoSenha = document.querySelector('#confirmacao-senha');

const contNome = document.querySelector("#container-nome");
const contEmail = document.querySelector("#container-email");
const contSenha = document.querySelector("#container-senha");
const contConfirmacaoSenha = document.querySelector("#container-confirmacao-senha");

const erroSenha = document.querySelector('#container-senha > div.msg-erro > small');

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
        confirmacaoSenha.type = tipo
    } else if (tipo == 'password') {
        olhoConfirmacaoSenha.style.display = 'none';
        olhoFechadoConfirmacaoSenha.style.display = 'block';
        confirmacaoSenha.type = tipo
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

function validarNome() {
    if (contNome) {
        if (nome.value == '') {
            return false
        }
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

function confirmarSenhas() {
    if (confirmacaoSenha) {
        if (senha.value != confirmacaoSenha.value) {
            return false
        }
    }
}

if (enviar){
    enviar.addEventListener('click', (e) => {
        e.preventDefault();
    
        if (validarEmail() == false) {
           contEmail.classList.add('erro');
           return
        } else {
            contEmail.classList.remove('erro')
        }
    
        if (validarSenha() == false) {
            erroSenha.innerHTML = erro;
            contSenha.classList.add('erro');
            return
        } else {
            contSenha.classList.remove('erro')
        }
});
}

if (criar) {
    criar.addEventListener('click', (e) => {
        e.preventDefault();

        if (validarNome() == false) {
            contNome.classList.add('erro');
            return
        } else {
            contNome.classList.remove('erro')
        }
        
        if (validarEmail() == false) {
            contEmail.classList.add('erro');
            return
        } else {
            contEmail.classList.remove('erro')
        }
        
        if (validarSenha() == false) {
            erroSenha.innerHTML = erro;
            contSenha.classList.add('erro');
            return
        } else {
            contSenha.classList.remove('erro')
        }

        if (confirmarSenhas() == false) {
            contConfirmacaoSenha.classList.add('erro');
            return
        } else {
            contConfirmacaoSenha.classList.remove('erro')
        }
    })
}

temaAtual(tema_sitema)