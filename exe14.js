const prompt = require('prompt-sync')()

let num = Number(prompt("digite o numero  que voce quer fatorar: "))

let result = 1

for(let i = 2; i <= num; i++){
    result *= i

}

console.log(`o fatorial de ${num} é: ${result}`)
