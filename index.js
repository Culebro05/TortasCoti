const express = require('express')
const routerApi = require('./routes')
const app = express()
const port = 3000

app.get('/Clientes', (req, res) =>{
  res.send('Bienvenido a mi app de comida')
})

app.get('/', (req, res) =>{
  res.send('Hola! Bienvenidos al menu')
})

app.get('/Pedidos', (req, res) =>{
  res.send('Hello! This is other route')
})

routerApi(app)

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
