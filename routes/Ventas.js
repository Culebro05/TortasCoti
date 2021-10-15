const express = require('express')

const router = express.Router()
const ventas = require('../models/ventas')

router.get('/', (req, res) => {
  try{
  res.json({
    name: 'Yare',
    lastName: 'Coto'
    })
  }catch(error){
    console.log(`Error: ${error}`)
  }
})

module.exports = router
