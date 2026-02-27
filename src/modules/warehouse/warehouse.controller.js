const service = require('./warehouse.service')
const { sendSuccess, sendError } = require('../../utils/response')

// ── Branch ────────────────────────────────────────────────────────────────────
exports.getAllBranches = async (req, res, next) => {
    try { sendSuccess(res, await service.getAllBranches()) } catch (e) { next(e) }
}
exports.getBranchById = async (req, res, next) => {
    try {
        const data = await service.getBranchById(req.params.id)
        if (!data) return sendError(res, 'Branch not found', 404)
        sendSuccess(res, data)
    } catch (e) { next(e) }
}
exports.createBranch = async (req, res, next) => {
    try { sendSuccess(res, { branchId: await service.createBranch(req.body) }, 'Created', 201) } catch (e) { next(e) }
}
exports.updateBranch = async (req, res, next) => {
    try {
        const affected = await service.updateBranch(req.params.id, req.body)
        if (!affected) return sendError(res, 'Branch not found', 404)
        sendSuccess(res, null, 'Updated')
    } catch (e) { next(e) }
}
exports.removeBranch = async (req, res, next) => {
    try {
        const affected = await service.removeBranch(req.params.id)
        if (!affected) return sendError(res, 'Branch not found', 404)
        sendSuccess(res, null, 'Deleted')
    } catch (e) { next(e) }
}

// ── Warehouse ─────────────────────────────────────────────────────────────────
exports.getAll = async (req, res, next) => {
    try { sendSuccess(res, await service.getAll()) } catch (e) { next(e) }
}
exports.getById = async (req, res, next) => {
    try {
        const data = await service.getById(req.params.id)
        if (!data) return sendError(res, 'Warehouse not found', 404)
        sendSuccess(res, data)
    } catch (e) { next(e) }
}
exports.create = async (req, res, next) => {
    try { sendSuccess(res, { warehouseId: await service.create(req.body) }, 'Created', 201) } catch (e) { next(e) }
}
exports.update = async (req, res, next) => {
    try {
        const affected = await service.update(req.params.id, req.body)
        if (!affected) return sendError(res, 'Warehouse not found', 404)
        sendSuccess(res, null, 'Updated')
    } catch (e) { next(e) }
}
exports.remove = async (req, res, next) => {
    try {
        const affected = await service.remove(req.params.id)
        if (!affected) return sendError(res, 'Warehouse not found', 404)
        sendSuccess(res, null, 'Deleted')
    } catch (e) { next(e) }
}

// ── Warehouse Product ─────────────────────────────────────────────────────────
exports.getProducts = async (req, res, next) => {
    try { sendSuccess(res, await service.getProductsByWarehouse(req.params.id)) } catch (e) { next(e) }
}
exports.addProduct = async (req, res, next) => {
    try { sendSuccess(res, { id: await service.addProduct(req.params.id, req.body) }, 'Added', 201) } catch (e) { next(e) }
}
exports.removeProduct = async (req, res, next) => {
    try {
        const affected = await service.removeProduct(req.params.id, req.params.productId)
        if (!affected) return sendError(res, 'Record not found', 404)
        sendSuccess(res, null, 'Removed')
    } catch (e) { next(e) }
}
