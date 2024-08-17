const prompt = require('prompt-sync')();

let ladoA = Number(prompt("digite o primeiro  valor: "))
let ladoB = Number(prompt("digite o segundo  valor: "))
let ladoC = Number(prompt("digite o terceiro  valor: "))

if (ladoA < (ladoB + ladoC) && ladoB  < (ladoA + ladoC) && ladoC < (ladoA + ladoB)) {
    
    
    if (ladoA === ladoB && ladoB === ladoC) {
        
        console.log("é um triangulo equilátero ")
        
    } else if (ladoA === ladoB || ladoB === ladoC || ladoA === ladoC) {
        console.log("é um triangulo isósceles ")
    }
    
    else {
        console.log("é um triangulo escaleno ")
    }
    
}else {
    console.log("nao é um trangulo");
    
}




