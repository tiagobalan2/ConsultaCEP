const form = document.querySelector("form");
const input = document.querySelector("input")
const button = document.querySelector("button")


function buscarCEP() {
    const numeroCEP = input.value;
    const retorno = document.querySelector(".retorno")



    fetch('https://viacep.com.br/ws/' + numeroCEP + '/json/', 
        {
        mode: 'cors' // Explicitly setting the mode to 'cors'
        }
    )
    .then(function(res) {
        if(!res.ok) {
            throw new Error("CEP não pode ser consultado")
        }
        return res.json();
    })
    .then(function(data) {
        console.log(data)
        retorno.innerHTML = `

        <span class="diferente">CEP:</span> <br> ${data.cep} <hr>
        <span class="diferente">Logradouro:</span> <br> ${data.logradouro}  <hr>
        <span class="diferente">Complemento:</span> <br> ${data.complemento} <hr>
        <span class="diferente">Bairro:</span> <br> ${data.bairro} <hr>
        <span class="diferente">Localidade:</span> <br> ${data.localidade}  <hr>
        <span class="diferente">UF:</span> <br> ${data.uf} <hr>
        <span class="diferente">DDD:</span> <br> ${data.ddd} <br>`
        limpar();

    })
    .catch(function(error) {
        console.log(error);
        retorno.innerHTML = `Erro ao consultar o CEP`
    });

}

button.addEventListener("click", buscarCEP);


function limpar() {
    
    input.value = "";
    input.placeholder = "Digite o CEP";
}
