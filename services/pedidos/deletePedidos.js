const Pedidos = require('../../models/pedidos')

async function deletePedidos ({email}){
  try{
    const pedidosDeleted = await Pedidos.deleteOne({email})
    console.log(pedidosDeleted)
    if(pedidosDeleted.deletedCount ==0 )
      return {pedidosDeleted: pedidosDeleted.deleteCount, message:"Pedido No encontradoo"}
    else return {pedidosDeleted: pedidosDeleted.deleteCount, message: "Pedido eliminado"}
  } catch(error){
    return {message: error.message}
  }
}
module.exports = {deletePedidos}
