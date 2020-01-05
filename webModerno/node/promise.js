function falar(seg, text) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text)
    }, seg * 1000)
  })
}


falar(2, 'promise')
  .then(frase => frase.concat(' in js '))
  .then(frase => console.log(frase))
  .catch(err => console.log(err))

