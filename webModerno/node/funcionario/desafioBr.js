const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

// FILTROS
const br = f => f.pais === 'Brazil'
const maiorSal = (func, funcAtual) => {
  return func.salario > funcAtual.salario ? func : funcAtual
}
const menorSal = (func, funcAtual) => {
  return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
  const funcionarios = response.data

  const ceo = funcionarios.filter(br).reduce(maiorSal)
  const meninoTi = funcionarios.filter(br).reduce(menorSal)

  console.log(' MAIOR SALARIO ')
  console.log(ceo)

  console.log(' MENOR SALARIO ')
  console.log(meninoTi)

})
