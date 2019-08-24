const produtos = [
  { nome: 'Notbook', preco: 2500, fragil: true },
  { nome: 'Celular Nokia', preco: 200, fragil: false },
  { nome: 'Case notbook', preco: 200, fragil: false },
  { nome: 'Ipad', preco: 4000, fragil: true },
  { nome: 'Relogio', preco: 3000, fragil: false },
]

const caro = produto => produto.preco >= 2500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))
