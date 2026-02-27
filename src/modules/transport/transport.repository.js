const db = require('../../config/db')

// ── Car Type ──────────────────────────────────────────────────────────────────

exports.findAllCartypes = async () => {
    const [rows] = await db.execute(`SELECT * FROM cartype`, {})
    return rows
}

exports.findCartypeById = async (id) => {
    const [rows] = await db.execute(
        `SELECT * FROM cartype WHERE cartypeId = :id`, { id }
    )
    return rows[0]
}

exports.createCartype = async ({ name, fee }) => {
    const [result] = await db.execute(
        `INSERT INTO cartype (name, fee) VALUES (:name, :fee) RETURNING cartypeId INTO :outId`,
        { name, fee, outId: db.bindOut() }
    )
    return result.insertId
}

exports.updateCartype = async (id, { name, fee }) => {
    const [result] = await db.execute(
        `UPDATE cartype SET name=:name, fee=:fee WHERE cartypeId=:id`, { name, fee, id }
    )
    return result.affectedRows
}

exports.removeCartype = async (id) => {
    const [result] = await db.execute(
        `DELETE FROM cartype WHERE cartypeId=:id`, { id }
    )
    return result.affectedRows
}

// ── Car ───────────────────────────────────────────────────────────────────────

exports.findAllCars = async () => {
    const [rows] = await db.execute(`SELECT * FROM car`, {})
    return rows
}

exports.findCarById = async (id) => {
    const [rows] = await db.execute(
        `SELECT * FROM car WHERE carId = :id`, { id }
    )
    return rows[0]
}

exports.createCar = async ({ name, type, cartypeId }) => {
    const [result] = await db.execute(
        `INSERT INTO car (name, type, cartypeId) VALUES (:name, :type, :cartypeId)
         RETURNING carId INTO :outId`,
        { name, type, cartypeId, outId: db.bindOut() }
    )
    return result.insertId
}

exports.updateCar = async (id, { name, type, cartypeId }) => {
    const [result] = await db.execute(
        `UPDATE car SET name=:name, type=:type, cartypeId=:cartypeId WHERE carId=:id`,
        { name, type, cartypeId, id }
    )
    return result.affectedRows
}

exports.removeCar = async (id) => {
    const [result] = await db.execute(
        `DELETE FROM car WHERE carId=:id`, { id }
    )
    return result.affectedRows
}

// ── Route ─────────────────────────────────────────────────────────────────────

exports.findAllRoutes = async () => {
    const [rows] = await db.execute(`SELECT * FROM route`, {})
    return rows
}

exports.findRouteById = async (id) => {
    const [rows] = await db.execute(
        `SELECT * FROM route WHERE routeId = :id`, { id }
    )
    return rows[0]
}

exports.createRoute = async ({ routeName, distance }) => {
    const [result] = await db.execute(
        `INSERT INTO route (routeName, distance) VALUES (:routeName, :distance)
         RETURNING routeId INTO :outId`,
        { routeName, distance, outId: db.bindOut() }
    )
    return result.insertId
}

exports.updateRoute = async (id, { routeName, distance }) => {
    const [result] = await db.execute(
        `UPDATE route SET routeName=:routeName, distance=:distance WHERE routeId=:id`,
        { routeName, distance, id }
    )
    return result.affectedRows
}

exports.removeRoute = async (id) => {
    const [result] = await db.execute(
        `DELETE FROM route WHERE routeId=:id`, { id }
    )
    return result.affectedRows
}

// ── Station ───────────────────────────────────────────────────────────────────

exports.findAllStations = async () => {
    const [rows] = await db.execute(`SELECT * FROM station`, {})
    return rows
}

exports.findStationById = async (id) => {
    const [rows] = await db.execute(
        `SELECT * FROM station WHERE stationId = :id`, { id }
    )
    return rows[0]
}

exports.createStation = async ({ name, location }) => {
    const [result] = await db.execute(
        `INSERT INTO station (name, location) VALUES (:name, :location)
         RETURNING stationId INTO :outId`,
        { name, location, outId: db.bindOut() }
    )
    return result.insertId
}

exports.updateStation = async (id, { name, location }) => {
    const [result] = await db.execute(
        `UPDATE station SET name=:name, location=:location WHERE stationId=:id`,
        { name, location, id }
    )
    return result.affectedRows
}

exports.removeStation = async (id) => {
    const [result] = await db.execute(
        `DELETE FROM station WHERE stationId=:id`, { id }
    )
    return result.affectedRows
}

// ── Transport ─────────────────────────────────────────────────────────────────

exports.findAll = async () => {
    const [rows] = await db.execute(`SELECT * FROM transport`, {})
    return rows
}

exports.findById = async (id) => {
    const [rows] = await db.execute(
        `SELECT * FROM transport WHERE transportId = :id`, { id }
    )
    return rows[0]
}

exports.create = async ({ totalDistance, transportDate, carId }) => {
    const [result] = await db.execute(
        `INSERT INTO transport (totalDistance, transportDate, carId)
         VALUES (:totalDistance, :transportDate, :carId)
         RETURNING transportId INTO :outId`,
        { totalDistance, transportDate, carId, outId: db.bindOut() }
    )
    return result.insertId
}

exports.update = async (id, { totalDistance, transportDate, carId }) => {
    const [result] = await db.execute(
        `UPDATE transport SET totalDistance=:totalDistance, transportDate=:transportDate, carId=:carId
         WHERE transportId=:id`,
        { totalDistance, transportDate, carId, id }
    )
    return result.affectedRows
}

exports.remove = async (id) => {
    const [result] = await db.execute(
        `DELETE FROM transport WHERE transportId=:id`, { id }
    )
    return result.affectedRows
}

// ── Path Detail ───────────────────────────────────────────────────────────────

exports.findPathByTransport = async (transportId) => {
    const [rows] = await db.execute(
        `SELECT * FROM path_detail WHERE transportId = :transportId ORDER BY sequenceNo`,
        { transportId }
    )
    return rows
}
