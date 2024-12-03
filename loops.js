console.log("Listas");
const listaDeDestinos = [
    "São Paulo",
     "Salvador", 
     "Bahia"
    ];

const idadeComprador = 18;
const acompanhado = true;
let temPassagemComprada = false;
const destino = "Salvador";

console.log("Destinos possiveis");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || acompanhado == true;

let contador = 0;
let destinoExiste = false
while(contador < 3){
    
    if (listaDeDestinos[contador] == destino){
        destinoExiste = true;
        break
    }
    contador += 1;
}
 console.log("Destino existe: ", destinoExiste)

 if (podeComprar && destinoExiste){
    console.log("Boa viagem")
 }else{
    console.log("Desculpe, tivemos 1 erro")
 }

for(let cont = 0; cont < 3; cont ++){
    if (listaDeDestinos[contador] == destino){
        destinoExiste = true;
    }

}