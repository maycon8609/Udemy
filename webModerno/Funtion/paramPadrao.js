function soma(a, b, c) {
  a = isNaN(a) ? 1 : a
  b = isNaN(b) ? 1 : b
  c = isNaN(c) ? 1 : c
  return a + b + c

}

console.log(soma(0, 0, 0), soma(1, 'x', 3), soma(5, 5, '1'))

// refatory

const som = (a = 1, b = 1, c = 1) => a + b + c

console.log(som(), som(0, 0, 0), som(5, '5', 1), som(5, 5, '1'), som(5, 10, 'x'))
