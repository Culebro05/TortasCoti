const { createMenu} = require('../../services/menu/createMenu')

async function ctrlCreateMenu(req, res){
  try{
  const { categoria, name, price} = req.body
  console.log('Desde el controlador')
  const menu = await createMenu({ categoria, name, price })
  return res.status(200).send(menu)
  }catch(error) {
    return res.status(error.status || 500 ).send({message: error.message})
    }
  //console.log('la categoria del genero es', genre)

 // return res.status(200).send({genero: genre == 'M'? 'Femenino':'Masculino'})
}

module.exports = {ctrlCreateMenu}
