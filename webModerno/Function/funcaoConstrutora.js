function Almento() {
  this.alment = function (porcentagem) {
    this.salario += (this.salario * porcentagem / 100)
    console.log(this.salario)
  }
}

function Funcionario(salario) {
  this.salario = salario
}

Funcionario.prototype = new Almento

let func1 = new Funcionario(1000)
func1.alment(0)

let func2 = new Funcionario(2000)
func2.alment(10)

let func3 = new Funcionario(5000)
func3.alment(15)
