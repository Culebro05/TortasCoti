const mongoose = require('mongoose')
const Schema = mongoose.Schema
const pedidosSchema = new Schema({
  categoria: String,
  name: String,
  price: {type: Number},
},{
  timestamps:true
})
const Pedidos= mongoose.model('Pedidos', pedidosSchema)
module.exports = Pedidos
