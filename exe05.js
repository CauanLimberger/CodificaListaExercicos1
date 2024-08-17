const prompt = require('prompt-sync')()


let peso = Number(prompt("digite o peso em kilos:"))

let altura = Number(prompt("digite a altura em metros:"))

let imc = peso / (altura * altura)

if (imc < 18.5){
    console.log("abaixo do peso!")
}else if (imc >= 18.5 && imc <= 24.9){
    console.log("peso normal")
}else if (imc >= 25 && imc <= 29.9){
    console.log("sobrepeso")
}else{
    console.log("obesidade")
}