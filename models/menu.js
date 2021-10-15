const mongoose = require('mongoose')
const Schema = mongoose.Schema
const menuSchema = new Schema({
  categoria: String,
  name: String,
  price: {type: Number},
},{
  timestamps:true
})
const Menu = mongoose.model('Menu', menuSchema)
module.exports = Menu
