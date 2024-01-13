const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Plat API')
})

app.use('/flip', (req, res) => {
  res.send('Flip API')
})

app.use('/transcribe', require('./routes/transcribe'))
app.use('/gpt', require('./routes/gpt'))

app.listen(port, () => {
  console.log(`Plat API listening on http://localhost:${port}`)
})