class Carro {
    constructor (nome){
        this.nome = nome;
    }
    static alo(){    // Static -> chamados apenas a partir da classe. 
        return "Alô!";
    }
}

const meuCarro = new Carro("Porsche");

console.log(Carro.alo());