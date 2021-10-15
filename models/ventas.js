const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ventasSchema = new Schema({
  categoria: String,
  name: String,
  price: {type: Number},
},{
  timestamps:true
})
const Ventas = mongoose.model('Ventas', ventasSchema)
module.exports = Ventas
