const Ventas = require('../../models/ventas')

async function updateVentas ({vendedor, orden, descripcion, fecha, tipodepago, total}){
  try{
 console.log('Desde el servicio')
 console.log(total)
 const ventasUpdated = await Ventas.findOneAndUpdate(
   {total },
   {vendedor, orden, descripcion, fecha, tipodepago},
 )

console.log(ventasUpdated)
return ventasUpdated
}catch(error){
  return {message: error.message}
}
}
module.exports = {updateVentas}
