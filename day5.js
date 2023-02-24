let listaDeCompras = {
  bebida: [],
  fruta: [],
  verdura: [],
  carnes: [],
  limpeza: [],
  frios: [],
  laticinios: [],
  congelados: [],
  padaria: [],
  higiene: []
}

while(true){
  const compras = prompt("Você deseja adicionar um produto na sua lista de compras? (sim/não)");
  if(compras == "s" || compras == "sim"){
    const produto = prompt("Digite o nome do produto/item que você deseja comprar");
    const categoria = prompt("Digite a categoria. bebida, fruta, verdura, carnes, limpeza, frios, laticinios, congelados, padaria, higiene.");
    listaDeCompras[categoria].push(produto);
  } else {
    break;
  }
}
console.log("Essa é sua lista de compras" + listaDeCompras);