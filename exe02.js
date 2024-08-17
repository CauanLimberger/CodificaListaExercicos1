const prompt = require('prompt-sync')()


let idade = parseInt(prompt("Digite a idade:"));



    if (idade < 0) {
        console.log(  "Idade inválida")
    } else if (idade <= 12) {
        console.log("Voce é criança")
    } else if (idade <= 17) {
        console.log("Voce é adolescente")
    } else if (idade < 60) {
        console.log("Voce é adulto")
    } else {
        console.log("Voce é idoso")
    }



