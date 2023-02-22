const segredo = Math.floor(Math.random() * (100 - 0 + 1) + 0);
const tentativas = 5;

// usando for

for(let i = 0; i < tentativas; i++){
  const resposta = prompt("Digite um numero entre 0 e 10")
  if(resposta == segredo){
    alert("Parabens, você acertou! 🙂")
    break;
  } else if( resposta > segredo) {
    alert(`O numero é menor que ${resposta}! 🙁`)
  } else {
    alert(`O numero é maior que ${resposta}! 🙁`)
  }
  if(i == tentativas - 1){
    alert("Você perdeu 😢")
  }
}
