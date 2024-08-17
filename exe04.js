const prompt = require('prompt-sync')()

console.log("qual fast food voce mais gosta entre essas opçoes?")

console.log("1-- McDonalds")
console.log("2-- Burguer King")
console.log("3-- KFC")

let opcao = Number(prompt("digite a opcao: "))

switch (opcao) {
    case 1:
        console.log("voce prefere comer no McDOnalds")
        break
        
    case 2:
        console.log("voce prefere comer no Burger King")
        break
        
    case 3:
        console.log("voce prefere comer no KFC")
        break
        
    default:
        console.log("opcao invalida")
        break
        
        
}



