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
    const mostrarUsuariosAtivos = (usuario) => {
        if(usuario.ativo){
            console.log(usuario.nome) 
        }   
}
    mostrarUsuariosAtivos(usuario) //faz a chamada da função 
}

//MOSTRAR MAIORES DE 18 ANOS
console.log("Usuários maiores de 18 anos:")

const mostrarMaioresDe18 = (usuario) => {
        for( n in usuario){
        if(usuario[n].idade > 18){
            console.log(usuario[n])
        }
    }
}
mostrarMaioresDe18(usuarios)
