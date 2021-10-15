const MenuRouters = require('./Menu')
const ClientesRouters = require('./Clientes')
const PedidosRouters = require('./Pedidos')
const VentasRouters = require('./Ventas')

function routerApi(app){
  app.use('/Menu', MenuRouters)
  app.use('/Clientes', ClientesRouters)
  app.use('/Pedidos', PedidosRouters)
  app.use('/Ventas', VentasRouters)
}

module.exports = routerApi
