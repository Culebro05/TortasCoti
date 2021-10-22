const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ventasSchema = new Schema({

  vendedor: String,
  orden: {type: Number},
  descripcion: String,
  fecha: {type: Number},
  tipodepago:  String,
  total: {type: Number},


},{
  timestamps:true
})
const Ventas = mongoose.model('Ventas', ventasSchema)
module.exports = Ventas
