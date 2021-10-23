const express = require('express')
const passport = require('passport')
const router = express.Router()
const Menu = require('../models/menu')

router.get('/',
passport.authenticate('jwt', {session:false}),
(req, res) => {

    try{
         res.json({

          Categoria: 'Tortas',
          Especialidad: 'Cubana ',
          Precio: '35',

         })
    }catch(error){
         console.log(`Error: ${error}`)
    }
})

module.exports = router
