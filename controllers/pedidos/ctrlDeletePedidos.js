const { deletePedidos } = require('../../services/pedidos/deletePedidos')

async function ctrlDeletePedidos(req, res){
  try{
  const { email} = req.params
  console.log('Desde el controlador')
  const pedidos = await deletePedidos(email)
  return res.status(200).send(pedidos)
  }catch(error) {
    return res.status(error.status || 500 ).send({message: error.message})
    }
  //console.log('la categoria del genero es', genre)

 // return res.status(200).send({genero: genre == 'M'? 'Femenino':'Masculino'})
}

module.exports = {ctrlDeletePedidos}
