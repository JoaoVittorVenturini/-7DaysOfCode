let iniciar = prompt("Você deseja iniciar a calculadora? (s/n)"), 
    num1, 
    num2, 
    operacao, 
    resultado;

while(iniciar == "s"){
  operacao = prompt("Digite a operação que deseja realizar: \n 1. Adição \n 2. Subtração \n 3. Multiplicação \n 4. Divisão \n 9. Sair");

  function numeros(){ 
    num1 = Number(prompt("Digite o primeiro número: "));
    num2 = Number(prompt("Digite o segundo número: "));
  }
  
  function adicao(){
    numeros();
    resultado = num1 + num2;
    alert(`O resultado da adição é: \n ${num1} + ${num2} = ${resultado}`);
  }

  function subtracao(){
    numeros();
    resultado = num1 - num2;
    alert(`O resultado da subtração é: \n ${num1} - ${num2} = ${resultado}`);
  }

  function multiplicacao(){
    numeros();
    resultado = num1 * num2;
    alert(`O resultado da multiplicação é: \n ${num1} * ${num2} = ${resultado}`);
  }

  function divisao(){
    numeros();
    resultado = num1 / num2;
    alert(`O resultado da divisão é: \n ${num1} / ${num2} = ${resultado}`);
  }

  switch(operacao){
    case "1":
      adicao();
      break;
    case "2":
      subtracao();
      break;
    case "3":
      multiplicacao();
      break;
    case "4":
      divisao();
      break;
    case "9":
      alert("Até a próxima!");
      iniciar = "n";
      break;
    default:
      alert("Operação inválida!");  
  }
}