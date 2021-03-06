const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ventasSchema = new Schema({

  vendedor: {type: String},
  orden: {type: Number},
  email:  { required: true, type: String, lowercase: true, trim: true, unique: true},
  descripcion: {type: String},
  fecha: {type: String, trim: ''},
  tipodepago:  {type: String},
  total: {type: Number}


},{
  timestamps:true
})
const Ventas = mongoose.model('Ventas', ventasSchema)
module.exports = Ventas
