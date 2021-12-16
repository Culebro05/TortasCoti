const Ventas = require('../../models/ventas')

async function deleteVentas (email){
  try{
    const ventasDeleted = await Ventas.deleteOne({email})
    console.log(ventasDeleted)
    if(ventasDeleted.deletedCount ==0 )
      return {ventasDeleted: ventasDeleted.deleteCount, message:"Venta no encontrada"}
    else return {ventasDeleted: ventasDeleted.deleteCount, message: "Venta eliminada"}
  } catch(error){
    return {message: error.message}
  }
}
module.exports = {deleteVentas}
