const mongoose = require('mongoose')
const Schema = mongoose.Schema
const pedidosSchema = new Schema({
  orden: {type: Number},
  product: {type: String},
  cantproduct: {type: Number},
  price: {type: Number},
  total: {type: Number},
  email: { required: true, type: String, lowercase: true, trim: true, unique: true},
  address: { type: String, default: ''},
  fecha: {type: Number, trim: ''}
},{
  timestamps:true
})
const Pedidos= mongoose.model('Pedidos', pedidosSchema)
module.exports = Pedidos
