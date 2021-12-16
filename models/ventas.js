const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ventasSchema = new Schema({

  vendedor: { type: String},
  orden: {type: Number},
  email:  { type: String},
  descripcion: { type: String},
  fecha: {type: String, trim: ''},
  tipodepago:  {type: String},
  total: {type: Number},


},{
  timestamps:true
})
const Ventas = mongoose.model('Ventas', ventasSchema)
module.exports = Ventas
