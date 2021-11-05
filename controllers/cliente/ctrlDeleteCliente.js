const { deleteCliente } = require('../../services/cliente/deleteCliente')

async function ctrlDeleteCliente(req, res){
  try{
  const { email } = req.params
  console.log('hola desde el controlador')
  const cliente = await deleteCliente(email)
  return res.status(200).send(cliente)
  }catch(error) {
    return res.status(error.status || 500 ).send({message: error.message})
    }
  //console.log('la categoria del genero es', genre)

 // return res.status(200).send({genero: genre == 'M'? 'Femenino':'Masculino'})
}

module.exports = {ctrlDeleteCliente}
