const express = require('express')
const router = express.Router()
const passport = require('passport')
const { ctrlSelectCliente } = require('../controllers/cliente/ctrlSelectCliente')

router.get('/',
passport.authenticate('jwt', {session:false}),
ctrlSelectCliente
)

router.put('/',
passport.authenticate('jwt', {session:false}),
)

router.delete('/',
passport.authenticate('jwt', {session:false}),
)
module.exports = router

