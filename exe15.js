
const count = 10;

let a = 0;
let b = 1;

console.log(a);


if (count > 1) {
    console.log(b);
}

for (let i = 2; i < count; i++) {
    let proximo = a + b
    console.log(proximo)
    a = b
    b = proximo
}
