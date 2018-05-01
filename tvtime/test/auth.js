const test = require('blue-tape')
const login = require('../lib/tvdb/login')

test('Succesfully logged in', (t) => {
  return login()
    .then((res) => {
        t.equal(res.length, 500, 'Login token is the correct length')
    })
})
