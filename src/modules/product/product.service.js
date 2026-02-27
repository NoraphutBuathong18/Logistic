const repo = require('./product.repository')

// ── Product Type ──────────────────────────────────────────────────────────────
exports.getAllTypes = () => repo.findAllTypes()
exports.getTypeById = (id) => repo.findTypeById(id)
exports.createType = (data) => repo.createType(data)
exports.updateType = (id, data) => repo.updateType(id, data)
exports.removeType = (id) => repo.removeType(id)

// ── Product ───────────────────────────────────────────────────────────────────
exports.getAll = (query) => repo.findAll(query)
exports.getById = (id) => repo.findById(id)
exports.create = (data) => repo.create(data)
exports.update = (id, data) => repo.update(id, data)
exports.remove = (id) => repo.remove(id)
