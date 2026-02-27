const service = require('./customer.service')
const { sendSuccess, sendError } = require('../../utils/response')

// ── Customer Type ─────────────────────────────────────────────────────────────
exports.getAllTypes = async (req, res, next) => {
    try { sendSuccess(res, await service.getAllTypes()) } catch (e) { next(e) }
}
exports.getTypeById = async (req, res, next) => {
    try {
        const data = await service.getTypeById(req.params.id)
        if (!data) return sendError(res, 'Customer type not found', 404)
        sendSuccess(res, data)
    } catch (e) { next(e) }
}
exports.createType = async (req, res, next) => {
    try { sendSuccess(res, { typeId: await service.createType(req.body) }, 'Created', 201) } catch (e) { next(e) }
}
exports.updateType = async (req, res, next) => {
    try {
        const affected = await service.updateType(req.params.id, req.body)
        if (!affected) return sendError(res, 'Customer type not found', 404)
        sendSuccess(res, null, 'Updated')
    } catch (e) { next(e) }
}
exports.removeType = async (req, res, next) => {
    try {
        const affected = await service.removeType(req.params.id)
        if (!affected) return sendError(res, 'Customer type not found', 404)
        sendSuccess(res, null, 'Deleted')
    } catch (e) { next(e) }
}

// ── Customer ──────────────────────────────────────────────────────────────────
exports.getAll = async (req, res, next) => {
    try { sendSuccess(res, await service.getAll(req.query)) } catch (e) { next(e) }
}
exports.getById = async (req, res, next) => {
    try {
        const data = await service.getById(req.params.id)
        if (!data) return sendError(res, 'Customer not found', 404)
        sendSuccess(res, data)
    } catch (e) { next(e) }
}
exports.create = async (req, res, next) => {
    try { sendSuccess(res, { customerId: await service.create(req.body) }, 'Created', 201) } catch (e) { next(e) }
}
exports.update = async (req, res, next) => {
    try {
        const affected = await service.update(req.params.id, req.body)
        if (!affected) return sendError(res, 'Customer not found', 404)
        sendSuccess(res, null, 'Updated')
    } catch (e) { next(e) }
}
exports.remove = async (req, res, next) => {
    try {
        const affected = await service.remove(req.params.id)
        if (!affected) return sendError(res, 'Customer not found', 404)
        sendSuccess(res, null, 'Deleted')
    } catch (e) { next(e) }
}
