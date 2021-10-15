const express = require('express')

const router = express.Router()
const cliente = require('../models/cliente')

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