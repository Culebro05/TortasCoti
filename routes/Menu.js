const express = require('express')
const passport = require('passport')
const router = express.Router()

const Menu = require('../models/menu')

router.get('/', (req, res) => {
  res.json([
    {
      Categoria: 'Tortas',
    },
    {
      Especialidad: 'Cubana ',
      Precio: 35
    },
    {
      Especialidad: 'Jamon ',
      Precio: 25
    },
  ] )
})

router.get('/', (req, res) => {
  res.json([
    {
      Categoria: 'Papas',
    },
    {
      Especialidad: 'Francesa',
      Precio: 45
    }
  ] )
})

router.get('/filter', (req, res) => {
  passport.authenticate('jwt', {session:false}),
  res.json([
    {
      Categoria: 'Bebidas',
    },
    {
      Malteadas1L: 'Chocomilk',
      Precio: 30
    }
  ])
})

module.exports = router
