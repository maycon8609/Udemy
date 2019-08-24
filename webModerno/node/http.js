const http = require('http')

http.createServer((req, res) => {
  res.write('BOM DIA!, http aqui')
  res.end()
}).listen(8080)
