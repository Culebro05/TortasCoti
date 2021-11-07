const Ventas = require('../../models/ventas')

async function updateVentas ({vendedor, orden, descripcion, fecha, tipodepago, total}){
  try{
 console.log('Desde el servicio')
 console.log(total)
 const ventasUpdated = await Ventas.findOneAndUpdate(
   {orden},
   {vendedor, descripcion, fecha, tipodepago, total},
 )

console.log(ventasUpdated)
return ventasUpdated
}catch(error){
  return {message: error.message}
}
}
module.exports = {updateVentas}
