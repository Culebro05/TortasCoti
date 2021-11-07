const Pedidos = require('../../models/pedidos')

async function createPedidos ({orden, product, cantproduct, price, email, address, total}){
  try{
    const pedidosCreated = await pedidos.create({
      orden,
      product,
      cantproduct,
      price,
      email,
      address,
      total

  })

  console.log(pedidosCreated)
  return pedidosCreated
  }catch(error){
  return {message: error.message}
  }
}
module.exports = {createPedidos}
