const form = document.getElementById('form-doacao');
const nomeInst = document.getElementById('nome-inst');
const numeroInst = document.getElementById('numero-inst');
const descricaoMsg = document.getElementById('descricao');
let formValido = false;

function validaInst(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    const valorDoacao = document.getElementById('valor-doacao');
    const mensagemSucesso = `O valor de: <b>${valorDoacao.value}</b> foi depositado para a instituição: <b>${nomeInst.value}</b> cujo número é: <b>${numeroInst.value}</b>, muito obrigado pela sua doação!`;

    formValido = validaInst(nomeInst.value)
    if (formValido) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        nomeInst.value = '';
        numeroInst.value = '';
        valorDoacao.value = '';
        descricaoMsg.value = '';
    } else {
        nomeInst.style.border= '1px solid red';
        numeroInst.style.border= '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
    }
})

nomeInst.addEventListener('keyup', function(e) {
console.log(e.target.value);
    formValido = validaInst(e.target.value);

    if (!formValido) {
        nomeInst.classList.add('error');
        numeroInst.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
    } else {
        nomeInst.classList.remove('error');
        numeroInst.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
    }
});