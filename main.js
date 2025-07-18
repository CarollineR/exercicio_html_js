const form = document.getElementById('formulario');
const mensagem = document.getElementById('mensagem');

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const campoA = parseFloat(document.getElementById('campoA').value);
            const campoB = parseFloat(document.getElementById('campoB').value);

            if (campoB > campoA) {
                mensagem.textContent = "Formulário válido! O Campo B é maior que A.";
                mensagem.className = "valido";
            } else {
                mensagem.textContent = "Formulário inválido! O Campo B deve ser maior que A.";
                mensagem.className = "invalido";
            }
        });