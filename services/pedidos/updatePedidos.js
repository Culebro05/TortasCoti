const Pedidos = require('../../models/pedidos')

async function updatePedidos({ iva, total, id_producto, _id, cantidad }) {
  try {
       const pedidosUpdated = await Pedidos.findOneAndUpdate(
            { _id },
            { iva, total, id_producto, cantidad },
            { new: true }
       );
       return pedidosUpdated;
  } catch (error) {
       return { message: error.message };
  }
}
module.exports = {updatePedidos}
