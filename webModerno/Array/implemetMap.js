Array.prototype.map2 = function (callback) {
  const newArray = []
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this))
  }
  return newArray
}

const carrinho = [
  '{"nome": "Borracha", "preco": 3.45}',
  '{"nome": "Caderno", "preco": 12.00}',
  '{"nome": "Marca texto", "preco": 4.00}',
  '{"nome": "Caneta", "preco": 2.50}'
]

const paraObj = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const result = carrinho.map2(paraObj).map2(apenasPreco)
console.log(result)
