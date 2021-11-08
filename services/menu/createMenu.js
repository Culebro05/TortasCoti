const Menu = require('../../models/menu')

async function createMenu ({categoria, name, price}){
  try{
    const menuCreated = await Menu.create({
      categoria,
      name,
      price
  })

  console.log(menuCreated)
  return menuCreated
  }catch(error){
  return {message: error.message}
  }
}
module.exports = {createMenu}
