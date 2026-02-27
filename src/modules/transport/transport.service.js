const repo = require('./transport.repository')

// ── Car Type ──────────────────────────────────────────────────────────────────
exports.getAllCartypes = () => repo.findAllCartypes()
exports.getCartypeById = (id) => repo.findCartypeById(id)
exports.createCartype = (data) => repo.createCartype(data)
exports.updateCartype = (id, data) => repo.updateCartype(id, data)
exports.removeCartype = (id) => repo.removeCartype(id)

// ── Car ───────────────────────────────────────────────────────────────────────
exports.getAllCars = () => repo.findAllCars()
exports.getCarById = (id) => repo.findCarById(id)
exports.createCar = (data) => repo.createCar(data)
exports.updateCar = (id, data) => repo.updateCar(id, data)
exports.removeCar = (id) => repo.removeCar(id)

// ── Route ─────────────────────────────────────────────────────────────────────
exports.getAllRoutes = () => repo.findAllRoutes()
exports.getRouteById = (id) => repo.findRouteById(id)
exports.createRoute = (data) => repo.createRoute(data)
exports.updateRoute = (id, data) => repo.updateRoute(id, data)
exports.removeRoute = (id) => repo.removeRoute(id)

// ── Station ───────────────────────────────────────────────────────────────────
exports.getAllStations = () => repo.findAllStations()
exports.getStationById = (id) => repo.findStationById(id)
exports.createStation = (data) => repo.createStation(data)
exports.updateStation = (id, data) => repo.updateStation(id, data)
exports.removeStation = (id) => repo.removeStation(id)

// ── Transport ─────────────────────────────────────────────────────────────────
exports.getAll = () => repo.findAll()
exports.getById = (id) => repo.findById(id)
exports.create = (data) => repo.create(data)
exports.update = (id, data) => repo.update(id, data)
exports.remove = (id) => repo.remove(id)
exports.getPath = (transportId) => repo.findPathByTransport(transportId)
