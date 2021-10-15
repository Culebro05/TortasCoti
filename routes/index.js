const MenuRouters = require('./Menu')
const ClientesRouters = require('./Clientes')

function routerApi(app){
  app.use('/Menu', MenuRouters)
  app.use('/Clientes', ClientesRouters)
}

module.exports = routerApi
