const nome = prompt("Digite o seu nome");
const idade = prompt(`${nome}, digite a sua idade`);
const linguagem = prompt(`${nome}, qual linguagem de programação você está estudando?`);

alert(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`)

const extra = prompt(`Você gosta de estudar ${linguagem}? Responda 1 para SIM e 2 para NÃO`);

if(extra == 1) {
  alert("Muito bom! Continue estudando e você terá muito sucesso.");
} else if(extra == 2) {
  alert("Ahh que pena... Já tentou aprender outras linguagens?")
} else {
  alert("Você não digitou um valor válido.")
}