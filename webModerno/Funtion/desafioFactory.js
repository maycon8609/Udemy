function Pessoa(nome) {
  this.nome = nome

  this.falar = function () {
    console.log(` Ola ${this.nome}!!! `)
  }
}
let p1 = new Pessoa('maycon')
p1.falar()

let p2 = new Pessoa('leticia')
p2.falar()

// function Pessoa() {
//   this.falar = (nome) => console.log(` Ola ${nome}!!! `)
// }

// let p1 = new Pessoa
// p1.falar('maycon')

// let p2 = new Pessoa
// p2.falar()
