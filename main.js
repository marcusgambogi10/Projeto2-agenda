const form = document.getElementById('lista-contato');
const imgContato = '<img src="./imagens/Contato.png" alt="contato" />'
const contato = [];

let linhas = '';

form.addEventListener("submit", function(e) {
    e.preventDefault();

    adicionalLinha();   
    atualizaTabela();

    function adicionalLinha() {
        const inputNomeContato = document.getElementById('nome-contato');
        const inputNumeroContato = document.getElementById('numero-contato');

        if (contato.includes(inputNumeroContato.value)) {
            alert(`O contato: ${inputNumeroContato.value} já foi adicionado`);
        } else{
        contato.push(inputNumeroContato.value);
        
        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value = imgContato}</td>`;
        linha += '</tr>';
    
        linhas += linha;
        }
        inputNomeContato.value = '';
        inputNumeroContato.value = '';
    }

    function atualizaTabela() {
        const corpoTabela = document.querySelector('tbody');
        corpoTabela.innerHTML = linhas;
    }
});
