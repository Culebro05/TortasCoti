const Ventas = require('../../models/ventas')

async function updateVentas ({vendedor, orden,  emailCliente, descripcion, fecha, tipodepago, total}){
  try{
 console.log('Desde el servicio')
 console.log( emailCliente)
 const ventasUpdated = await Ventas.findOneAndUpdate(
  {emailCliente},
   {vendedor, orden,  descripcion, fecha, tipodepago, total},
 )

console.log(ventasUpdated)
return ventasUpdated
}catch(error){
  return {message: error.message}
}
}
module.exports = {updateVentas}
