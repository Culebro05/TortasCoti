const Menu = require('../../models/menu')

async function updateMenu({ name, user_id, price, descripcion, cantidad, _id}){
  try {
      const userUpdated = await Menu.findOneAndUpdate(
           {_id},
           { name,
            price,
            user_id,
            descripcion,
            cantidad
       },
           {new: true}
      )
       return userUpdated
  }    catch (error){
       return {message: error.message}
  }
}
module.exports = {updateMenu}
