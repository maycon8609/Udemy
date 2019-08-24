const carrinho = [
  '{"nome": "Borracha", "preco": 3.45}',
  '{"nome": "Caderno", "preco": 12.00}',
  '{"nome": "Marca texto", "preco": 4.00}',
  '{"nome": "Caneta", "preco": 2.50}'
]

const paraObj = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const result = carrinho.map(paraObj).map(apenasPreco)
console.log(result)
