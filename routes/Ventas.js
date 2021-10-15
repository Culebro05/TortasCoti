const express = require('express')

const router = express.Router()
const ventas = require('../models/ventas')

router.get('/', (req, res) => {
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
