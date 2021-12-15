const express = require('express')
const router = express.Router()
const passport = require('passport')
const { ctrlSelectMenu } = require('../controllers/menu/ctrlSelectMenu')
const { ctrlUpdateMenu } = require('../controllers/menu/ctrlUpdateMenu')
const { ctrlCreateMenu } = require('../controllers/menu/ctrlCreateMenu')
const { ctrlDeleteMenu } = require('../controllers/menu/ctrlDeleteMenu')



router.get('/',
passport.authenticate('jwt', {session:false}),
ctrlSelectMenu
)

router.post('/',
passport.authenticate('jwt', {session:false}),
ctrlCreateMenu
)

router.put('/:name',
passport.authenticate('jwt', {session:false}),
ctrlUpdateMenu
)

router.delete('/:name',
passport.authenticate('jwt', {session:false}),
ctrlDeleteMenu
)


module.exports = router

