const alunos = [
  { nome: 'Ana', nota: 8.4 },
  { nome: 'Carlos', nota: 7.3 },
  { nome: 'Ellen', nota: 8.3 }
]

const getNotas = alunos => alunos.nota
const soma = (total, atual) => total + atual
const media = alunos.map(getNotas).reduce(soma)
console.log(media / alunos.length)
