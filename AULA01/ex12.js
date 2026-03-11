let valores = [12, 7, 25, 3, 18, 10, 2, 30]
let soma = 0
let maior = valores[0]
let menor = valores[0]
let cont = 0

for(let i = 0; i < valores.length; i++){
    soma += valores[i]

    if(valores[i] > maior)
          maior = valores[i]

    if(valores[i] < menor)
          menor = valores[i]

    if(valores[i]>10)
        cont++
}

console.log("Maior valor:", maior)
console.log("Menor valor:", menor)
console.log("Média:", soma/valores.length)
console.log("Quantidade de números maiores que 10:", cont)