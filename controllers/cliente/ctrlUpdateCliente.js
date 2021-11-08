const { updateCliente } = require('../../services/cliente/updateCliente')

async function ctrlUpdateCliente(req, res){
  try{
  const { name, lastname, phone, address} = req.body
  const { email } = req.params
  console.log('Desde el controlador')
  const cliente = await updateCliente({name, lastname, phone, address, email})
  return res.status(200).send(cliente)
  }catch(error) {
    return res.status(error.status || 500 ).send({message: error.message})
    }
  //console.log('la categoria del genero es', genre)

 // return res.status(200).send({genero: genre == 'M'? 'Femenino':'Masculino'})
}

module.exports = {ctrlUpdateCliente}
