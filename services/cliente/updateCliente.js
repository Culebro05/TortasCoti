const Cliente = require('../../models/cliente')

async function updateCliente ({name, lastname, phone, address, email, password}){
  try{
 console.log('Desde el servicio')
 const clienteUpdated = await Cliente.findOneAndUpdate(
   {email},
   {name, lastname, phone, address, password},
 )

console.log(clienteUpdated)
return clienteUpdated
}catch(error){
  return {message: error.message}
}
}
module.exports = {updateCliente}
