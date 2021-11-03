const express = require('express')
const MenuRouters = require('./Menu')
const ClientesRouters = require('./Clientes')
const PedidosRouters = require('./Pedidos')
const VentasRouters = require('./Ventas')
const authRouters = require('./auth')


function routerApi(app){
  app.use(express.json())
  app.use('/auth', authRouters)
  app.use('/Menu', MenuRouters)
  app.use('/Clientes', ClientesRouters)
  app.use('/Pedidos', PedidosRouters)
  app.use('/Ventas', VentasRouters)

}

module.exports = routerApi
