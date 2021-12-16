const Pedidos = require('../../models/pedidos')

async function selectPedidos() {
  try {

      return await  Pedidos.find({});

  } catch (error) {
       return { message: error.message };
  }
}
module.exports = {selectPedidos}
