const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ventasSchema = new Schema({

  vendedor: String,
  orden: {type: String,},
  emailCliente:  String,
  descripcion: String,
  fecha: {type: String, trim: ''},
  tipodepago:  String,
  total: {type: String,}


},{
  timestamps:true
})
const Ventas = mongoose.model('Ventas', ventasSchema)
module.exports = Ventas
