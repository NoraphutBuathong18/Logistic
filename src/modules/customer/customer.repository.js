const db = require('../../config/db')

// ── Customer Type ─────────────────────────────────────────────────────────────

exports.findAllTypes = async () => {
    const [rows] = await db.execute(`SELECT * FROM customer_type`, {})
    return rows
}

exports.findTypeById = async (id) => {
    const [rows] = await db.execute(
        `SELECT * FROM customer_type WHERE typeId = :id`, { id }
    )
    return rows[0]
}

exports.createType = async ({ typeName, discount }) => {
    const [result] = await db.execute(
        `INSERT INTO customer_type (typeName, discount) VALUES (:typeName, :discount)
         RETURNING typeId INTO :outId`,
        { typeName, discount, outId: db.bindOut() }
    )
    return result.insertId
}

exports.updateType = async (id, { typeName, discount }) => {
    const [result] = await db.execute(
        `UPDATE customer_type SET typeName=:typeName, discount=:discount WHERE typeId=:id`,
        { typeName, discount, id }
    )
    return result.affectedRows
}

exports.removeType = async (id) => {
    const [result] = await db.execute(
        `DELETE FROM customer_type WHERE typeId=:id`, { id }
    )
    return result.affectedRows
}

// ── Customer ──────────────────────────────────────────────────────────────────

exports.findAll = async ({ typeId } = {}) => {
    let sql = `SELECT * FROM customer`
    const binds = {}
    if (typeId) { sql += ` WHERE typeId = :typeId`; binds.typeId = typeId }
    const [rows] = await db.execute(sql, binds)
    return rows
}

exports.findById = async (id) => {
    const [rows] = await db.execute(
        `SELECT * FROM customer WHERE CUSTOMER_ID = :id`, { id }
    )
    return rows[0]
}

exports.create = async ({ fname, lname, tel, email, location }) => {
    const [result] = await db.execute(
        `INSERT INTO customer (FNAME, LNAME, TEL, EMAIL, LOCATION)
         VALUES (:fname, :lname, :tel, :email, :location)
         RETURNING CUSTOMER_ID INTO :outId`,
        { fname, lname, tel, email, location, outId: db.bindOut() }
    )
    return result.insertId
}

exports.update = async (id, { fname, lname, tel, email, location }) => {
    const [result] = await db.execute(
        `UPDATE customer SET FNAME=:fname, LNAME=:lname, TEL=:tel, EMAIL=:email, LOCATION=:location
         WHERE CUSTOMER_ID=:id`,
        { fname, lname, tel, email, location, id }
    )
    return result.affectedRows
}

exports.remove = async (id) => {
    const [result] = await db.execute(
        `DELETE FROM customer WHERE CUSTOMER_ID=:id`, { id }
    )
    return result.affectedRows
}
