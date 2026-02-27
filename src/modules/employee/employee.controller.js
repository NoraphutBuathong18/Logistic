const service = require('./employee.service')
const { sendSuccess, sendError } = require('../../utils/response')

// ── Position ──────────────────────────────────────────────────────────────────
exports.getAllPositions = async (req, res, next) => {
    try { sendSuccess(res, await service.getAllPositions()) } catch (e) { next(e) }
}
exports.getPositionById = async (req, res, next) => {
    try {
        const data = await service.getPositionById(req.params.id)
        if (!data) return sendError(res, 'Position not found', 404)
        sendSuccess(res, data)
    } catch (e) { next(e) }
}
exports.createPosition = async (req, res, next) => {
    try { sendSuccess(res, { id: await service.createPosition(req.body) }, 'Created', 201) } catch (e) { next(e) }
}
exports.updatePosition = async (req, res, next) => {
    try {
        const affected = await service.updatePosition(req.params.id, req.body)
        if (!affected) return sendError(res, 'Position not found', 404)
        sendSuccess(res, null, 'Updated')
    } catch (e) { next(e) }
}
exports.removePosition = async (req, res, next) => {
    try {
        const affected = await service.removePosition(req.params.id)
        if (!affected) return sendError(res, 'Position not found', 404)
        sendSuccess(res, null, 'Deleted')
    } catch (e) { next(e) }
}

// ── Employee ──────────────────────────────────────────────────────────────────
exports.getAll = async (req, res, next) => {
    try { sendSuccess(res, await service.getAll(req.query)) } catch (e) { next(e) }
}
exports.getById = async (req, res, next) => {
    try {
        const data = await service.getById(req.params.id)
        if (!data) return sendError(res, 'Employee not found', 404)
        sendSuccess(res, data)
    } catch (e) { next(e) }
}
exports.create = async (req, res, next) => {
    try { sendSuccess(res, { employeeId: await service.create(req.body) }, 'Created', 201) } catch (e) { next(e) }
}
exports.update = async (req, res, next) => {
    try {
        const affected = await service.update(req.params.id, req.body)
        if (!affected) return sendError(res, 'Employee not found', 404)
        sendSuccess(res, null, 'Updated')
    } catch (e) { next(e) }
}
exports.remove = async (req, res, next) => {
    try {
        const affected = await service.remove(req.params.id)
        if (!affected) return sendError(res, 'Employee not found', 404)
        sendSuccess(res, null, 'Deleted')
    } catch (e) { next(e) }
}
