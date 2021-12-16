const Pedidos = require('../../models/pedidos')


async function createPedidos({  date, total, price, cantidad, iva, user_id, product_id }) {
  try {
       const pedidosCreated = await Pedidos.create({
            total,
            iva,
            price,
            cantidad,
            date,
            user_id,
            product_id
       });
       return pedidosCreated;
  } catch (error) {
       return { message: error.message };
  }
}
module.exports = {createPedidos}
