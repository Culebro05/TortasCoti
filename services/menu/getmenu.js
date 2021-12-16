const Menu = require('../../models/menu');

async function getMenu(id_producto) {
     try {
              return  await Menu.findOne({_id: id_producto})
     } catch (error) {
          return { message: error.message };
     }
}
module.exports = { getMenu };
