const a = '20';
if(a === 20){
    console.log("Os valores são iguais");

}

console.clear()
const b = 10;
if(b == 40){
    console.log("São iguais")
}
else if(b > 5){
    console.log("São maiores");
}else{
    console.log("Não é igual");
}

let c = b == 10 ? "é igual a 10" : "São diferentes";
console.log(c);

let resultado = 3 != 10 ? "o 3 é menor " : "3 é igual a 4"
console.log(resultado)

// // SWITCH
const nota = 9;

switch(nota) {
    case  4:
        console.log("Reprovado!");
        break;
    case 8:
        console.log("Recuperação");
        break;
    case 10:
        console.log("Aprovado");
        break;
    default:
        console.log("Nota acima da média");
        break;
}


const button = document.querySelector('.button')

button.addEventListener('click', function(){
    console.log("Você clicou em mim")
})





