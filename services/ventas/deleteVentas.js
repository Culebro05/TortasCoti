const Ventas = require('../../models/ventas')

async function deleteVentas (orden){
  try{
    const ventasDeleted = await Ventas.deleteOne({orden})
    console.log(ventasDeleted)
    if(ventasDeleted.deletedCount ==0 )
      return {clienteDeleted: ventasDeleted.deleteCount, message:"Usuario no encontrado"}
    else return {clienteDeleted: ventasDeleted.deleteCount, message: "Usuario eliminado"}
  } catch(error){
    return {message: error.message}
  }
}
module.exports = {deleteVentas}
