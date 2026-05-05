let num3 = 7
function somarNumeros(num1, num2){
    return num1 + num2 + num3
}
console.log(somarNumeros(2, 4));


const calcularFrete = function(distancia, peso){
    return (distancia * 0.5) + (peso * 2);
}
console.log("O frete é de R$: " + calcularFrete(100, 5))


const calcularFrete2 = (distância, peso) => {
    return (distância * 0.5) + (peso * 2);
}
console.log("O frete é de R$: " + calcularFrete2(100, 5))


const calcularFrete3 = distancia => distancia * 0.5;
console.log("O frete é de R$: " + calcularFrete3(100));

const calculadora = (num1, num2, operacao) => {
    return operacao(num1, num2);
}

let num1 = 2;
let num2 = 3;
const operacao = (num1, num2) => num1 + num2;

console.log(calculadora(
    num1 = 2,
    num2 = 3,
    operacao = conta
))