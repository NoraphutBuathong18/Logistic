const express = require('express')
const ctrl = require('./warehouse.controller')

const router = express.Router()

// Branches
router.get('/branches', ctrl.getAllBranches)
router.get('/branches/:id', ctrl.getBranchById)
router.post('/branches', ctrl.createBranch)
router.put('/branches/:id', ctrl.updateBranch)
router.delete('/branches/:id', ctrl.removeBranch)

// Warehouses
router.get('/', ctrl.getAll)
router.get('/:id', ctrl.getById)
router.post('/', ctrl.create)
router.put('/:id', ctrl.update)
router.delete('/:id', ctrl.remove)

// Warehouse Products
router.get('/:id/products', ctrl.getProducts)
router.post('/:id/products', ctrl.addProduct)
router.delete('/:id/products/:productId', ctrl.removeProduct)

module.exports = router
