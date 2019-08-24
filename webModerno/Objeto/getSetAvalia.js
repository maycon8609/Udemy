const motorista = {
  _pontos: 1,
  get pontos() {
    return this._pontos
  },
  set pontos(sinal) {
    if (sinal == '+') {
      this._pontos++
    } else if (sinal == '-') {
      this._pontos--
    } else {
      console.log(' operação invalida ')
    }
  }
}

console.log(motorista.pontos)
motorista.pontos = '+'
motorista.pontos = '+'
motorista.pontos = '+'
console.log(motorista.pontos)
motorista.pontos = '-'
motorista.pontos = '-'
console.log(motorista.pontos)
