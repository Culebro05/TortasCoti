const express = require('express')
const router = express.Router()
const passport = require('passport')
const { ctrlSelectCliente } = require('../controllers/cliente/ctrlSelectCliente')
const { ctrlUpdateCliente } = require('../controllers/cliente/ctrlUpdateCliente')
const { ctrlCreateCliente } = require('../controllers/cliente/ctrlCreateCliente')
const { ctrlDeleteCliente } = require('../controllers/cliente/ctrlDeleteCliente')



router.get('/',
passport.authenticate('jwt', {session:false}),
ctrlSelectCliente
)

router.post('/',
passport.authenticate('jwt', {session:false}),
ctrlCreateCliente
)

router.put('/:email',
passport.authenticate('jwt', {session:false}),
ctrlUpdateCliente
)

router.delete('/:email',
passport.authenticate('jwt', {session:false}),
ctrlDeleteCliente
)


module.exports = router

