const repo = require('./employee.repository')

// ── Position ──────────────────────────────────────────────────────────────────
exports.getAllPositions = () => repo.findAllPositions()
exports.getPositionById = (id) => repo.findPositionById(id)
exports.createPosition = (data) => repo.createPosition(data)
exports.updatePosition = (id, data) => repo.updatePosition(id, data)
exports.removePosition = (id) => repo.removePosition(id)

// ── Employee ──────────────────────────────────────────────────────────────────
exports.getAll = (query) => repo.findAll(query)
exports.getById = (id) => repo.findById(id)
exports.create = (data) => repo.create(data)
exports.update = (id, data) => repo.update(id, data)
exports.remove = (id) => repo.remove(id)
