const carro = {
  velocidadeAtual: 0,
  velocidadeMaxima: 200,
  acelerar(delta) {
    if (this.velocidadeAtual + delta <= this.velocidadeMaxima) {
      this.velocidadeAtual += delta
    } else {
      this.velocidadeAtual = this.velocidadeMaxima
    }
  },
  status() {
    return ` ${this.velocidadeAtual}KM/H de ${this.velocidadeMaxima}KM/H `
  }
}

const ferrari = {
  modelo: '458 spider',
  velMax: 340
}

const volvo = {
  modelo: 'V40',
  status() {
    return ` ${this.modelo}: ${super.status()} `
  }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)
console.log()

volvo.acelerar(250)
console.log(volvo.status())

ferrari.acelerar(300)
console.log(ferrari.status())
