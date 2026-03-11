//var idade = 70

/* if (idade < 18) {
  console.log("MENOR QUE 18")
}

else if (idade >= 18 && idade <= 60) {
  console.log("ENTRE 18 E 60")
}

else {
  console.log("MAIOR QUE 60")
} */

 const readline = require("readline")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question("Digite a idade: ", function(idade) {
  
   if (idade < 18) {
  console.log("MENOR QUE 18")
}

else if (idade >= 18 && idade <= 60) {
  console.log("ENTRE 18 E 60")
}

else {
  console.log("MAIOR QUE 60")
}
  rl.close()
}) 