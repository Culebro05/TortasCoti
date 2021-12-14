const Menu = require('../../models/menu')

async function updateMenu ({name, price}){
  try{
 console.log('Desde el servicio')
 console.log(name)
 const menuUpdated = await Menu.findOneAndUpdate(
   {name},
   {price},
 )

console.log(menuUpdated)
return menuUpdated
}catch(error){
  return {message: error.message}
}
}
module.exports = {updateMenu}
