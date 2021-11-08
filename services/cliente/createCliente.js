const Cliente = require('../../models/cliente')

async function createCliente ({name, lastname, email, password, genero, phone, address }){
  try{
    const clienteCreated = await Cliente.create({
      name,
      lastname,
      email,
      password,
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
