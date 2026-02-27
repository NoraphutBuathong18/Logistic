const oracledb = require('oracledb')

// Use Thin mode (no Oracle Client libraries required - oracledb v6+)
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT

let pool

/**
 * Initialize the Oracle connection pool.
 * Call this once at server startup.
 */
const init = async () => {
    pool = await oracledb.createPool({
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        connectString: `${process.env.DB_HOST}:${process.env.DB_PORT || 1521}/${process.env.DB_SERVICE}`,
        poolMin: 2,
        poolMax: 10,
        poolIncrement: 1
    })
}

/**
 * mysql2-compatible execute wrapper.
 *   SELECT  → returns [rows]
 *   DML     → returns [{ affectedRows, insertId }]
 *
 * Use named bind variables in SQL: :paramName
 * For INSERT returning ID, include :outId in SQL + pass db.bindOut() as the outId bind.
 */
const execute = async (sql, binds = {}) => {
    const conn = await pool.getConnection()
    try {
        const result = await conn.execute(sql, binds, { autoCommit: true })

        if (result.rows !== undefined) {
            // SELECT
            return [result.rows]
        }

        // INSERT / UPDATE / DELETE
        const insertId = result.outBinds?.outId?.[0] ?? null
        return [{ affectedRows: result.rowsAffected, insertId }]
    } finally {
        await conn.close()
    }
}

/** Helper for RETURNING pk INTO :outId bind */
const bindOut = () => ({ type: oracledb.NUMBER, dir: oracledb.BIND_OUT })

/** Raw connection (used for startup health check) */
const getConnection = () => pool.getConnection()

module.exports = { init, execute, getConnection, bindOut }
