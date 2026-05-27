const form = document.getElementById("formEndereco");

const cepInput = document.getElementById("cep");
const logradouroInput = document.getElementById("logradouro");
const numeroInput = document.getElementById("numero");
const ufInput = document.getElementById("uf");

cepInput.addEventListener("input", () => {

    let valor = cepInput.value.replace(/\D/g, "");

    if (valor.length > 5) {
        valor = valor.replace(/^(\d{5})(\d{1,3})$/, "$1-$2");
    }

    cepInput.value = valor;
});

ufInput.addEventListener("input", () => {
    ufInput.value = ufInput.value.toUpperCase();
});

numeroInput.addEventListener("input", () => {
    numeroInput.value = numeroInput.value.replace(/\D/g, "");
});

form.addEventListener("submit", (event) => {

    event.preventDefault();

    const cep = cepInput.value.trim();
    const logradouro = logradouroInput.value.trim();
    const numero = numeroInput.value.trim();
    const uf = ufInput.value.trim();

    const regexCep = /^(\d{5})-(\d{3})$/;
    const regexUF = /^[A-Z]{2}$/;

    if (cep === "") {
        alert("O campo CEP é obrigatório.");
        return;
    }

    if (!regexCep.test(cep)) {
        alert("CEP inválido. Use o formato 00000-000.");
        return;
    }

    if (logradouro === "") {
        alert("O campo Logradouro é obrigatório.");
        return;
    }

    if (logradouro.length < 5) {
        alert("O logradouro deve possuir no mínimo 5 caracteres.");
        return;
    }

    if (numero === "") {
        alert("O campo Número é obrigatório.");
        return;
    }

    if (!/^\d+$/.test(numero)) {
        alert("O campo Número deve conter apenas dígitos.");
        return;
    }

    if (uf === "") {
        alert("O campo UF é obrigatório.");
        return;
    }

    if (!regexUF.test(uf)) {
        alert("UF inválida. Digite apenas 2 letras maiúsculas.");
        return;
    }

    alert("Endereço cadastrado com sucesso");

});