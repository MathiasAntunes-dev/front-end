let dataAtual = new Date('2026-11-12');
let ano = dataAtual.getFullYear();
let mes = dataAtual.getMonth() + 1;
let dia = dataAtual.getDate();
let hora = dataAtual.getHours();
let minuto = dataAtual.getMinutes();
let segundos = dataAtual.getSeconds();
let fusoHorario = dataAtual.getTimezoneOffset();

let formatador = new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'full',
    timeStyle: 'short'
});

console.log(formatador.format(dataAtual))

console.log(`${dia < 10 ? `0${dia}`: dia}/${mes < 10 ? `0${mes}`: mes}/${ano} ${hora < 10 ? `0${hora}`: hora}:${minuto< 10 ? `0${minuto}`: minuto}:${segundos< 10 ? `0${segundos}`: segundos} ${fusoHorario}`);

// `${dia < 10 ? `0${dia}`: dia} -> se dia for menor que 10, ele irá colocar um "0" antes do número, ou seja, de dia 6, ele retornará 06