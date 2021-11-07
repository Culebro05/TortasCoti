const { updateVentas} = require('../../services/ventas/updateVentas')

async function ctrlUpdateVentas(req, res){
  try{
  const { vendedor, orden, descripcion, fecha, tipodepago} = req.body
  const { orden } = req.params
  console.log('Desde el controlador')
  const ventas = await updateVentas({vendedor, orden, descripcion, fecha, tipodepago, total})
  return res.status(200).send(ventas)
  }catch(error) {
    return res.status(error.status || 500 ).send({message: error.message})
    }
  //console.log('la categoria del genero es', genre)

 // return res.status(200).send({genero: genre == 'M'? 'Femenino':'Masculino'})
}

module.exports = {ctrlUpdateVentas}
