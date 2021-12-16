const { updateMenu } = require('../../services/menu/updateMenu')

async function ctrlUpdateMenu(req, res){
  try{
    const {  name, price, descripcion} = req.body
    const { _id } = req.params;
    const menu = await updateMenu({ name, price, descripcion,_id})
    return res.status(200).send(menu)
}   catch (error){
    return res.status(error.status || 500 ).send({message: error.message})
}
//console.log('lo que solicitaste es', precio)
//return res.status(200).send({precio: precio == '1'? 'costo':'ropa'})
}

module.exports = {ctrlUpdateMenu}
