console.log("Listas")

const listaDeDestinos = new Array("São Paulo", "Salvador", "Bahia")
const acompanhado = true
const idadeComprador = 18
const temPassagemComprada = true

if (idadeComprador >= 18 || acompanhado == true) {
    listaDeDestinos.splice(2, 1)
    console.log("Maior de Idade")
} else{
    console.log("Sai dai")
}

console.log("Embarque: \n")
if(idadeComprador >= 18 && temPassagemComprada){
    console.log("Boa viagem ")
} else {
    console.log("sai dai")
}
console.log(listaDeDestinos)
console.log(idadeComprador < 18)
console.log(idadeComprador > 18)
console.log(idadeComprador >= 18)
console.log(idadeComprador <= 18)
console.log(idadeComprador == 18) 