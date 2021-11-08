const Cliente = require('../../models/cliente')

async function deleteCliente(email) {
  try {
    const clienteDeleted = await Cliente.deleteOne({ email })
    console.log(clienteDeleted)
    if (clienteDeleted.deletedCount == 0)
      return { clienteDeleted: clienteDeleted.deleteCount, message: "Usuario no encontrado" }
    else return { clienteDeleted: clienteDeleted.deleteCount, message: "Usuario eliminado" }
  } catch (error) {
    return { message: error.message }
  }
}
module.exports = { deleteCliente }
