const mongoose = require('mongoose')
const Schema = mongoose.Schema
const pedidosSchema = new Schema({
  categoria: String,
  product: String,
  price: {type: Number},
  email: { required: true, type: String, lowercase: true, trim: true, unique: true},
  direction: { type: String, default: ''},
  unidades: {type: Number},
},{
  timestamps:true
})
const Pedidos= mongoose.model('Pedidos', pedidosSchema)
module.exports = Pedidos
