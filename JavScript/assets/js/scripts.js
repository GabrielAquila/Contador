alert("Bem vindo ao contador do Gabriel Áquila")

var currentNumberSpan = document.getElementById("currentNumber")
var currentNumber = 0
function Increment (){
    currentNumber = currentNumber + 1;
    currentNumberSpan.innerHTML = currentNumber   
}

function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberSpan.innerHTML = currentNumber  
}

