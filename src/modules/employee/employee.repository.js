const db = require('../../config/db')

// ── Position ──────────────────────────────────────────────────────────────────

exports.findAllPositions = async () => {
    const [rows] = await db.execute(`SELECT * FROM position`, {})
    return rows
}

exports.findPositionById = async (id) => {
    const [rows] = await db.execute(
        `SELECT * FROM position WHERE departmentCode = :id`, { id }
    )
    return rows[0]
}

exports.createPosition = async ({ departmentCode, positionName, totalBons }) => {
    const [result] = await db.execute(
        `INSERT INTO position (departmentCode, positionName, totalBons)
         VALUES (:departmentCode, :positionName, :totalBons)
         RETURNING departmentCode INTO :outId`,
        { departmentCode, positionName, totalBons, outId: db.bindOut() }
    )
    return result.insertId
}

exports.updatePosition = async (id, { positionName, totalBons }) => {
    const [result] = await db.execute(
        `UPDATE position SET positionName=:positionName, totalBons=:totalBons WHERE departmentCode=:id`,
        { positionName, totalBons, id }
    )
    return result.affectedRows
}

exports.removePosition = async (id) => {
    const [result] = await db.execute(
        `DELETE FROM position WHERE departmentCode=:id`, { id }
    )
    return result.affectedRows
}

// ── Employee ──────────────────────────────────────────────────────────────────

exports.findAll = async ({ positionId } = {}) => {
    let sql = `SELECT * FROM employee`
    const binds = {}
    if (positionId) { sql += ` WHERE departmentCode = :positionId`; binds.positionId = positionId }
    const [rows] = await db.execute(sql, binds)
    return rows
}

exports.findById = async (id) => {
    const [rows] = await db.execute(
        `SELECT * FROM employee WHERE employeeId = :id`, { id }
    )
    return rows[0]
}

exports.create = async ({ fName, lName, age, emailId, salary, tel, location, startDate, itemDate, departmentCode }) => {
    const [result] = await db.execute(
        `INSERT INTO employee (fName, lName, age, emailId, salary, tel, location, startDate, itemDate, departmentCode)
         VALUES (:fName, :lName, :age, :emailId, :salary, :tel, :location, :startDate, :itemDate, :departmentCode)
         RETURNING employeeId INTO :outId`,
        { fName, lName, age, emailId, salary, tel, location, startDate, itemDate, departmentCode, outId: db.bindOut() }
    )
    return result.insertId
}

exports.update = async (id, { fName, lName, age, emailId, salary, tel, location, startDate, itemDate, departmentCode }) => {
    const [result] = await db.execute(
        `UPDATE employee SET fName=:fName, lName=:lName, age=:age, emailId=:emailId, salary=:salary,
         tel=:tel, location=:location, startDate=:startDate, itemDate=:itemDate, departmentCode=:departmentCode
         WHERE employeeId=:id`,
        { fName, lName, age, emailId, salary, tel, location, startDate, itemDate, departmentCode, id }
    )
    return result.affectedRows
}

exports.remove = async (id) => {
    const [result] = await db.execute(
        `DELETE FROM employee WHERE employeeId=:id`, { id }
    )
    return result.affectedRows
}
