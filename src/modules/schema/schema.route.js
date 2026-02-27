const express = require('express')
const db = require('../../config/db')
const { sendSuccess, sendError } = require('../../utils/response')

const router = express.Router()

/**
 * GET /api/schema/:table
 * Returns the actual Oracle column names for any table.
 * Useful for knowing the real column names to use in queries.
 * Example: GET /api/schema/receipt
 */
router.get('/:table', async (req, res, next) => {
    try {
        const tbl = req.params.table.toUpperCase()
        const [rows] = await db.execute(
            `SELECT COLUMN_NAME, DATA_TYPE, NULLABLE
             FROM ALL_TAB_COLUMNS
             WHERE TABLE_NAME = :tbl
             ORDER BY COLUMN_ID`,
            { tbl }
        )
        if (!rows || rows.length === 0) {
            return sendError(res, `Table "${tbl}" not found or no access`, 404)
        }
        sendSuccess(res, rows, `Schema for table ${tbl}`)
    } catch (err) { next(err) }
})

/**
 * GET /api/schema
 * Returns all tables accessible to the current Oracle user.
 */
router.get('/', async (req, res, next) => {
    try {
        const [rows] = await db.execute(
            `SELECT TABLE_NAME FROM USER_TABLES ORDER BY TABLE_NAME`, {}
        )
        sendSuccess(res, rows, 'All tables')
    } catch (err) { next(err) }
})

module.exports = router
