const { createVentas } = require('../../services/ventas/createVentas')

async function ctrlCreateVentas(req, res){
  try{
  const {vendedor, orden, descripcion, fecha, tipodepago, total} = req.body
  console.log('Desde el controlador')
  const ventas = await createVentas({vendedor, orden, descripcion, fecha, tipodepago, total})
  return res.status(200).send(ventas)
  }catch(error) {
    return res.status(error.status || 500 ).send({message: error.message})
    }
  //console.log('la categoria del genero es', genre)

 // return res.status(200).send({genero: genre == 'M'? 'Femenino':'Masculino'})
}

module.exports = {ctrlCreateVentas}
