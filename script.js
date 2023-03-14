function validarCPFouCNPJ(cpfOuCnpj){
    const cpfInvalidos = [
    '00000000000000', '11111111111111', '22222222222222', '33333333333333',
    '44444444444444', '55555555555555', '66666666666666', '77777777777777', 
    '88888888888888', '99999999999999'];

    const cpf_tamanho = 11;
    const cnpj_tamanho = 14;

    let inputValue = cpfOuCnpj.value.replace(/[^\d]/g, '');

    if (inputValue.length == cpf_tamanho) {
        inputValue = inputValue.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
        cpfOuCnpj.maxLength = cpf_tamanho + 3; 
    } 
    else if (inputValue.length == cnpj_tamanho) {
        inputValue = inputValue.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
        cpfOuCnpj.maxLength = cnpj_tamanho + 4; 
    } 
    else {
        cpfOuCnpj.maxLength = cnpj_tamanho;
    }

    cpfOuCnpj.value = inputValue;

    if (cpfInvalidos.includes(inputValue)) {
        cpfOuCnpj.setCustomValidity("Invalid CPF/CNPJ!");
    } else {
        cpfOuCnpj.setCustomValidity("");
    }
}

function somenteNumeros(inputId) {
    document.getElementById(inputId).value = document.getElementById(inputId).value.replace(/[^\,0-9]*$/, "");
}

function obterValorForm() {
    const valor = document.getElementById("valor").value;
    nomePagador = document.getElementById("nome-pagador").value;
    nomeEmissor = document.getElementById("nome-emissor").value;
    cpfCnpjPagador = document.getElementById("cpf_cnpj_pagador").value;
    referente = document.getElementById("referente");
    cidade = document.getElementById("cidade").value;
    data = new Date(document.getElementById("data").value);
    telefone = document.getElementById("telefone");
    cpfCnpjEmissor = document.getElementById("cpf_cnpj_emissor").value;
    obs = document.getElementById("obs").value;
}

function abrirRecibo() {
    gerarRecibo();
}

function gerarRecibo(){
    obterValorForm();
    var recibo =`<h3>Recibo de pagamento</h3>
    <p style="text-align: justify;">Recebi(emos) de <strong>${nomePagador}</strong> - CPF/CNPJ nº <strong>${cpfCnpjPagador}</strong>, a importância de <strong>${valor}</strong> referente à ${referente}.</p>
    <p style="text-align: justify;">Para maior clareza firmo(amos) o presente recibo para que produza os seus efeitos, dando plena, rasa e irrevogável quitação, pelo valor recebido.</p>
    <h4 style="text-align: left;">Observação:</h4>
    <p style="text-align: left;">${obs}</p>
    <p id="textoFantasma" style="text-decoration: overline;">${nomeEmissor}</p>
    <p style="text-align: right; margin-right: 20px;">${cidade}, ${data}</p>
    <p style="text-align: center;">${numero}</p>`

    document.querySelector("#recibo").innerHTML = recibo;
}