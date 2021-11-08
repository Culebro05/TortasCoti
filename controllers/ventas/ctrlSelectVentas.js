const { selectVentas } = require('../../services/ventas/selectVentas')

async function ctrlSelectVentas(req, res){
  try{
  const { emailCliente } = req.query
  console.log('Desde el controladores')
  const ventas = await selectVentas( emailCliente )
  return res.status(200).send(ventas)
  }catch(error) {
    return res.status(error.status || 500 ).send({message: error.message})
    }
  //console.log('la categoria del genero es', genre)

 // return res.status(200).send({genero: genre == 'M'? 'Femenino':'Masculino'})
}

module.exports = {ctrlSelectVentas}
