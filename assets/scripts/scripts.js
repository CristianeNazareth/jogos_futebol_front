// window.alert('Minha primeira mensagem')
// window.confirm('Esta gostando do java script')
// window.prompt('Qual é seu nome?')
function preencher_tabela(data) {
    const tabela = document.querySelector("#js-tabela tbody");
    console.log(tabela);

    for (let i in data) {
        const partida = data[i];
        const linha = document.createElement("tr");

        const time1 = partida['time1'];
        const time2 = partida['time2'];
        const data_partida = partida['data_partida'];

        const celula_time1 = document.createElement("td");
        const celula_time2 = document.createElement("td");
        const celula_data_partida = document.createElement("td");

        celula_time1.innerText = time1;
        celula_time2.innerText = time2;
        celula_data_partida.innerText = data_partida;

        linha.appendChild(celula_time1);
        linha.appendChild(celula_time2);
        linha.appendChild(celula_data_partida);

        tabela.appendChild(linha);

    }
}

// usando promise
function consultar_api_promise() {
    fetch('http://localhost:5000/partidas')
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            preencher_tabela(data);
        })
        .catch(err => console.log(err));
}

// usando async/await
async function consultar_api() {
    const response = await fetch('http://localhost:5000/partidas');
    const data = await response.json();
    preencher_tabela(data);
}

// executa funcoes
consultar_api();