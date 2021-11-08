const mongoose = require('mongoose')
const Schema = mongoose.Schema

const clienteSchema = new Schema({
  name: String,
  lastname: { type: String, default: ''},
  email: { required: true, type: String, lowercase: true, trim: true, unique: true},
  genre: { type: String, enum:['H', 'M', 'U'], default: 'U' },
  phone: {type: Number},
  address: { type: String, default: ''},
  password: {require: true, type: String},

  },{
  timestamps: true
})

const Clientes = mongoose.model('Clientes', clienteSchema)
module.exports = Clientes
