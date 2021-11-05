const { createCliente } = require('../../services/cliente/createCliente')

async function ctrlCreateCliente(req, res){
  try{
  const { name, lastname, genero, email } = req.body
  console.log('desde el controlador')
  const cliente = await createCliente({name, lastname, genero, email})
  return res.status(200).send(cliente)
  }catch(error) {
    return res.status(error.status || 500 ).send({message: error.message})
    }
  //console.log('la categoria del genero es', genre)

 // return res.status(200).send({genero: genre == 'M'? 'Femenino':'Masculino'})
}

module.exports = {ctrlCreateCliente}
