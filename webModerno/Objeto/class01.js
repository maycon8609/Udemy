class Lancamento {
  constructor(nome = 'genérico', valor = 0) {
    this.nome = nome
    this.valor = valor
  }
}

class CicloFinanceiro {
  constructor(mes, ano) {
    this.mes = mes
    this.ano = ano
    this.lancamentos = []
  }

  addLancamentos(...lancamentos) {
    lancamentos.forEach(l => this.lancamentos.push(l))
  }

  sumario() {
    let valorConsolidado = 0
    this.lancamentos.forEach(l => valorConsolidado += l.valor)
    return valorConsolidado
  }

  fatura() {
    console.log(`fatura referente a ${this.mes}/${this.ano}`)
    for (let i in this.lancamentos) {
      console.log(`${this.lancamentos[i].nome} -------- ${this.lancamentos[i].valor}`)
    }
  }
}

const salario = new Lancamento('salario', 5000)
const contaLuz = new Lancamento('luz', -350)
const aluguel = new Lancamento('aluguel', -500)
const faculdade = new Lancamento('faculdade', -500)

const contas = new CicloFinanceiro(08, 2019)
contas.addLancamentos(salario, contaLuz, aluguel, faculdade)
console.log(contas.sumario())
console.log(contas.fatura())
