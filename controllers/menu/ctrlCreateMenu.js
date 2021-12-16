const { createMenu} = require('../../services/menu/createMenu')

async function ctrlCreateMenu(req, res){
  try{
    const { name, price, descripcion } = req.body;
    const user_id = req.user._id;
    console.log(user_id, req.user);
    const menu = await createMenu({
         name,
         price,
         descripcion,
         user_id,
    });
  return res.status(200).send(menu)
  }catch(error) {
    return res.status(error.status || 500 ).send({message: error.message})
    }
  //console.log('la categoria del genero es', genre)

 // return res.status(200).send({genero: genre == 'M'? 'Femenino':'Masculino'})
}

module.exports = {ctrlCreateMenu}
