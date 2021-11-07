const Ventas= require('../../models/ventas')

async function createVentas({vendedor, orden, descripcion, fecha, tipodepago, total}){
  try{
    const ventasCreated = await Ventas.create({
      vendedor,
      orden,
       descripcion,
       fecha,
       tipodepago,
       total

  })

  console.log(ventasCreated)
  return ventasCreated
  }catch(error){
  return {message: error.message}
  }
}
module.exports = {createVentas}
