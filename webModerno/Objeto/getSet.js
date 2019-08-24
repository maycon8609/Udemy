const sequencia = {
  _sequencia: 1,
  get valor() {
    return this._sequencia++
  },
  set valor(valor) {
    if (valor > this._sequencia)
      this._sequencia = valor
  }
}

console.log(sequencia.valor, sequencia.valor, sequencia.valor, sequencia.valor)
sequencia.valor = 10
console.log(sequencia.valor, sequencia.valor, sequencia.valor, sequencia.valor)
