const concat = require('concat-stream')
const http = require('http')

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    req.pipe(concat(body => {
      let obj = JSON.parse(body)
      res.end(Object.keys(obj.join('\n')))
    }))
  }
  else res.end()
})

server.listen(5000)
