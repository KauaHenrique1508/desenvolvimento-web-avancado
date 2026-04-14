const alunos = [{nome : "Kaua", idade : 20, curso: "BES",  notas : [7, 8, 9]},
        {nome : "Sabrina", idade : 20, curso: "Fisioterapia", notas : [4, 8, 6]},
        {nome : "Vania", idade : 46, curso: "Direito", notas : [1, 5, 2]},
        {nome : "Carlos", idade : 16, curso: "Matematica", notas : [10, 9, 8]}]
        
const templateString = alunos.map(aluno => aluno).forEach(({nome, idade, curso}) => {
    console.log(`Nome : ${nome} - Idade : ${idade} - Curso : ${curso} `) // template string - foreach tem a função de iterar sobre cada elemento do array 
})
        //Calcule a média de cada aluno usando map e reduce 
        const mediaNotas = alunos.map(aluno => {
const somaNotas = aluno.notas.reduce((soma, nota) => soma + nota, 0) // uma função dentro de outra/ o map pega o nome e o reduce as notas
    return { nome: aluno.nome, media: somaNotas / aluno.notas.length  }
})
console.log("Media: ", mediaNotas)   

 /* function mediaTradicional(notas){
    let soma = 0

    for(let nota of alunos){
        soma += nota
    }

        return alunos.length ? soma /  alunos.length : 0
}
console.log("Media Tradicional: ", mediaTradicional(alunos[0].notas)) */ // exemplo de uso da função tradicional para 
// Gere um array contendo apenas os nomes dos alunos aprovados (média >= 7) usando filter e map
 const aprovados = mediaNotas
  .filter(aluno => aluno.media >= 7)
  .map(aluno => aluno.nome)
console.log("Alunos Aprovados: ", aprovados)

const reprovados = mediaNotas
.filter(aluno => aluno.media < 7)
.map(aluno => aluno.nome)
console.log("Alunos Reprovados: ", reprovados)

const maioridade = alunos
.filter (aluno => aluno.idade >= 18)
.map(aluno => aluno.nome)
 console.log("Podem tirar carteira :", maioridade)


 //soma todos os numeros sem reduce
const numeros = [2, 3, 9, 6, 8]
   let soma = 0
for(let numero of numeros){
    soma += numero
    
}
console.log( soma )
 
 const pares = numeros
.filter (n => n %2 === 0)
console.log("Quantos são pares: ", pares.length) 

/* const pares = numeros.length %2 === 0
console.log("Pares : ", pares) */
 

const numeros2 = [5, 12, 8, 20, 3, 15]

const maioresQueDez = numeros2.filter(numero => numero > 10)
console.log("Maiores que 10 : ", maioresQueDez) // [12, 20, 15]


const produto = {
    nome: "Tênis",
    preco: 199.90,
    quantidade: 8
}
/* const produto1 = { nome: "Calça", preco: 200, quantidade: 3 }
const produto2 = { nome: "Camiseta", preco: 50, quantidade: 10 } */

const valorTotal = produto.preco * produto.quantidade

function estoque (produto){
    if(produto.quantidade < 5){
        return "ESTOQUE BAIXO"
        
    } else 
        return "ESTOQUE OK"
    }
   /*  console.log(estoque(produto1)) // estoque baixo
    console.log(estoque(produto2)) // estoque ok */
    console.log(estoque(produto))
console.log("Valor total em estoque:", valorTotal)  


const produtos2 = [{ nome: "Notebook", preco : 2000 }]
const valorTotal2 = produtos2.reduce((total, produto) => total + produto.preco, 0)
console.log("Valor total dos produtos: ", valorTotal2)