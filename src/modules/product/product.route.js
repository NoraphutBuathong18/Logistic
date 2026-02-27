const express = require('express')
const ctrl = require('./product.controller')

const router = express.Router()

// Product Types
router.get('/types', ctrl.getAllTypes)
router.get('/types/:id', ctrl.getTypeById)
router.post('/types', ctrl.createType)
router.put('/types/:id', ctrl.updateType)
router.delete('/types/:id', ctrl.removeType)

// Products
router.get('/', ctrl.getAll)
router.get('/:id', ctrl.getById)
router.post('/', ctrl.create)
router.put('/:id', ctrl.update)
router.delete('/:id', ctrl.remove)

module.exports = router
