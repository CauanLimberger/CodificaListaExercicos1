const prompt = require('prompt-sync')()

let sum = 0 



for (let i = 1; i <= 5; i++){
    let num = Number(prompt("digite um valor " + i + ":"))
    sum += num

}

console.log(`A soma dos valores é: ${sum}`);