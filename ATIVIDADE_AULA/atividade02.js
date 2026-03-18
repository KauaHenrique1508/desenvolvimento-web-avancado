const numeros = [1,2,3,4,5,6]

const resultado = numeros
  .filter(n => n % 2 === 0)
  .map(n => n * 2)
  .reduce((acc, n) => acc + n, 0)

console.log(resultado)

const pedidos = [
  { id: 1, cliente: "Ana", total: 120, status: "aprovado" },
  { id: 2, cliente: "Bruno", total: 80, status: "pendente" },
  { id: 3, cliente: "Ana", total: 200, status: "aprovado" },
  { id: 4, cliente: "Carlos", total: 50, status: "cancelado" },
  { id: 5, cliente: "Bruno", total: 150, status: "aprovado" }
]
//Crie um novo array contendo apenas pedidos com status "aprovado"
const statusAprovado = pedidos.filter(p => p.status === "aprovado")
console.log("PEDIDOS COM STATUS APROVADO: ", statusAprovado)

//Gere um array contendo apenas os nomes dos clientes desses pedidos
//Utilize filter e map

const nomeCliente = pedidos
  .filter(p => p.status === "aprovado")
  .map(p => p.cliente)

console.log("NOMES DOS CLIENTES: ", nomeCliente)
