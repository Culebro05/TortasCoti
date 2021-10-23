const express = require('express')
const passport = require('passport')

const router = express.Router()
const ventas = require('../models/ventas')

router.get('/', passport.authenticate('jwt', {session:false}),
(req, res) => {
  try{

  res.json({
    categoria:'bebidas',
    product: 'refresco 600ml',
    price:'16',
    total:'16'

    })
  }catch(error){
    console.log(`Error: ${error}`)
  }
})

module.exports = router
