document.getElementById("formulario").addEventListener("submit", function (event) {
    // Previne o comportamento padrão do formulário (evita que a página seja recarregada)
    event.preventDefault();

    // Pega os valores dos campos
    let valorA = parseFloat(document.getElementById("inputA").value);
    let valorB = parseFloat(document.getElementById("inputB").value);

    let mensagem = document.getElementById("mensagem");


    // Validação
    if (valorB > valorA) {
        mensagem.textContent = "Formulário válido!";
        mensagem.style.background = "green";
    } else {
        mensagem.textContent = "Formulário inválido! O número B deve ser maior que o número A.";
        mensagem.style.background = "red";
    }

    // Exibe a mensagem
    mensagem.style.display = "block";
});