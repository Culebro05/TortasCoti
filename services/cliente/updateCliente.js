const Cliente = require('../../models/cliente')

async function updateCliente ({phone, address, email, password}){
  try{
 console.log('Desde el servicio')
 const clienteUpdated = await Cliente.findOneAndUpdate(
   {email},
   {phone, address, password},
 )

console.log(clienteUpdated)
return clienteUpdated
}catch(error){
  return {message: error.message}
}
}
module.exports = {updateCliente}
