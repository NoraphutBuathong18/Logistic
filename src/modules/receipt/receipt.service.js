const repo = require('./receipt.repository')

exports.getAll = async (query) => {
    return await repo.findAll(query)
}

exports.getById = async (id) => {
    const rows = await repo.findById(id)
    if (!rows || rows.length === 0) return null
    return rows
}

exports.create = async (data) => {
    const { details = [], ...receiptData } = data
    const receiptId = await repo.create(receiptData)
    for (const detail of details) {
        await repo.createDetail(receiptId, detail)
    }
    return receiptId
}

exports.update = async (id, data) => {
    return await repo.update(id, data)
}

exports.remove = async (id) => {
    return await repo.remove(id)
}

exports.getDetails = async (receiptId) => {
    return await repo.findDetailsByReceiptId(receiptId)
}