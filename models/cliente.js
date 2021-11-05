const mongoose = require('mongoose')
const Schema = mongoose.Schema

const clienteSchema = new Schema({
  name: String,
  lastname: { type: String, default: ''},
  genre: { type: String, enum:['H', 'M', 'U'], default: 'U' },
  phone: {type: Number},
  address: { type: String, default: ''},
  email: { required: true, type: String, lowercase: true, trim: true, unique: true},

  },{
  timestamps: true
})

const Clientes = mongoose.model('Clientes', clienteSchema)
module.exports = Clientes
