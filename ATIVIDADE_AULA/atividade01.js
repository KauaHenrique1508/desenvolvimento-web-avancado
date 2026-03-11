const usuarios = [
  { nome: "Ana", idade: 20, ativo: true, compras: [100, 50, 25] },
  { nome: "Bruno", idade: 17, ativo: false, compras: [30, 20] },
  { nome: "Carlos", idade: 32, ativo: true, compras: [200, 150, 50, 100] },
  { nome: "Diana", idade: 25, ativo: true, compras: [] },
  { nome: "Eduardo", idade: 15, ativo: false, compras: [10] }
]

// CALCULO DO VALOR TOTAL DE COMPRAS
for(let usuario of usuarios){
let calcularTotalCompras = (compras) => {
    return compras.reduce((total, valor) => total + valor, 0);
}
 console.log(calcularTotalCompras(usuario.compras))
}
