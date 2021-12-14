const { deleteMenu } = require('../../services/menu/deleteMenu')

async function ctrlDeleteMenu(req, res){
  try{
  const {name} = req.params
  console.log('Desde el controlador')
  const menu = await deleteMenu(name)
  return res.status(200).send(menu)
  }catch(error) {
    return res.status(error.status || 500 ).send({message: error.message})
    }
  //console.log('la categoria del genero es', genre)

 // return res.status(200).send({genero: genre == 'M'? 'Femenino':'Masculino'})
}

module.exports = {ctrlDeleteMenu}
