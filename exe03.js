const prompt = require('prompt-sync')()

const grade = Number(prompt('digite sua nota '))

if(grade >= 6){
    console.log(" voce esta aprovado")
}else if (grade >= 5) {
    console.log("voce esta em recuperação")
}else{
    console.log("voce esta reprovado")
}
