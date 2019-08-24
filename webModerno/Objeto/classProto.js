class Avo {
  constructor(sobrenome = 'silva') {
    this.sobrenome = sobrenome
  }
}

class Pai extends Avo {
  constructor(sobrenome, profissao = 'professor') {
    super(sobrenome)
    this.profissao = profissao
  }
}

class Filho extends Pai {
  constructor() {
    super()
  }
}

const filho = new Filho
console.log(filho)

const pai = new Pai
console.log(pai)

const avo = new Avo
console.log(avo)
