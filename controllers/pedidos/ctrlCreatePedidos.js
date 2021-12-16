const { createPedidos } = require('../../services/pedidos/createPedidos' );
const { getMenu } = require('../../services/menu/getMenu');
const { calculateTotal, calculateIva } = require('../../utils/auth/calcular/calculoPedidos');
async function ctrlCreatePedidos(req, res){
  try{
  const { cantproduct, price, email, address,id_producto } = req.body;
  const product = await  getMenu(id_producto);
          const menu = product.price;
          const total = calculateTotal(cantproduct,price);
          const iva = calculateIva(total)
          const user_id = req.user._id;

  const pedidos = await createPedidos({ product, cantproduct, price, email, address, total, iva, user_id })
  return res.status(200).send(pedidos)
  }catch(error) {
    return res.status(error.status || 500 ).send({message: error.message})
    }
  //console.log('la categoria del genero es', genre)

 // return res.status(200).send({genero: genre == 'M'? 'Femenino':'Masculino'})
}

module.exports = {ctrlCreatePedidos}
