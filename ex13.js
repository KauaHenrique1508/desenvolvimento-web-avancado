for (let numero = 1; numero <= 100; numero++) {

  let divisores = 0

  for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) {
      divisores++
    }
  }

  if (divisores === 2) {
    console.log(numero)
  }

}
//numeros primos