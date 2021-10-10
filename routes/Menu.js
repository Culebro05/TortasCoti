const express = require('express')

const router = express.Router()

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
