const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

// FILTROS
const chineses = f => f.pais === 'China'
const genero = f => f.genero === 'F'
const menorSalario = (func, funcAtual) => {
  return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
  const funcionarios = response.data

  // Buscar Mulher Chinesa com menos salario
  const funcionario = funcionarios
    .filter(chineses)
    .filter(genero)
    .reduce(menorSalario)

  console.log(`
    ${funcionario.nome} e a mulher chinesa com o menor salario,
    ganha o equivalente a R$ ${funcionario.salario}
    `)

  console.log(funcionario)
})
