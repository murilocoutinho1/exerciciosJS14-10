exercicio1
let nome = "Murilo";
let idade = "23";
let ondeMoro = "Maringá";
console.log (`Meu nome é ${nome}, tenho ${idade} anos e moro em ${ondeMoro}`);

exercicio2
let largura = 13;
let altura = 22;
fazer o calculo
let area = (altura * largura);
console.log("Sabendo que o cálculo da área é largura * altura:");
console.log(`O objeto tem uma área de ${area} m²`);

exercicio3
let temperaturaCelsius = 25;
console.log(`O valor em Celsius é ${temperaturaCelsius}°`);
let temperaturaFahrenheit = ((temperaturaCelsius * 9)/ 5 ) + 32;;
console.log(`Após conversão, vemos que ${temperaturaCelsius}°C é igual a ${temperaturaFahrenheit}°F`);

exercicio4
let saldo = 2300;
let deposito = 15000;
let saque = 11900;
let tarifaFixa = 14.99;
console.log(`Seu saldo era de R$${saldo}!`)
saldo += deposito;
console.log(`Após seu depósito de R$${deposito}, você ficou com R$${saldo}`)
saldo += -saque;
console.log(`Após seu saque de R$${saque}, você ficou com R$${saldo}`)
saldo += -tarifaFixa;
console.log(`A tarifa cobrada foi de R$${tarifaFixa}, você ficou com R$${saldo}`)

exercicio5
let preco = 1250;
const descontoPorcent = 10/100;
console.log(`O valor do produto é R$${preco}`);
preco -= preco * descontoPorcent;
console.log(`O valor com desconto ficou R$${preco}`);

exercicio6
let numero = 7
if (numero % 2 === 0)
{
    console.log(`O número ${numero} é par!`)
}
else
{
    console.log(`O número ${numero} é ímpar!`)
}

exercicio7
const nota1 = 8.8;
const nota2 = 7.8;
const nota3 = 3.8;
let media = (nota1 + nota2 + nota3) / 3;
if (media >= 7)
{
    console.log(`Média: ${media.toFixed(2)}! Aprovado!`);
}
else if (media >= 5 && media < 7)
{
    console.log(`Média: ${media.toFixed(2)}! Recuperação!`)
}
else
{
    console.log(`Média: ${media.toFixed(2)}! Reprovado!`)
}

exercicio8
let renda = 5899;
console.log(`Sua renda é R$${renda}`);
if(renda < 2000)
{
    console.log(`Você é isento de imposto!`)
}
else if (renda >= 2000 && renda < 5000)
{
    console.log(`Você paga 5% de imposto!`)
}
else if (renda >= 5000 && renda < 10000)
{
    console.log(`Você paga 10% de imposto!`)
}
else
{
    console.log(`Você paga 15% de imposto!`)
}

exercicio9
let horario = 4;
if (horario >= 5 && horario <= 11)
{
    console.log("Bom dia")
}
else if (horario >= 12 && horario <= 17)
{
    console.log("Boa tarde")
}
else
{
    console.log("Boa noite")
}

exercicio10
const idade = 18;
let temAutorizacao = false;
if (idade >= 18)
{
    temAutorizacao === true;
    console.log("Entrada permitida!");
}
else if (idade < 18 && temAutorizacao === true)
{
    temAutorizacao === true;
    console.log("Entrada permitida!");
}
else
{
    console.log("Entrada PROIBIDA!");
}

exercicio11
for (let i = 1; i <= 50; i++)
{
    if (i % 3 === 0)
    console.log(i)
}

exercicio12
let soma = 0
for (let i = 1; i <= 100; i++)
{
    if (i % 2 === 0)
    {
        soma += i;
    }
}
console.log(soma)

exercicio13
for (let i = 100; i <= 100 && i >= 0; i--)
{
    console.log(i);
}

exercicio14
let N = 8
let resultado = '';
for (let i = 1; i <= 10; i++) {
  resultado += `${N} x ${i} = ${N * i}\n`;
}
console.log(resultado);

exercicio15
let n = 10;
let a = 0;
let b = 1;
console.log(a);
console.log(b);
for (let i = 2; i < n; i++)
{
  let c = a + b;
  console.log(c);
  a = b;
  b = c;
}

exercicio16
const nomes = ["Murilo", "Sheren", "Katarina", "Koraline"];

nomes.forEach((nome, indice) =>
    {
  console.log(indice + ": " + nome);
});

exercicio17
const numeros = [5, 12, 8, 20, 3, 15, 7];
const maioresQueDez = [];
numeros.forEach(function(numero) {
  if (numero > 10) {
    maioresQueDez.push(numero);
  }
});
console.log(maioresQueDez);