const app = require('express')()

app.post('/', (req, res) => {
  res.send('post ok')
})

app.get('/', (req, res) => {
  res.send('get ok')
})

app.put('/:id', (req, res) => {
  res.send('put ok' + req.params.id)
})

app.delete('/:id', (req, res) => {
  res.send('delete ok' + req.params.id)
})

module.exports = app
