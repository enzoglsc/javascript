// == igual (com conversao)
// === igual (valor e tipo)
// != diferente (com conversao)
// !== diferente (valor e tipo)
// > maior que
// < menor que
// >= maior ou igual 
//<= menor ou igual 
// && e
// || ou
// | nao

console.log(5=="5")
console.log(5==="5")

// Ex:

let idade = 18 
console.log(idade>=18)

// Ex:

let SenhaCorreta = "1234"
let SenhaDigitada = "1234"

console.log(SenhaCorreta===SenhaDigitada)

// Ex:

let temperatura = 45

console.log("Esta quente?",temperatura >= 30)

// Ex:

console.log(true && false)
console.log(true || false)

// Ex:

let idade2 = 21
let temCarteira = true 
let podeDirigir = idade >= 18 && temCarteira

console.log("Pode dirigir?", podeDirigir)