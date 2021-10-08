const MenuRouters = require('./Menu')
//const ClientesRouters = require('./Clientes')

function routerApi(app){
  app.use('/Menu', MenuRouters)
}

module.exports = routerApi
