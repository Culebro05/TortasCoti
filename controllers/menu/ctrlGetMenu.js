const { getMenu } = require("../../services/menu/getMenu")

async function ctrlGetMenu(req, res){
try{
     const { _id } = req.params
     const menu = await getMenu(_id)
     return res.status(200).send(menu)
}    catch (error){
     return res.status(error.status || 500 ).send({message: error.message})
}
//console.log('lo que solicitaste es', precio)
//return res.status(200).send({precio: precio == '1'? 'costo':'ropa'})
}

module.exports = { ctrlGetMenu}
