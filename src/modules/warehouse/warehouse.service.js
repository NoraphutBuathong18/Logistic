const repo = require('./warehouse.repository')

// ── Branch ────────────────────────────────────────────────────────────────────
exports.getAllBranches = () => repo.findAllBranches()
exports.getBranchById = (id) => repo.findBranchById(id)
exports.createBranch = (data) => repo.createBranch(data)
exports.updateBranch = (id, data) => repo.updateBranch(id, data)
exports.removeBranch = (id) => repo.removeBranch(id)

// ── Warehouse ─────────────────────────────────────────────────────────────────
exports.getAll = () => repo.findAll()
exports.getById = (id) => repo.findById(id)
exports.create = (data) => repo.create(data)
exports.update = (id, data) => repo.update(id, data)
exports.remove = (id) => repo.remove(id)

// ── Warehouse Product ─────────────────────────────────────────────────────────
exports.getProductsByWarehouse = (warehouseId) => repo.findProductsByWarehouse(warehouseId)
exports.addProduct = (warehouseId, data) => repo.addProduct(warehouseId, data)
exports.removeProduct = (warehouseId, productId) => repo.removeProduct(warehouseId, productId)
