const { createPedidos } = require('../../services/pedidos/createPedidos')

async function ctrlCreatePedidos(req, res){
  try{
  const { orden, product, cantproduct, price, email, address, total } = req.body
  console.log('Desde el controlador')
  const pedidos = await createPedidos({orden, product, cantproduct, price, email, address, total })
  return res.status(200).send(pedidos)
  }catch(error) {
    return res.status(error.status || 500 ).send({message: error.message})
    }
  //console.log('la categoria del genero es', genre)

 // return res.status(200).send({genero: genre == 'M'? 'Femenino':'Masculino'})
}

module.exports = {ctrlCreatePedidos}
