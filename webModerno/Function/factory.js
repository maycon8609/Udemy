function criarProduto(nome, preco) {
  return {
    nome,
    preco
  }
}

let produtos = []

produtos.push(criarProduto('celular', 800))
produtos.push(criarProduto('tv', 1500))
produtos.push(criarProduto('relogio', 500))

for (i in produtos) {
  console.log(produtos[i].nome, produtos[i].preco)
}
