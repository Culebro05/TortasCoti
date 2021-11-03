const { selectCliente } = require('../../services/cliente/selectCliente')

async function ctrlSelectCliente(req, res){
  try{
  const {  genre } = req.query
  console.log('hola desde el controladador')
const cliente = await selectCliente(genre)
  return res.status(200).send(cliente)
  }catch(error) {
    return res.status(error.status || 500 ).send({message: error.message})
    }
  //console.log('la categoria del genero es', genre)

 // return res.status(200).send({genero: genre == 'M'? 'Femenino':'Masculino'})
}

module.exports = {ctrlSelectCliente}
