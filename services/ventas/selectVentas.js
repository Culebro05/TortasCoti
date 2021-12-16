const Ventas = require('../../models/ventas')

async function selectVentas( email){
  try{
 console.log('Desde el servicio')
 console.log( email)
 /*let clientes
if(!genre){
  cliente=  await cliente.find()
}
else{
  cliente= await cliente.find({genre})
}*/
const ventas = ! email? await Ventas.find() : await Ventas.find({ email},'name')
console.log(ventas)
return ventas
}catch(error){
  return {message: error.message}
}
}
module.exports = {selectVentas}
