const letras = new Set();

letras.add("a");
letras.add("b");
letras.add("c");

console.log(letras);

const letrasGregas = new Set(["alfa", "beta", "gama"]);

console.log(letrasGregas);

console.log(letrasGregas.has("épdilon"));
console.log(letrasGregas.has("alfa"));