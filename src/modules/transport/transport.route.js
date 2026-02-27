const express = require('express')
const ctrl = require('./transport.controller')

const router = express.Router()

// Car Types
router.get('/cartypes', ctrl.getAllCartypes)
router.get('/cartypes/:id', ctrl.getCartypeById)
router.post('/cartypes', ctrl.createCartype)
router.put('/cartypes/:id', ctrl.updateCartype)
router.delete('/cartypes/:id', ctrl.removeCartype)

// Cars
router.get('/cars', ctrl.getAllCars)
router.get('/cars/:id', ctrl.getCarById)
router.post('/cars', ctrl.createCar)
router.put('/cars/:id', ctrl.updateCar)
router.delete('/cars/:id', ctrl.removeCar)

// Routes
router.get('/routes', ctrl.getAllRoutes)
router.get('/routes/:id', ctrl.getRouteById)
router.post('/routes', ctrl.createRoute)
router.put('/routes/:id', ctrl.updateRoute)
router.delete('/routes/:id', ctrl.removeRoute)

// Stations
router.get('/stations', ctrl.getAllStations)
router.get('/stations/:id', ctrl.getStationById)
router.post('/stations', ctrl.createStation)
router.put('/stations/:id', ctrl.updateStation)
router.delete('/stations/:id', ctrl.removeStation)

// Transports
router.get('/', ctrl.getAll)
router.get('/:id', ctrl.getById)
router.post('/', ctrl.create)
router.put('/:id', ctrl.update)
router.delete('/:id', ctrl.remove)
router.get('/:id/path', ctrl.getPath)

module.exports = router
