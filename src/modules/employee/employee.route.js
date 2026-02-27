const express = require('express')
const ctrl = require('./employee.controller')

const router = express.Router()

// Positions
router.get('/positions', ctrl.getAllPositions)
router.get('/positions/:id', ctrl.getPositionById)
router.post('/positions', ctrl.createPosition)
router.put('/positions/:id', ctrl.updatePosition)
router.delete('/positions/:id', ctrl.removePosition)

// Employees
router.get('/', ctrl.getAll)
router.get('/:id', ctrl.getById)
router.post('/', ctrl.create)
router.put('/:id', ctrl.update)
router.delete('/:id', ctrl.remove)

module.exports = router
