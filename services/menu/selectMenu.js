const Menu= require('../../models/menu')

async function selectMenu (categoria){
  try{
 console.log('Desde el servicio')
 console.log(categoria)
 /*let clientes
if(!genre){
  cliente=  await cliente.find()
}
else{
  cliente= await cliente.find({genre})
}*/
const menu = !categoria? await Menu.find() : await Menu.find({categoria},'tortas, bebidas')
console.log(menu)
return menu
}catch(error){
  return {message: error.message}
}
}
module.exports = {selectMenu}
