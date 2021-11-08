const { createCliente } = require('../../services/cliente/createCliente')
const bcrypt = require('bcrypt')

async function ctrlCreateCliente(req, res){
  try{
  const { name, lastname, email, password, genero, phone, address } = req.body
  const securePassword =  bcrypt.hash(password,5);
  const hashPassword = await  securePassword.then(response => response)
  const cliente = await createCliente({name, lastname, email, password, genero, phone, address })
  return res.status(200).send(cliente)
  }catch(error) {
    return res.status(error.status || 500 ).send({message: error.message})
    }
  //console.log('la categoria del genero es', genre)

 // return res.status(200).send({genero: genre == 'M'? 'Femenino':'Masculino'})
}

module.exports = {ctrlCreateCliente}
