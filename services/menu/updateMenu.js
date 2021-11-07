const Menu = require('../../models/menu')

async function updateMenu ({categoria, name, price}){
  try{
 console.log('Desde el servicio')
 console.log(name)
 const menuUpdated = await Menu.findOneAndUpdate(
   {name},
   {categoria, name, price},
 )

console.log(menuUpdated)
return menuUpdated
}catch(error){
  return {message: error.message}
}
}
module.exports = {updateMenu}