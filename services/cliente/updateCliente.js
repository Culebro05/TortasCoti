const Cliente = require('../../models/cliente')

async function updateCliente ({name, lastname, phone, address, email}){
  try{
 console.log('Desde el servicio')
 console.log(email)
 const clienteUpdated = await Cliente.findOneAndUpdate(
   {email},
   {name, lastname, phone, address},
 )

console.log(clienteUpdated)
return clienteUpdated
}catch(error){
  return {message: error.message}
}
}
module.exports = {updateCliente}
