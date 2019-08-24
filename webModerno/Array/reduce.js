const alunos = [
  { nome: 'Joao', nota: 6.5, bolsista: true },
  { nome: 'Carlos', nota: 8.7, bolsista: true },
  { nome: 'Ana', nota: 5.9, bolsista: false },
  { nome: 'Bruno', nota: 9.1, bolsista: false }
]

const notas = alunos.map((a) => a.nota)
console.log(notas)
console.log()

const result = alunos.map((a) => a.nota).reduce(function (acomulador, atual) {
  console.log(acomulador, atual)
  return acomulador + atual
})
console.log(result.toFixed(2))
