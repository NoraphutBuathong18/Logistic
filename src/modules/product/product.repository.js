const db = require('../../config/db')

// ── Product Type ──────────────────────────────────────────────────────────────

exports.findAllTypes = async () => {
    const [rows] = await db.execute(`SELECT * FROM product_type`, {})
    return rows
}

exports.findTypeById = async (id) => {
    const [rows] = await db.execute(
        `SELECT * FROM product_type WHERE productTypeCode = :id`, { id }
    )
    return rows[0]
}

exports.createType = async ({ productTypeName, description }) => {
    const [result] = await db.execute(
        `INSERT INTO product_type (productTypeName, description)
         VALUES (:productTypeName, :description)
         RETURNING productTypeCode INTO :outId`,
        { productTypeName, description, outId: db.bindOut() }
    )
    return result.insertId
}

exports.updateType = async (id, { productTypeName, description }) => {
    const [result] = await db.execute(
        `UPDATE product_type SET productTypeName=:productTypeName, description=:description
         WHERE productTypeCode=:id`,
        { productTypeName, description, id }
    )
    return result.affectedRows
}

exports.removeType = async (id) => {
    const [result] = await db.execute(
        `DELETE FROM product_type WHERE productTypeCode=:id`, { id }
    )
    return result.affectedRows
}

// ── Product ───────────────────────────────────────────────────────────────────

exports.findAll = async ({ typeId } = {}) => {
    let sql = `SELECT * FROM product`
    const binds = {}
    if (typeId) { sql += ` WHERE productTypeCode = :typeId`; binds.typeId = typeId }
    const [rows] = await db.execute(sql, binds)
    return rows
}

exports.findById = async (id) => {
    const [rows] = await db.execute(
        `SELECT * FROM product WHERE productId = :id`, { id }
    )
    return rows[0]
}

exports.create = async ({ productName, unitPrice, size, weight, type, productTypeCode }) => {
    const [result] = await db.execute(
        `INSERT INTO product (productName, unitPrice, size, weight, type, productTypeCode)
         VALUES (:productName, :unitPrice, :size, :weight, :type, :productTypeCode)
         RETURNING productId INTO :outId`,
        { productName, unitPrice, size, weight, type, productTypeCode, outId: db.bindOut() }
    )
    return result.insertId
}

exports.update = async (id, { productName, unitPrice, size, weight, type, productTypeCode }) => {
    const [result] = await db.execute(
        `UPDATE product SET productName=:productName, unitPrice=:unitPrice, size=:size,
         weight=:weight, type=:type, productTypeCode=:productTypeCode WHERE productId=:id`,
        { productName, unitPrice, size, weight, type, productTypeCode, id }
    )
    return result.affectedRows
}

exports.remove = async (id) => {
    const [result] = await db.execute(
        `DELETE FROM product WHERE productId=:id`, { id }
    )
    return result.affectedRows
}
