const Cliente = require('../../models/cliente')

async function updateCliente ({name, lastname, email}){
  try{
 console.log(' hola dedes el servicio')
 console.log(email)
 const clienteUpdated = await Cliente.findOneAndUpdate(
   {email},
   {name, lastname}
 )

console.log(clienteUpdated)
return clienteUpdated
}catch(error){
  return {message: error.message}
}
}
module.exports = {updateCliente}
