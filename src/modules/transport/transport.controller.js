const service = require('./transport.service')
const { sendSuccess, sendError } = require('../../utils/response')

// ── Car Type ──────────────────────────────────────────────────────────────────
exports.getAllCartypes = async (req, res, next) => {
    try { sendSuccess(res, await service.getAllCartypes()) } catch (e) { next(e) }
}
exports.getCartypeById = async (req, res, next) => {
    try {
        const data = await service.getCartypeById(req.params.id)
        if (!data) return sendError(res, 'Car type not found', 404)
        sendSuccess(res, data)
    } catch (e) { next(e) }
}
exports.createCartype = async (req, res, next) => {
    try { sendSuccess(res, { id: await service.createCartype(req.body) }, 'Created', 201) } catch (e) { next(e) }
}
exports.updateCartype = async (req, res, next) => {
    try {
        const affected = await service.updateCartype(req.params.id, req.body)
        if (!affected) return sendError(res, 'Car type not found', 404)
        sendSuccess(res, null, 'Updated')
    } catch (e) { next(e) }
}
exports.removeCartype = async (req, res, next) => {
    try {
        const affected = await service.removeCartype(req.params.id)
        if (!affected) return sendError(res, 'Car type not found', 404)
        sendSuccess(res, null, 'Deleted')
    } catch (e) { next(e) }
}

// ── Car ───────────────────────────────────────────────────────────────────────
exports.getAllCars = async (req, res, next) => {
    try { sendSuccess(res, await service.getAllCars()) } catch (e) { next(e) }
}
exports.getCarById = async (req, res, next) => {
    try {
        const data = await service.getCarById(req.params.id)
        if (!data) return sendError(res, 'Car not found', 404)
        sendSuccess(res, data)
    } catch (e) { next(e) }
}
exports.createCar = async (req, res, next) => {
    try { sendSuccess(res, { carId: await service.createCar(req.body) }, 'Created', 201) } catch (e) { next(e) }
}
exports.updateCar = async (req, res, next) => {
    try {
        const affected = await service.updateCar(req.params.id, req.body)
        if (!affected) return sendError(res, 'Car not found', 404)
        sendSuccess(res, null, 'Updated')
    } catch (e) { next(e) }
}
exports.removeCar = async (req, res, next) => {
    try {
        const affected = await service.removeCar(req.params.id)
        if (!affected) return sendError(res, 'Car not found', 404)
        sendSuccess(res, null, 'Deleted')
    } catch (e) { next(e) }
}

// ── Route ─────────────────────────────────────────────────────────────────────
exports.getAllRoutes = async (req, res, next) => {
    try { sendSuccess(res, await service.getAllRoutes()) } catch (e) { next(e) }
}
exports.getRouteById = async (req, res, next) => {
    try {
        const data = await service.getRouteById(req.params.id)
        if (!data) return sendError(res, 'Route not found', 404)
        sendSuccess(res, data)
    } catch (e) { next(e) }
}
exports.createRoute = async (req, res, next) => {
    try { sendSuccess(res, { routeId: await service.createRoute(req.body) }, 'Created', 201) } catch (e) { next(e) }
}
exports.updateRoute = async (req, res, next) => {
    try {
        const affected = await service.updateRoute(req.params.id, req.body)
        if (!affected) return sendError(res, 'Route not found', 404)
        sendSuccess(res, null, 'Updated')
    } catch (e) { next(e) }
}
exports.removeRoute = async (req, res, next) => {
    try {
        const affected = await service.removeRoute(req.params.id)
        if (!affected) return sendError(res, 'Route not found', 404)
        sendSuccess(res, null, 'Deleted')
    } catch (e) { next(e) }
}

// ── Station ───────────────────────────────────────────────────────────────────
exports.getAllStations = async (req, res, next) => {
    try { sendSuccess(res, await service.getAllStations()) } catch (e) { next(e) }
}
exports.getStationById = async (req, res, next) => {
    try {
        const data = await service.getStationById(req.params.id)
        if (!data) return sendError(res, 'Station not found', 404)
        sendSuccess(res, data)
    } catch (e) { next(e) }
}
exports.createStation = async (req, res, next) => {
    try { sendSuccess(res, { id: await service.createStation(req.body) }, 'Created', 201) } catch (e) { next(e) }
}
exports.updateStation = async (req, res, next) => {
    try {
        const affected = await service.updateStation(req.params.id, req.body)
        if (!affected) return sendError(res, 'Station not found', 404)
        sendSuccess(res, null, 'Updated')
    } catch (e) { next(e) }
}
exports.removeStation = async (req, res, next) => {
    try {
        const affected = await service.removeStation(req.params.id)
        if (!affected) return sendError(res, 'Station not found', 404)
        sendSuccess(res, null, 'Deleted')
    } catch (e) { next(e) }
}

// ── Transport ─────────────────────────────────────────────────────────────────
exports.getAll = async (req, res, next) => {
    try { sendSuccess(res, await service.getAll()) } catch (e) { next(e) }
}
exports.getById = async (req, res, next) => {
    try {
        const data = await service.getById(req.params.id)
        if (!data) return sendError(res, 'Transport not found', 404)
        sendSuccess(res, data)
    } catch (e) { next(e) }
}
exports.create = async (req, res, next) => {
    try { sendSuccess(res, { transportId: await service.create(req.body) }, 'Created', 201) } catch (e) { next(e) }
}
exports.update = async (req, res, next) => {
    try {
        const affected = await service.update(req.params.id, req.body)
        if (!affected) return sendError(res, 'Transport not found', 404)
        sendSuccess(res, null, 'Updated')
    } catch (e) { next(e) }
}
exports.remove = async (req, res, next) => {
    try {
        const affected = await service.remove(req.params.id)
        if (!affected) return sendError(res, 'Transport not found', 404)
        sendSuccess(res, null, 'Deleted')
    } catch (e) { next(e) }
}
exports.getPath = async (req, res, next) => {
    try { sendSuccess(res, await service.getPath(req.params.id)) } catch (e) { next(e) }
}
