const {deleteVentas } = require('../../services/ventas/deleteVentas')

async function ctrlDeleteVentas(req, res){
  try{
  const { emailCliente } = req.params
  console.log('Desde el controladores')
  const ventas = await deleteVentas( emailCliente )
  return res.status(200).send(ventas)
  }catch(error) {
    return res.status(error.status || 500 ).send({message: error.message})
    }
  //console.log('la categoria del genero es', genre)

 // return res.status(200).send({genero: genre == 'M'? 'Femenino':'Masculino'})
}

module.exports = {ctrlDeleteVentas}
