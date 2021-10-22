const express = require('express')
const passport = require('passport')

const router = express.Router()
const ventas = require('../models/ventas')

router.get('/', (req, res) => {
  try{
    passport.authenticate('jwt', {session:false}),
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
