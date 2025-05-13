
  document.getElementById("pesquisa-funcionario").addEventListener("input", function(event) {
    const input = event.target;
    input.value = input.value
      .toUpperCase() // Converte para maiúsculas
      .normalize("NFD") // Normaliza os caracteres Unicode
      .replace(/[\u0300-\u036f]/g, ""); // Remove os acentos
  });


document.addEventListener("DOMContentLoaded", function () {
    const selectFuncionario = document.getElementById("select-funcionario");
    const inputNome = document.getElementById("nome-funcionario");
    const inputPesquisa = document.getElementById("pesquisa-funcionario");

    // Evento para preencher o input ao selecionar um funcionário e limpar a pesquisa
    selectFuncionario.addEventListener("change", function () {
        inputNome.value = selectFuncionario.value;
        inputPesquisa.value = ""; // Limpa o campo de pesquisa
    });

    // Evento para filtrar os nomes no select enquanto digita no campo de pesquisa
    inputPesquisa.addEventListener("input", function () {
        const filtro = inputPesquisa.value.toLowerCase();
        const options = selectFuncionario.options;

        for (let i = 0; i < options.length; i++) {
            const nome = options[i].text.toLowerCase();
            options[i].style.display = nome.includes(filtro) ? "block" : "none";
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    let forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            submitForm(event, form.getAttribute('action'));
        });
    });
});

function submitForm(event, url) {
    event.preventDefault(); 
    var formData = new FormData(event.target);
    var submitButton = event.submitter;

    submitButton.innerHTML = "Enviando...";
    submitButton.style.border = "2px solid green";

    fetch(url, {
        method: 'POST',
        body: formData
    }).then(response => {
        if (response.ok) {
            alert('Dados enviados com sucesso');
            event.target.reset(); // Reseta o formulário após o sucesso
        } else {
            alert('Erro ao enviar os dados');
        }
        submitButton.innerHTML = "Enviar"; // Restaura o valor do botão
        submitButton.style.border = ""; // Restaura o estilo do botão
    }).catch(error => {
        alert('Erro ao enviar os dados');
        submitButton.innerHTML = "Enviar"; // Restaura o valor do botão em caso de erro
        submitButton.style.border = ""; // Restaura o estilo do botão em caso de erro
    });
}



function calcularNotaFinal() {
    const perguntas = document.querySelectorAll('input[type="radio"]:checked');
    let soma = 0;
    perguntas.forEach(pergunta => {
        soma += parseInt(pergunta.value);
    });
    document.getElementById('nota-final').value = soma;
}





      