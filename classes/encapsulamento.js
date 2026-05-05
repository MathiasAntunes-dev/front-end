class Carro { 
    constructor(nome, ano){
        this.nome = nome;
        this.ano = ano; 
    }
    idade(){
        const data = new Date();
        return data.getFullYear() - this.ano;
    }
};

let variavel = true;

const meuCarro = new Carro("Opala", 1972);
const carroDoQuarezma = new Carro("Corolla", 2019);

console.log(meuCarro.nome);
console.log("A idade do meu carro é " + meuCarro.idade() + " anos.");
console.log("O carro do Quarezma é um " +
    carroDoQuarezma.nome + " e tem " + 
    carroDoQuarezma.idade + " anos de idade."
);
