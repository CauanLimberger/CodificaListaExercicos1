const prompt = require('prompt-sync')()


let num1 = Number(prompt("insira o primeiro numero: "))
let counter = 0
let sum = 0

while(num1 !== 0){
    sum += num1
    num1 = Number(prompt("insira o próximo número: "))
    counter++
}

console.log("a media é: " , (sum / counter).toFixed(2));
