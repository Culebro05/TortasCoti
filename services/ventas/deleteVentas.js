const Ventas = require('../../models/ventas')

async function deleteVentas (email){
  try{
    const ventasDeleted = await Ventas.deleteOne({email})
    console.log(ventasDeleted)
    if(ventasDeleted.deletedCount ==0 )
      return {ventasDeleted: ventasDeleted.deleteCount, message:"Usuario no encontrado"}
    else return {ventasDeleted: ventasDeleted.deleteCount, message: "Usuario eliminado"}
  } catch(error){
    return {message: error.message}
  }
}
module.exports = {deleteVentas}
