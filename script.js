const numeroCEP = document.querySelector(".cep");
const botaoBusca = document.querySelector(".buscar");
const infos = document.querySelector(".resultado");

function buscarCEP() {
    const cep = numeroCEP.value;

    fetch('https://viacep.com.br/ws/' + cep + '/json/', 
        {
        mode: 'cors' // Explicitly setting the mode to 'cors'
        }
    )
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        console.log(data)
        infos.innerHTML = `

        CEP: ${data.cep} <hr>
        Logradouro: ${data.logradouro} <hr>
        Complemento: ${data.complemento} <hr>
        Bairro: ${data.bairro} <hr>
        Localidade: ${data.localidade} <hr>
        UF: ${data.uf} <hr>
        DDD: ${data.ddd}`
        limpar();
    })
    .catch(function(error) {
        console.log(error);
    });
}

botaoBusca.addEventListener("click", buscarCEP);

function limpar() {
    
    numeroCEP.value = "";
    numeroCEP.placeholder = "Digite o CEP";
}
