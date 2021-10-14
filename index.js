const express = require('express')
const routerApi = require('./routes')
const app = express()
const { config } = require('./config/index')

const port = config.port

const mongoose = require('mongoose')
const USER = encodeURIComponent(config.dbUSER)
const PASSWORD = encodeURIComponent(config.dbPassword)
const DB_NAME = encodeURIComponent(config.dbName)
const MONGO_URI = `mondodb+srv://${USER}:${PASSWORD}@${config.dbHost}/${DB_NAME}`


console.log('********************')
console.log(MONGO_URI)
mongoose.connect(MONGO_URI,
  {useNewUrlParser: true, useUnifiedTopology: true}
).then(() => console.log('YA ESTAMOS CONECTADOS')).catch(e=>console.log(e))

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
