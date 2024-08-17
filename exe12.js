const prompt = require('prompt-sync')()

let num = Number(prompt('Digite um número que voce quer saber a tabuada: '))

for(let i = 0; i <= 10; i++){
    console.log(`${num} * ${i} =`, num * i)
}
