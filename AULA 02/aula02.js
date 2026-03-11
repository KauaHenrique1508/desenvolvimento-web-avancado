//LAÇO DE REPETIÇÃO

// FOR OF

let numeros = [1,3,5,7]

    for(let n of numeros){
        console.log(n)
    }


//FUNÇÕES REUTILIZAVEIS -- FUNCTION
function soma(a,b){
    return a+b
}

console.log(soma(5, 8))
console.log(soma ("Kauã ", 10))
console.log(soma(1.9 ,2))

//ARROW FUNCTION -- UTILIZADA EM CALLBACK(FUNCIONA COMO UMA FUNÇÃO)
const soma = (a, b) =>{
    return a + b
}

// OU

const soma = (a, b) => a + b