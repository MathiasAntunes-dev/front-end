const url = "https://jsonplaceholder.typicode.com/users";

fetch(url)
    .then(resposta => {
        if ("resposta.ok"){
            throw new Error("Erro na rede: " + resposta.status);
        }
        return resposta.json;
    })
    .then(dados => {
        console.log("Dados reecbidos: \n", dados);
    })
    .catch( erro => console.error("Houve um problema com a resquisição: " + erro));