/* Crie um novo array com:

a) Todos os números dobrados
b) Todos os números ao quadrado
 */
const numeros = [1, 2, 3, 4, 5]
const dobrados = numeros.map(n => n * 2)
 console.log("NUMEROS DOBRADOS: ", dobrados)
const quadrado = numeros.map(n => n * n)
 console.log("NUMEROS AO QUADRADO: ", quadrado)

//--------------------------------------------

 /* Retornar apenas os nomes dos atletas
Criar um novo array com: "Nome - tempo" */
const atletas = [
  { nome: "Kauã", tempo: 3.55 },
  { nome: "Gustavo", tempo: 4.10 },
  { nome: "Cael", tempo: 3.80 }
]

const nomeAtletas = atletas.map(a => `${a.nome}` )
console.log("NOMES: ", nomeAtletas)

const nomeTempo = atletas.map(a => `${a.nome} - ${a.tempo}` )
console.log("NOME - TEMPO: ", nomeTempo)

/* Apenas atletas com tempo menor que 4.00 */

const tempoMenor = atletas.filter(a => a.tempo < 4.00)
console.log("Atletas com tempos menores que 4.00: ", tempoMenor)
//-------------------------------------------

/* a) Um array só com números maiores que 20
b) Um array só com números menores ou iguais a 20 */
/* Somar todos os valores */
/* Retorne o maior número usando .reduce() */

const numeros1 = [10, 25, 30, 5, 18, 40];

const numMaior20 = numeros1.filter(n => n > 20)
console.log("NUMEROS MAIOR DE 20: ", numMaior20)

const numMenor20 = numeros1.filter(n => n <= 20)
console.log("NUMEROS MENORES OU IGUAIS A 20: ", numMenor20) 

const somaTotal = numeros1.reduce((cont, total) => cont + total, 0)
console.log("SOMA TOTAL: ", somaTotal)

const maiorNumero = numeros1.reduce((maior, atual) => atual > maior ? atual : maior, 0)
console.log("MAIOR NÚMERO: ", maiorNumero)


//--------------------------------------------

