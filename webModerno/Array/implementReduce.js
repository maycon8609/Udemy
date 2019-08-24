Array.prototype.reduce2 = function (callback) {
  let acomulador = this[0]
  for (let i = 1; i < this.length; i++) {
    acomulador = callback(acomulador, this[i], i, this)
  }
  return acomulador
}

const alunos = [
  { nome: 'Joao', nota: 6.5, bolsista: true },
  { nome: 'Carlos', nota: 8.7, bolsista: true },
  { nome: 'Ana', nota: 5.9, bolsista: false },
  { nome: 'Bruno', nota: 9.1, bolsista: false }
]

// Todos são bolsistas?
const todoBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map((a) => a.bolsista).reduce2(todoBolsistas))

// Algum e bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map((a) => a.bolsista).reduce2(algumBolsista))
