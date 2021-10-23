const express = require('express')
const passport = require('passport')

const router = express.Router()
const cliente = require('../models/cliente')

router.get('/', passport.authenticate('jwt', {session:false}),

(req, res) => {
  try{
  res.json({
    name: 'joseph',
    lastName: 'culebro',
    genre: 'H',
    phone: '9222293438',
    email:'josephculebro123@gmail.com'


    })
  }catch(error){
    console.log(`Error: ${error}`)
  }
})

module.exports = router
