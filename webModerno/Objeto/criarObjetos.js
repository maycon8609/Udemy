let funcionarios = []

// ADICIONAR FUNCIONARIO NO ARRAY
function adicionarFuncionario(nome, salarioBase, faltas) {
  funcionarios.push({
    nome,
    salarioBase,
    faltas,

  })
}

// CRIAR FUNCIONARIO || FUNCTION FACTORY
function criarFuncionario(nome, salarioBase, faltas) {
  adicionarFuncionario(nome, salarioBase, faltas)
  return {
    nome,
    salarioBase,
    faltas,
    getSalario() {
      return (salarioBase / 30) * (30 - faltas)
    }
  }
}

// PERCORRER ARRAY DE FUNCIONARIOS E IMPRIMIR
function imprimir(funcionarios) {
  for (let i in funcionarios) {
    console.log(' Funcionario ' + funcionarios[i].nome)
    console.log(' Salario ' + funcionarios[i].salarioBase)
    console.log(' Faltas ' + funcionarios[i].faltas)
    console.log()
  }
}

// CRIANDO FUNCIONARIOS
const f1 = criarFuncionario('daniel', 3000, 5)
const f2 = criarFuncionario('rafaela', 5000, 1)
const f3 = criarFuncionario('joão', 4500, 8)
const f4 = criarFuncionario('carla', 3800, 0)

imprimir(funcionarios)
