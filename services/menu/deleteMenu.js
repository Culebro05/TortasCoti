const Menu = require('../../models/menu')

async function deleteMenu ({_id}){
  try{
    const menuDeleted = await Menu.deleteOne({_id})
    console.log(menuDeleted)
    if(menuDeleted.deletedCount ==0 )
      return {menuDeleted: menuDeleted.deleteCount, message:"Menu no encontrado"}
    else return {menuDeleted: menuDeleted.deleteCount, message: "Menu eliminado"}
  } catch(error){
    return {message: error.message}
  }
}
module.exports = {deleteMenu}


