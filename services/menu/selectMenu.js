const Menu= require('../../models/menu')

async function selectMenu (name){
  try{
 console.log('Desde el servicio')
 console.log(name)
 /*let clientes
if(!genre){
  cliente=  await cliente.find()
}
else{
  cliente= await cliente.find({genre})
}*/
const menu = !name? await menu.find() : await Menu.find({name},'categoria, price')
console.log(menu)
return menu
}catch(error){
  return {message: error.message}
}
}
module.exports = {selectMenu}
