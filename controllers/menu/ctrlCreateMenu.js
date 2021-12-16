const { createMenu} = require('../../services/menu/createMenu')

async function ctrlCreateMenu(req, res){
  try{
    const { name, precio, descripcion } = req.body;
    const user_id = req.user._id;
    console.log(user_id, req.user);
    const productos = await createProduct({
         name,
         precio,
         descripcion,
         user_id,
    });
  return res.status(200).send(productos)
  }catch(error) {
    return res.status(error.status || 500 ).send({message: error.message})
    }
  //console.log('la categoria del genero es', genre)

 // return res.status(200).send({genero: genre == 'M'? 'Femenino':'Masculino'})
}

module.exports = {ctrlCreateMenu}
