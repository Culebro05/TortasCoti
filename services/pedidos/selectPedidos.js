const Pedidos = require('../../models/pedidos')

async function selectPedidos (orden){
  try{
 console.log('Desde el servicio')
 console.log(orden)
 /*let clientes
if(!genre){
  cliente=  await cliente.find()
}
else{
  cliente= await cliente.find({genre})
}*/
const pedidos = !orden? await Pedidos.find() : await Pedidos.find({orden},'num')
console.log(pedidos)
return pedidos
}catch(error){
  return {message: error.message}
}
}
module.exports = {selectPedidos}
