let requests = [12, 30, 5, 18, 40, 22, 8]
let limite = 25

let validas = 0
let acimaLimite = 0
let maior = requests[0]

for (let i = 0; i < requests.length; i++) {

  if (requests[i] <= limite) {
    console.log(requests[i], "OK")
    validas++
  } else {
    console.log(requests[i], "LIMIT EXCEEDED")
    acimaLimite++
  }

  if (requests[i] > maior) {
    maior = requests[i]
  }

}

console.log("Total válidas:", validas)
console.log("Total acima do limite:", acimaLimite)
console.log("Maior valor:", maior)