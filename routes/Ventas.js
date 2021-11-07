const express = require('express')
const router = express.Router()
const passport = require('passport')
const { ctrlSelectVentas } = require('../controllers/ventas/ctrlSelectVentas')
const { ctrlUpdateVentas } = require('../controllers/ventas/ctrlUpdateVentas')
const { ctrlCreateVentas } = require('../controllers/ventas/ctrlCreateVentas')
const { ctrlDeleteVentas } = require('../controllers/ventas/ctrlDeleteVentas')



router.get('/',
passport.authenticate('jwt', {session:false}),
ctrlSelectVentas
)

router.post('/',
passport.authenticate('jwt', {session:false}),
ctrlCreateVentas
)

router.put('/:orden',
passport.authenticate('jwt', {session:false}),
ctrlUpdateVentas
)

router.delete('/:orden',
passport.authenticate('jwt', {session:false}),
ctrlDeleteVentas
)


module.exports = router
