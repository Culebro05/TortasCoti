const { updatePedidos } = require('../../services/pedidos/updatePedidos')

async function ctrlUpdatePedidos(req, res){
  try{
  const { orden, product, cantproduct, price, address, total} = req.body
  const { email } = req.params
  console.log('Desde el controlador')
  const pedidos = await updatePedidos({orden, product, cantproduct, price, email, address, total})
  return res.status(200).send(pedidos)
  }catch(error) {
    return res.status(error.status || 500 ).send({message: error.message})
    }
  //console.log('la categoria del genero es', genre)

 // return res.status(200).send({genero: genre == 'M'? 'Femenino':'Masculino'})
}

module.exports = {ctrlUpdatePedidos}
