const prompt = require('prompt-sync')()

let maca = Number(prompt("digite o numero de maças que voce quer comprar: "))
let preco 
if (maca < 12) {
    preco = 0.30
} else {
    preco = 0.25
}

let total = maca * preco

console.log(`O preço total da maçã é:${total}`);
