import express from 'express'
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Plat API')
})

app.get('/transcribe', (req, res) => {

})

app.listen(port, () => {
  console.log(`Plat API listening on port ${port}`)
})