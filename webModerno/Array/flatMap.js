const escola = [{
  nome: 'Turma m1',
  alunos: [
    { nome: 'Rebeca', nota: 7.6 },
    { nome: 'Carlos', nota: 5.9 }
  ]
}, {
  nome: 'Turma m2',
  alunos: [
    { nome: 'Carla', nota: 8.1 },
    { nome: 'Mario', nota: 9 }
  ]
}]

const getNotaAluno = aluno => aluno.nota
const getNotaTurma = turma => turma.alunos.map(getNotaAluno)

const nota1 = escola.map(getNotaTurma)
console.log(nota1)

Array.prototype.flatMap = function (callback) {
  return Array.prototype.concat.apply([], this.map(callback))
}

const nota2 = escola.flatMap(getNotaTurma)
console.log(nota2)
