const Ventas = require('../../models/ventas')

async function selectVentas(fecha){
  try{
 console.log('Desde el servicio')
 console.log(fecha)
 /*let clientes
if(!genre){
  cliente=  await cliente.find()
}
else{
  cliente= await cliente.find({genre})
}*/
const ventas = !fecha? await Ventas.find() : await Ventas.find({fecha},'vendedor, orden, descripcion, tipodepago, total')
console.log(ventas)
return ventas
}catch(error){
  return {message: error.message}
}
}
module.exports = {selectVentas}
