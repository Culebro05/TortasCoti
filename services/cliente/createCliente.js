const Cliente = require('../../models/cliente')

async function createCliente ({name, lastname, genero, email}){
  try{
    const clienteCreated = await Cliente.create({
      name,
      lastname,
      genre: genero,
      email

  })

  console.log(clienteCreated)
  return clienteCreated
  }catch(error){
  return {message: error.message}
  }
}
module.exports = {createCliente}
