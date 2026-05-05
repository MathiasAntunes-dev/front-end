const pessoa = {
    nome: "João",
    sobrenome: "Roccela",
    idade: 40,
    cargo: "Instrutor"
};

const entidade = new Map ([
    ["nome", "João"],
    ["sobrenome", "Roccela"],
    ["idade", 40],
    ["cargo", "Instrutor"]
]);

console.log(entidade.get("sobrenome"));
console.log(pessoa.sobrenome);

const professor = JSON.stringify(pessoa);
console.log(professor);

const aluno = `{"nome":"Bento", "sobrenome":"Andrade", "idade":69, "matricula":true}`
const alunoObjeto = JSON.parse(aluno);
console.log(alunoObjeto);
console.log(alunoObjeto.nome);
console.log(aluno.nome);

for (let x in pessoa){
    console.log(pessoa);
}