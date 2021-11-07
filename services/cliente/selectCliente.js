const Cliente = require('../../models/cliente')

async function selectCliente (genre){
  try{
 console.log('Desde el servicio')
 console.log(genre)
 /*let clientes
if(!genre){
  cliente=  await cliente.find()
}
else{
  cliente= await cliente.find({genre})
}*/
const clientes = !genre? await Cliente.find() : await Cliente.find({genre},'h, m')
console.log(clientes)
return clientes
}catch(error){
  return {message: error.message}
}
}
module.exports = {selectCliente}
