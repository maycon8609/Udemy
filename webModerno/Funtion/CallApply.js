function getPreco(imposto = 0, moeda = 'R$') {
  return ` ${moeda} ${this.preco * (1 - this.desconto) * (1 + imposto)} `
}

const p1 = {
  nome: 'macbook',
  preco: 4500,
  desconto: 0.1,
  getPreco
}

console.log(' macbook ' + p1.getPreco())

// call

const carro = {
  preco: 20000,
  desconto: 0.2
}
console.log(' carro 1 ' + getPreco.call(carro))
console.log(' carro 2 ' + getPreco.apply(carro))

// call com passagem de parametros (contexto = carro, imposto = 0.1, moeda = '$')
console.log(' carro call ' + getPreco.call(carro, 0.1, '$'))

// aply com passagem de parametros (contexto = carro, array[ imposto = 0.5, moeda = '$'])
console.log(' carro Apply ' + getPreco.apply(carro, [0.5, '$']))
