const Menu = require('../../models/menu')

async function deleteMenu (categoria){
  try{
    const menuDeleted = await Menu.deleteOne({categoria})
    console.log(menuDeleted)
    if(menuDeleted.deletedCount ==0 )
      return {menuDeleted: menuDeleted.deleteCount, message:"Usuario no encontrado"}
    else return {menuDeleted: menuDeleted.deleteCount, message: "Usuario eliminado"}
  } catch(error){
    return {message: error.message}
  }
}
module.exports = {deleteMenu}


