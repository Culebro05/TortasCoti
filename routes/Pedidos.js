const express = require('express')

const router = express.Router()
const pedidos = require('../models/pedidos')

router.get('/', (req, res) => {
  try{
  res.json({
    name: 'yare',
    lastName: 'Coto'
    })
  }catch(error){
    console.log(`Error: ${error}`)
  }
})

module.exports = router
