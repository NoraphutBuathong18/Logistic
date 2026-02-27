const db = require('../../config/db')

// ── Receipt ──────────────────────────────────────────────────────────────────

exports.findAll = async ({ startDate, endDate } = {}) => {
    let sql = `SELECT * FROM receipt`
    const binds = {}

    if (startDate && endDate) {
        sql += ` WHERE date_col BETWEEN :startDate AND :endDate`
        binds.startDate = startDate
        binds.endDate = endDate
    }

    const [rows] = await db.execute(sql, binds)
    return rows
}

exports.findById = async (id) => {
    const [rows] = await db.execute(
        `SELECT r.*, rd.*
         FROM receipt r
         LEFT JOIN receipt_detail rd ON r.CODE = rd.CODE
         WHERE r.CODE = :id`,
        { id }
    )
    return rows
}

exports.create = async ({ code, date, customerId, employeeId }) => {
    // Column names must match your actual Oracle schema.
    // Update these to match the real column names shown in DBeaver.
    const [result] = await db.execute(
        `INSERT INTO receipt (CODE, DATE_RECEIVE, CUSTOMER_ID, EMPNO)
         VALUES (:code, :date, :customerId, :employeeId)
         RETURNING CODE INTO :outId`,
        { code, date, customerId, employeeId, outId: db.bindOut() }
    )
    return result.insertId
}

exports.update = async (id, { code, date, customerId, employeeId }) => {
    const [result] = await db.execute(
        `UPDATE receipt SET CODE=:code, DATE_RECEIVE=:date, CUSTOMER_ID=:customerId, EMPNO=:employeeId
         WHERE CODE=:id`,
        { code, date, customerId, employeeId, id }
    )
    return result.affectedRows
}

exports.remove = async (id) => {
    const [result] = await db.execute(
        `DELETE FROM receipt WHERE CODE=:id`, { id }
    )
    return result.affectedRows
}

// ── Receipt Detail ────────────────────────────────────────────────────────────

exports.findDetailsByReceiptId = async (receiptId) => {
    const [rows] = await db.execute(
        `SELECT * FROM receipt_detail WHERE receiptId = :receiptId`,
        { receiptId }
    )
    return rows
}

exports.createDetail = async (receiptId, { productId, quantity, unitPrice, sale, totalPrice }) => {
    const [result] = await db.execute(
        `INSERT INTO receipt_detail (receiptId, productId, quantity, unitPrice, sale, totalPrice)
         VALUES (:receiptId, :productId, :quantity, :unitPrice, :sale, :totalPrice)
         RETURNING receiptDetailId INTO :outId`,
        { receiptId, productId, quantity, unitPrice, sale, totalPrice, outId: db.bindOut() }
    )
    return result.insertId
}