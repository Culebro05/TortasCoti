const express = require('express')
const passport = require('passport')

const router = express.Router()
const pedidos = require('../models/pedidos')

router.get('/',passport.authenticate('jwt', {session:false}),
(req, res) => {
  try{

  res.json({
    categoria:'bebidas',
    product: 'refresco 600ml',
    price:'16',
    email:'josephculebro123@gmail.com'
    })
  }catch(error){
    console.log(`Error: ${error}`)
  }
})

module.exports = router
