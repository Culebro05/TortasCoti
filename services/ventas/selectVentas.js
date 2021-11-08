const Ventas = require('../../models/ventas')

async function selectVentas( emailCliente){
  try{
 console.log('Desde el servicio')
 console.log( emailCliente)
 /*let clientes
if(!genre){
  cliente=  await cliente.find()
}
else{
  cliente= await cliente.find({genre})
}*/
const ventas = ! emailCliente? await Ventas.find() : await Ventas.find({ emailCliente},'name')
console.log(ventas)
return ventas
}catch(error){
  return {message: error.message}
}
}
module.exports = {selectVentas}
