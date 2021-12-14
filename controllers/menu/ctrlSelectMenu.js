const { selectMenu } = require('../../services/menu/selectMenu')

async function ctrlSelectMenu(req, res){
  try{
  const { categoria } = req.query
  console.log('hola desde el controlador')
  const menu = await selectMenu(categoria)
  return res.status(200).send(menu)
  }catch(error) {
    return res.status(error.status || 500 ).send({message: error.message})
    }
  //console.log('la categoria del genero es', genre)

 // return res.status(200).send({genero: genre == 'M'? 'Femenino':'Masculino'})
}

module.exports = {ctrlSelectMenu}
