const Ventas = require('../../models/ventas')

async function deleteVentas ({orden}){
  try{
    const ventasDeleted = await Ventas.deleteOne({orden})
    console.log(ventasDeleted)
    if(ventasDeleted.deletedCount ==0 )
      return {ventasDeleted: ventasDeleted.deleteCount, message:"Venta No encontrada"}
    else return {ventasDeleted: ventasDeleted.deleteCount, message: "Venta eliminada"}
  } catch(error){
    return {message: error.message}
  }
}
module.exports = {deleteVentas}
