const db = require('../../config/db')

// ── Delivery Type ─────────────────────────────────────────────────────────────

exports.findAllTypes = async () => {
    const [rows] = await db.execute(`SELECT * FROM delivery_type`, {})
    return rows
}

exports.findTypeById = async (id) => {
    const [rows] = await db.execute(
        `SELECT * FROM delivery_type WHERE deliveryTypeId = :id`, { id }
    )
    return rows[0]
}

exports.createType = async ({ deliveryTypeName, estimatedTime }) => {
    const [result] = await db.execute(
        `INSERT INTO delivery_type (deliveryTypeName, estimatedTime)
         VALUES (:deliveryTypeName, :estimatedTime)
         RETURNING deliveryTypeId INTO :outId`,
        { deliveryTypeName, estimatedTime, outId: db.bindOut() }
    )
    return result.insertId
}

exports.updateType = async (id, { deliveryTypeName, estimatedTime }) => {
    const [result] = await db.execute(
        `UPDATE delivery_type SET deliveryTypeName=:deliveryTypeName, estimatedTime=:estimatedTime
         WHERE deliveryTypeId=:id`,
        { deliveryTypeName, estimatedTime, id }
    )
    return result.affectedRows
}

exports.removeType = async (id) => {
    const [result] = await db.execute(
        `DELETE FROM delivery_type WHERE deliveryTypeId=:id`, { id }
    )
    return result.affectedRows
}

// ── Delivery ──────────────────────────────────────────────────────────────────

exports.findAll = async () => {
    const [rows] = await db.execute(`SELECT * FROM delivery`, {})
    return rows
}

exports.findById = async (id) => {
    const [rows] = await db.execute(
        `SELECT * FROM delivery WHERE deliveryId = :id`, { id }
    )
    return rows[0]
}

exports.create = async ({ deliveryDate, totalPrice, totalWeight, receiverAddress, receiverTel, receiverName, deliveryStatus, type, deliveryTypeId }) => {
    const [result] = await db.execute(
        `INSERT INTO delivery (deliveryDate, totalPrice, totalWeight, receiverAddress, receiverTel, receiverName, deliveryStatus, type, deliveryTypeId)
         VALUES (:deliveryDate, :totalPrice, :totalWeight, :receiverAddress, :receiverTel, :receiverName, :deliveryStatus, :type, :deliveryTypeId)
         RETURNING deliveryId INTO :outId`,
        { deliveryDate, totalPrice, totalWeight, receiverAddress, receiverTel, receiverName, deliveryStatus, type, deliveryTypeId, outId: db.bindOut() }
    )
    return result.insertId
}

exports.update = async (id, { deliveryDate, totalPrice, totalWeight, receiverAddress, receiverTel, receiverName, deliveryStatus, type, deliveryTypeId }) => {
    const [result] = await db.execute(
        `UPDATE delivery SET deliveryDate=:deliveryDate, totalPrice=:totalPrice, totalWeight=:totalWeight,
         receiverAddress=:receiverAddress, receiverTel=:receiverTel, receiverName=:receiverName,
         deliveryStatus=:deliveryStatus, type=:type, deliveryTypeId=:deliveryTypeId WHERE deliveryId=:id`,
        { deliveryDate, totalPrice, totalWeight, receiverAddress, receiverTel, receiverName, deliveryStatus, type, deliveryTypeId, id }
    )
    return result.affectedRows
}

exports.remove = async (id) => {
    const [result] = await db.execute(
        `DELETE FROM delivery WHERE deliveryId=:id`, { id }
    )
    return result.affectedRows
}
