const notas = [7.2, 9.0, 6.1, 4.5, 8.3, 6.9, 4.8]

const notasBaixas1 = []
const notasAltas1 = []

for (i in notas) {
  if (notas[i] < 7) {
    notasBaixas1.push(notas[i])
  } else {
    notasAltas1.push(notas[i])
  }
}

console.log(` notas baixas 01 = ${notasBaixas1} `)
console.log(` notas altas  01 = ${notasAltas1} `)

// callback

const notasBaixas2 = notas.filter((nota) => nota < 7)
console.log(` notas baixas 02 = ${notasBaixas2} `)

const notasAltas2 = notas.filter((nota) => nota >= 7)
console.log(` notas altas  02 = ${notasAltas2} `)
