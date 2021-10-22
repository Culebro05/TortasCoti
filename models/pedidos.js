const mongoose = require('mongoose')
const Schema = mongoose.Schema
const pedidosSchema = new Schema({
  orden: {type: Number},
  product: String,
  cantidad: {type: Number},
  price: {type: Number},
  email: { required: true, type: String, lowercase: true, trim: true, unique: true},
  direction: { type: String, default: ''},
  total: {type: Number},
},{
  timestamps:true
})
const Pedidos= mongoose.model('Pedidos', pedidosSchema)
module.exports = Pedidos
