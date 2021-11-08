const { selectPedidos } = require('../../services/pedidos/selectPedidos')

async function ctrlSelectPedidos(req, res){
  try{
  const { orden } = req.query
  console.log('Desde el controlador')
  const pedidos = await selectPedidos(orden)
  return res.status(200).send(pedidos)
  }catch(error) {
    return res.status(error.status || 500 ).send({message: error.message})
    }
  //console.log('la categoria del genero es', genre)

 // return res.status(200).send({genero: genre == 'M'? 'Femenino':'Masculino'})
}

module.exports = {ctrlSelectPedidos}
