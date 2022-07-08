//Esse e meu primeiro codigo em JavaScript, eu nao sei o que serei de mim nessa linguaguem, mas bora!, a vida e feita de tentativas, bora tenta ?
// const  CONSTANT = "isso é uma constante";
// var variavel = "Isso é uma variavel";

// var combo = CONSTANT + variavel;

// -------------------------------------- function ----------------------------------------------------------------
function soma_dividido_1(a, b){
    var a = a;
    var b = b;
    const DIVISAO = 1;
    var soma = a + b / DIVISAO;
    return soma;
}
console.log(soma_dividido_1(1,2));

function returnEvenValue(array){
    let evenNums = []; 
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
            evenNums.push(array[i]);
        }else{
            return (`${array[i]} não è par`)
        }
    }
    return "Os numeros pares são:", evenNums;
}
let array = [2,18,10,2,4,18,1];

console.log(returnEvenValue(array));