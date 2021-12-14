const Ventas = require('../../models/ventas')

async function deleteVentas (vendedor){
  try{
    const ventasDeleted = await Ventas.deleteOne({vendedor})
    console.log(ventasDeleted)
    if(ventasDeleted.deletedCount ==0 )
      return {ventasDeleted: ventasDeleted.deleteCount, message:"Usuario no encontrado"}
    else return {ventasDeleted: ventasDeleted.deleteCount, message: "Usuario eliminado"}
  } catch(error){
    return {message: error.message}
  }
}
module.exports = {deleteVentas}
