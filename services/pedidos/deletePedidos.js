const Pedidos = require('../../models/pedidos')

async function deletePedidos({ _id }) {
  try {
    const userDeleted = await Pedidos.deleteOne({ _id })
    if (userDeleted.deletedCount == 0)
      return {
        userDeleted: userDeleted.deletedCount,
        message: 'Pedido no encontrada',
      };
    else
      return {
        userDeleted: userDeleted.deletedCount,
        message: 'Pedido eliminada',
      };
  } catch (error){
    return { message: error.message }
  }
  }
module.exports = { deletePedidos };
