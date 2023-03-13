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
    valor = document.getElementById("valor").value;
    nomePagador = document.getElementById("nome-pagador").value;
    cpfCnpjPagador = document.getElementById("cpf_cnpj_pagador").value;
    referente = document.getElementById("referente");
    cidade = document.getElementById("cidade").value;
    data = new Date(document.getElementById("data").value);
    telefone = document.getElementById("telefone");
    cpfCnpjEmissor = document.getElementById("cpf_cnpj_emissor").value;
    obs = document.getElementById("obs");
}

function abrirRecibo() {
    obterValorForm();
}