let listaDeCompras = [
  {categoria: "bebida", itens: []},
  {categoria: "fruta", itens: []},
  {categoria: "verdura", itens: []},
  {categoria: "carnes", itens: []},
  {categoria: "limpeza", itens: []},
  {categoria: "frios", itens: []},
  {categoria: "laticinios", itens: []},
  {categoria: "congelados", itens: []},
  {categoria: "padaria", itens: []},
  {categoria: "higiene", itens: []},
  {categoria: "outros", itens: []}
];

let lista, 
    produto, 
    categoria,
    categoriaEscolhida, 
    iniciar = prompt("Você deseja iniciar a lista de compras? (s/n)");

while(iniciar == "s"){
  listaDeCompras.map(x => x.lenght > 0) ? 
  lista = prompt("O deseja fazer? \n 0. reiniciar a lista de compras \n 1. ver a lista de compras \n 2. adicionar um produto na lista de compras \n 3. remover um produto da lista de compras \n 9. sair") :
  lista = prompt("O deseja fazer? \n 0. reiniciar a lista de compras \n 1. ver a lista de compras \n 2. adicionar um produto na lista de compras \n 9. sair")
  
  switch(lista){
    case "0":
      listaDeCompras.forEach(x => x.itens = [])
      break;

    case "1":
      console.log(listaDeCompras);
      break;

    case "2":
      categoria = prompt("Digite a categoria. bebida, fruta, verdura, carnes, limpeza, frios, laticinios, congelados, padaria, higiene.");
      produto = prompt("Digite o nome do produto/item que você deseja adicionar na lista de compras");

      categoriaEscolhida = listaDeCompras.filter(x => x.categoria == categoria)

      if(categoriaEscolhida.length > 0)
        categoriaEscolhida[0].itens.push(produto);

      else listaDeCompras.filter(x => x.categoria == "outros")[0].itens.push(produto);
      break;

    case "3":
      console.log(listaDeCompras);
      categoria = prompt("Digite a categoria. bebida, fruta, verdura, carnes, limpeza, frios, laticinios, congelados, padaria, higiene.");
      produto = prompt("Digite o nome do produto/item que você deseja remover da lista de compras");
      
      categoriaEscolhida = listaDeCompras.filter(x => x.categoria == categoria)

      let teste = categoriaEscolhida[0].itens.indexOf(produto);
      if(teste == -1)
        alert("Não foi possível encontrar o item dentro da lista!");

      else if(teste == undefined)
        alert("Não foi possível encontrar a categoria!");

      else listaDeCompras.filter(x => x.categoria == categoria)[0].itens.splice(teste);
      
      console.log(listaDeCompras);
      break;
    
    case "9":
      iniciar = "n";
      break;
    
    default:
      alert("Opção inválida");
      break;
  }
}
alert("Você pode verificar sua lista de compras no console do navegador");
console.log(listaDeCompras);