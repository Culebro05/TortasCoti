const Cliente = require('../../models/cliente')

async function deleteCliente({email}) {
  try {
    const clienteDeleted = await Cliente.deleteOne({ email })
    console.log(clienteDeleted)
    if (clienteDeleted.deletedCount == 0)
      return { clienteDeleted: clienteDeleted.deleteCount, message: "Cliente No encontrado" }
    else return { clienteDeleted: clienteDeleted.deleteCount, message: "Cliente eliminado" }
  } catch (error) {
    return { message: error.message }
  }
}
module.exports = { deleteCliente }
