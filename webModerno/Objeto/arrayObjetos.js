let classeA = [], classeB = [], classeC = []

// CADASTRAR ALUNOS
function cadastrar(nome, turma, arr) {
  arr.push({
    nome,
    turma
  })
}

// IMPRIMIR LISTA DE ALUNOS DA TURMA
function percorrer(arr) {
  for (let i in arr) {
    console.log(` Turma ${arr[i].turma}: ${arr[i].nome} `)
  }
  console.log()
}

// CADASTRAR CADA ALUNO EM SUA RESPECTIVA TURMA
function cadastroAluno(nome, turma) {
  if (turma === 'A') {
    cadastrar(nome, turma, classeA)
  } else if (turma === 'B') {
    cadastrar(nome, turma, classeB)
  } else if (turma === 'C') {
    cadastrar(nome, turma, classeC)
  } else {
    console.log(' turma invalida ')
  }
}

// INPUT
const al1 = new cadastroAluno('carlos', 'A')
const al2 = new cadastroAluno('marcia', 'A')
const al3 = new cadastroAluno('debora', 'B')
const al6 = new cadastroAluno('mario', 'B')
const al4 = new cadastroAluno('calvin', 'C')
const al5 = new cadastroAluno('michele', 'C')

// OUTPUT
percorrer(classeA)
percorrer(classeB)
percorrer(classeC)
