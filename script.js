var email = document.querySelector('#email');
var senha = document.querySelector('#senha');
var divEmail = document.querySelector('#d-email');
var divSenha = document.querySelector('#d-senha');
var erroEmail = document.querySelector('#e-erro');
var erroSenha = document.querySelector('#s-erro');

function bora() {
    if (email == '') {
        erro('Preencha este campo', 'email')
    }
    else if (senha == '') {
        erro('Preencha este campo', 'senha')
    }
}

function erro(msg, loc) {
    if (loc == 'email') {
        erroEmail = msg;
        email.classList.toggle('erro');
    } else if (loc == 'senha') {
        erroSenha.innerHTML = msg;
        senha.classList.toggle('erro');
    }
}