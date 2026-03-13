const usuarios = [
  { nome: "Ana", idade: 20, ativo: true, compras: [100, 50, 25] },
  { nome: "Bruno", idade: 17, ativo: false, compras: [30, 20] },
  { nome: "Carlos", idade: 32, ativo: true, compras: [200, 150, 50, 100] },
  { nome: "Diana", idade: 25, ativo: true, compras: [] },
  { nome: "Eduardo", idade: 15, ativo: false, compras: [10] }
]

// CALCULO DO VALOR TOTAL DE COMPRAS
console.log("Valor total de compras de cada usuário:")
for(let usuario of usuarios){
let calcularTotalCompras = (compras) => {
    return compras.reduce((total, valor) => total + valor, 0)
}
 console.log(calcularTotalCompras(usuario.compras))
}

//MOSTRAR USUÁRIOS ATIVOS
console.log("Usuários ativos:") //usuando arrow function

for(let usuario of usuarios){
    const usuariosAtivos = (usuario) => {
        if(usuario.ativo){
            console.log(usuario.nome) 
        }   
}
    usuariosAtivos(usuario) //faz a chamada da função 
}

//MOSTRAR MAIORES DE 18 ANOS
console.log("Usuários maiores de 18 anos:")

const maioresDe18 = (usuario) => {
        for( n in usuario){
        if(usuario[n].idade > 18){
            console.log(usuario[n])
        }
    }
}
maioresDe18(usuarios) // mostra os objetos dos usuários maiores de 18 anos


//USUARIO COM MAIOR VOLUME
console.log("Usuário com maior volume de compras:")
const usuarioMaiorVolume = (usuarios) => {
    let maiorVolume = 0
    let usuarioMaior = null
    for(let usuario of usuarios){
        const totalCompras = usuario.compras.reduce((total, valor) => total + valor, 0)//.reduce soma os valores do array
        if(totalCompras > maiorVolume){
            maiorVolume = totalCompras
            usuarioMaior = usuario
        }
    }
    return usuarioMaior;
}
console.log(usuarioMaiorVolume(usuarios)); //mostra o objeto do usuário com maior volume de compras

//COERÇÃO DE TIPOS
console.log("Coerção de tipos:")
console.log("5" + 2);
console.log("5" - 2);
console.log(true + 1);
console.log(false == 0);
console.log(false === 0);  // O operador == compara os valores, enquanto o operador === compara os valores e os tipos. Portanto, false == 0 é true porque ambos são considerados falsy, mas false === 0 é false porque são de tipos diferentes (boolean e number).

//DESAFIO ARROW FUNCTION VS FUNCTION
console.log("Desafio: Arrow Function vs Function") // A diferença entre uma função tradicional (function) e uma arrow function (=>) está principalmente no comportamento do "this". Em uma função tradicional, o valor de "this" é determinado pelo contexto de execução, ou seja, como a função é chamada. Já em uma arrow function, o valor de "this" é léxico, ou seja, ele herda o valor de "this" do contexto onde a função foi definida.
const pessoa = {
  nome: "Maria",
  falar: function(){
    console.log(this.nome); // Neste caso, "this" se refere ao objeto "pessoa", então o resultado será "Maria"
  }
};
pessoa.falar();


const pessoa2 = {
  nome: "Maria",
  falar: () => {
    console.log(this.nome);// Neste caso, "this" não se refere ao objeto "pessoa2", mas sim ao contexto onde a função foi definida (que é o escopo global). Portanto, o resultado será undefined, pois "nome" não está definido no escopo global.
  }
};
pessoa2.falar();

/* Execute os dois exemplos e responda:

Qual deles funciona corretamente? 
Resposta: O primeiro exemplo funciona corretamente, pois a função tradicional (function) tem seu próprio contexto de "this" que se refere ao objeto "pessoa". Já o segundo exemplo não funciona como esperado, pois a arrow function (=>) herda o contexto de "this" do escopo onde foi definida, que é o escopo global, resultando em undefined para "this.nome".

Por que o outro não funciona?
Resposta: O segundo exemplo não funciona porque a arrow function não tem seu próprio contexto de "this". Em vez disso, ela herda o valor de "this" do escopo onde foi definida. Como a função foi definida no escopo global, "this" se refere ao objeto global (window no navegador), e como "nome" não está definido nesse escopo, o resultado é undefined.

Qual é o comportamento de this em arrow functions?
Resposta: O comportamento de "this" em arrow functions é léxico, o que significa que ele herda o valor de "this" do contexto onde a função foi definida. Isso é diferente das funções tradicionais, onde "this" é determinado pelo contexto de execução (como a função é chamada). Em uma arrow function, "this" não se refere ao objeto que chama a função, mas sim ao contexto onde a função foi criada.
 */

//EXERCÍCIO EXTRA:
/* Exemplo de saída:

{
 totalUsuarios: 5,
 usuariosAtivos: 3,
 usuariosInativos: 2,
 mediaIdade: 21.8,
 maiorComprador: "Carlos"
} */
console.log("Exercício extra: Gerar relatório de usuários")
const gerarRelatorio = (usuarios) => {
    const totalUsuarios = usuarios.length
    const usuariosAtivos = usuarios.filter(usuarios => usuarios.ativo).length //.filter filtra os usuários ativos
    const usuariosInativos = usuarios.filter(usuarios => !usuariosAtivos)
    const mediaIdade = usuarios.reduce((total, usuario) => total + usuario.idade, 0) / totalUsuarios
    const maiorComprador = usuarios.reduce((maior, usuario) => {
        const totalCompras = usuario.compras.reduce((total, valor) => total + valor, 0)
        return totalCompras > maior.compras.reduce((total, valor) => total + valor, 0) ? usuario : maior
    }, usuarios[0])
   console.log(
    totalUsuarios,
    usuariosAtivos,   
    usuariosInativos.length,
    mediaIdade,
    maiorComprador.nome
   )
}      
