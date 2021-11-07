const Cliente = require('../../models/cliente')

async function createCliente ({name, lastname, email, genero, phone, address }){
  try{
    const clienteCreated = await Cliente.create({
      name,
      lastname,
      email,
      genre: genero,
      phone,
      address

  })

  console.log(clienteCreated)
  return clienteCreated
  }catch(error){
  return {message: error.message}
  }
}
module.exports = {createCliente}
