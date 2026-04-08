const numeros = [1,2,3,4,5,6]

const resultado = numeros
  .filter(n => n % 2 === 0)
  .map(n => n * 2) //.map permite transformar cada elemento do array, 
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

// Calcule o valor total de vendas (somente pedidos aprovados)

const valorTotal = pedidos
.filter(p => p.status === "aprovado")
.map(p => p.total)
.reduce((soma, p) => soma + p, 0)

console.log("VALOR TOTAL DE PEDIDOS APROVADOS: ", valorTotal)

//o valor médio das vendas usando reduce
const valorMedio = pedidos
  .filter(p => p.status === "aprovado")
  .map(p => p.total)
  .reduce((soma, p) => soma + p, 0) / statusAprovado.length

console.log("VALOR MÉDIO DAS VENDAS APROVADAS: ", valorMedio)

/* Hash Table (Agrupamento por Cliente)
Crie uma estrutura que agrupe os pedidos por cliente. */
//usando reduce e Map

const agrupamentoReduce = pedidos.reduce((acc, p) => {
  if (!acc[p.cliente]) {
    acc[p.cliente] = [] // Verifica se já existe uma lista para o cliente, caso contrário, cria uma nova lista vazia
  }
  acc[p.cliente].push(p)  // Adiciona o pedido atual à lista do cliente(push) push : Adiciona um elemento ao final de um array. Se a lista do cliente já existir, o pedido atual será adicionado a essa lista. Caso contrário, uma nova lista será criada e o pedido será adicionado a ela.
  return acc
}, {})

console.log("PEDIDOS AGRUPADOS POR CLIENTE: ", agrupamentoReduce);

/* const mapa = new Map()
pedidos.forEach(p => {
  const listaCliente = mapa.get(p.cliente) || [] // Verifica se já existe uma lista para o cliente, caso contrário, cria uma nova lista vazia
  listaCliente.push(p) // Adiciona o pedido atual à lista do cliente(push) push : Adiciona um elemento ao final de um array. Se a lista do cliente já existir, o pedido atual será adicionado a essa lista. Caso contrário, uma nova lista será criada e o pedido será adicionado a ela.
  mapa.set(p.cliente, listaCliente)
})
console.log("PEDIDOS AGRUPADOS POR CLIENTE: ", mapa) */