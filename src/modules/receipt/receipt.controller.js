const service = require('./receipt.service')
const { sendSuccess, sendError } = require('../../utils/response')

exports.getAll = async (req, res, next) => {
    try {
        const data = await service.getAll(req.query)
        sendSuccess(res, data)
    } catch (err) { next(err) }
}

exports.getById = async (req, res, next) => {
    try {
        const data = await service.getById(req.params.id)
        if (!data) return sendError(res, 'Receipt not found', 404)
        sendSuccess(res, data)
    } catch (err) { next(err) }
}

exports.create = async (req, res, next) => {
    try {
        const id = await service.create(req.body)
        sendSuccess(res, { receiptId: id }, 'Receipt created', 201)
    } catch (err) { next(err) }
}

exports.update = async (req, res, next) => {
    try {
        const affected = await service.update(req.params.id, req.body)
        if (!affected) return sendError(res, 'Receipt not found', 404)
        sendSuccess(res, null, 'Receipt updated')
    } catch (err) { next(err) }
}

exports.remove = async (req, res, next) => {
    try {
        const affected = await service.remove(req.params.id)
        if (!affected) return sendError(res, 'Receipt not found', 404)
        sendSuccess(res, null, 'Receipt deleted')
    } catch (err) { next(err) }
}

exports.getDetails = async (req, res, next) => {
    try {
        const data = await service.getDetails(req.params.id)
        sendSuccess(res, data)
    } catch (err) { next(err) }
}