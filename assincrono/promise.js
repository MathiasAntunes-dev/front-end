const visualizador = (algo) => console.log(algo);

let minhaPromessa = new Promise((resolve, reject) => {
    let ok = false;

setTimeout(() => ok = true, 3000);
    
    if (ok){
        resolve("ok");

    }else{
        reject("ok");
    }
})

minhaPromessa.then(
    (valor) => visualizador(valor),
    (razao) => visualizador(razao)
)