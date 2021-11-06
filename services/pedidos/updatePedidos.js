const Pedidos = require('../../models/pedidos')

async function updatePedidos ({orden, product, cantproduct, price, email, address, total}){
  try{
 console.log('Desde el servicio')
 console.log(email)
 const pedidosUpdated = await Cliente.findOneAndUpdate(
   {email},
   {orden, product, cantproduct, price, address, total},
 )

console.log(pedidosUpdated)
return pedidosUpdated
}catch(error){
  return {message: error.message}
}
}
module.exports = {updatePedidos}
