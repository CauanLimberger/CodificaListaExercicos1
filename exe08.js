const prompt = require('prompt-sync')()

let val1 = Number(prompt("digite o primeiro valor: "))
let val2 = Number(prompt("digite o segundo valor: "))

if(val1 === val2) {
    console.error("os valores são iguais")
}

else if (val1 > val2){
    console.log(val2);
    console.log(val1);
}else {
    console.log(val1);
    console.log(val2);
}