const { updateMenu } = require('../../services/menu/updateMenu')

async function ctrlUpdateMenu(req, res){
  try{
  const { price} = req.body
  const { name  } = req.params
  console.log('Desde el controlador')
  const menu = await updateMenu({price, name})
  return res.status(200).send(menu)
  }catch(error) {
    return res.status(error.status || 500 ).send({message: error.message})
    }
  //console.log('la categoria del genero es', genre)

 // return res.status(200).send({genero: genre == 'M'? 'Femenino':'Masculino'})
}

module.exports = {ctrlUpdateMenu}
