const pessoa = {
  nome: 'maycon',
  falar() {
    console.log(this.nome)
  }
}

pessoa.falar()

// conflito de paradigmas
const fal = pessoa.falar
fal()

//função bind() || bind amarra o this
const fala = pessoa.falar.bind(pessoa)
fala()
// exemplo 2
const f = fala
f()
