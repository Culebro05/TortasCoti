const express = require('express')
const router = express.Router()
const passport = require('passport')
const { ctrlSelectPedidos } = require('../controllers/pedidos/ctrlSelectPedidos')
const { ctrlUpdatePedidos } = require('../controllers/pedidos/ctrlUpdatePedidos')
const { ctrlCreatePedidos } = require('../controllers/pedidos/ctrlCreatePedidos')
const { ctrlDeletePedidos } = require('../controllers/pedidos/ctrlDeletePedidos')



router.get('/',
passport.authenticate('jwt', {session:false}),
ctrlSelectPedidos
)

router.post('/',
passport.authenticate('jwt', {session:false}),
ctrlCreatePedidos
)

router.put('/:email',
passport.authenticate('jwt', {session:false}),
ctrlUpdatePedidos
)

router.delete('/:email',
passport.authenticate('jwt', {session:false}),
ctrlDeletePedidos
)


module.exports = router

