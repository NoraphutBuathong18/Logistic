const db = require('../../config/db')

// ── Branch ────────────────────────────────────────────────────────────────────

exports.findAllBranches = async () => {
    const [rows] = await db.execute(`SELECT * FROM branch`, {})
    return rows
}

exports.findBranchById = async (id) => {
    const [rows] = await db.execute(
        `SELECT * FROM branch WHERE branchId = :id`, { id }
    )
    return rows[0]
}

exports.createBranch = async ({ branchName }) => {
    const [result] = await db.execute(
        `INSERT INTO branch (branchName) VALUES (:branchName) RETURNING branchId INTO :outId`,
        { branchName, outId: db.bindOut() }
    )
    return result.insertId
}

exports.updateBranch = async (id, { branchName }) => {
    const [result] = await db.execute(
        `UPDATE branch SET branchName=:branchName WHERE branchId=:id`, { branchName, id }
    )
    return result.affectedRows
}

exports.removeBranch = async (id) => {
    const [result] = await db.execute(
        `DELETE FROM branch WHERE branchId=:id`, { id }
    )
    return result.affectedRows
}

// ── Warehouse ─────────────────────────────────────────────────────────────────

exports.findAll = async () => {
    const [rows] = await db.execute(`SELECT * FROM warehouse`, {})
    return rows
}

exports.findById = async (id) => {
    const [rows] = await db.execute(
        `SELECT * FROM warehouse WHERE warehouseId = :id`, { id }
    )
    return rows[0]
}

exports.create = async ({ warehouseName, location, capacity, currentCapacity, branchId }) => {
    const [result] = await db.execute(
        `INSERT INTO warehouse (warehouseName, location, capacity, currentCapacity, branchId)
         VALUES (:warehouseName, :location, :capacity, :currentCapacity, :branchId)
         RETURNING warehouseId INTO :outId`,
        { warehouseName, location, capacity, currentCapacity, branchId, outId: db.bindOut() }
    )
    return result.insertId
}

exports.update = async (id, { warehouseName, location, capacity, currentCapacity, branchId }) => {
    const [result] = await db.execute(
        `UPDATE warehouse SET warehouseName=:warehouseName, location=:location, capacity=:capacity,
         currentCapacity=:currentCapacity, branchId=:branchId WHERE warehouseId=:id`,
        { warehouseName, location, capacity, currentCapacity, branchId, id }
    )
    return result.affectedRows
}

exports.remove = async (id) => {
    const [result] = await db.execute(
        `DELETE FROM warehouse WHERE warehouseId=:id`, { id }
    )
    return result.affectedRows
}

// ── Warehouse Product ─────────────────────────────────────────────────────────

exports.findProductsByWarehouse = async (warehouseId) => {
    const [rows] = await db.execute(
        `SELECT * FROM warehouse_product WHERE warehouseId = :warehouseId`, { warehouseId }
    )
    return rows
}

exports.addProduct = async (warehouseId, { productId, quantity, lastUpdated }) => {
    const [result] = await db.execute(
        `INSERT INTO warehouse_product (warehouseId, productId, quantity, lastUpdated)
         VALUES (:warehouseId, :productId, :quantity, :lastUpdated)
         RETURNING warehouseId INTO :outId`,
        { warehouseId, productId, quantity, lastUpdated, outId: db.bindOut() }
    )
    return result.insertId
}

exports.removeProduct = async (warehouseId, productId) => {
    const [result] = await db.execute(
        `DELETE FROM warehouse_product WHERE warehouseId=:warehouseId AND productId=:productId`,
        { warehouseId, productId }
    )
    return result.affectedRows
}
