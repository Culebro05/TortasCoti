const Menu = require('../../models/menu')

async function createMenu({ name, user_id, price, descripcion }) {
  try {
       const menuCreated = await Menu.create({
            name,
            price,
            user_id,
            descripcion
       });
       return menuCreated;
  } catch (error) {
       return { message: error.message };
  }

  }
  module.exports = {createMenu}
