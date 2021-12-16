const { updatePedidos } = require('../../services/pedidos/updatePedidos')
const { getMenu } = require('../../services/menu/getMenu')
const { calculateTotal, calculateIva } = require('../../utils/auth/calcular/calculoPedidos')

async function ctrlUpdatePedidos(req, res){
  try{
  const { cantproduct, id_producto} = req.body
  const { _id} = req.params
  const product = await  getMenu(id_producto);
          const price = product.price;
          const total = calculateTotal(cantproduct,price);
          const iva = calculateIva(total)

  console.log('Desde el controlador')
  const pedidos = await updatePedidos({cantproduct,iva, _id})
  return res.status(200).send(pedidos)
  }catch(error) {
    return res.status(error.status || 500 ).send({message: error.message})
    }
  //console.log('la categoria del genero es', genre)

 // return res.status(200).send({genero: genre == 'M'? 'Femenino':'Masculino'})
}

module.exports = {ctrlUpdatePedidos}
