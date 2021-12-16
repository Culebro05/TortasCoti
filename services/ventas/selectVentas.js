const Ventas = require('../../models/ventas')

async function selectVentas( orden){
  try{
 console.log('Desde el servicio')
 console.log( orden)
 /*let clientes
if(!genre){
  cliente=  await cliente.find()
}
else{
  cliente= await cliente.find({genre})
}*/
const ventas = !orden? await Ventas.find() : await Ventas.find({orden},'num')
console.log(ventas)
return ventas
}catch(error){
  return {message: error.message}
}
}
module.exports = {selectVentas}
