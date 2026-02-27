const express = require('express')
const db = require('../../config/db')
const { sendSuccess } = require('../../utils/response')

const router = express.Router()

const TABLES = [
    'receipt',
    'receipt_detail',
    'customer',
    'customer_type',
    'employee',
    'position',
    'delivery',
    'delivery_type',
    'product',
    'product_type',
    'warehouse',
    'warehouse_product',
    'branch',
    'transport',
    'car',
    'cartype',
    'route',
    'station',
    'path_detail'
]

/**
 * GET /api/all
 * Returns every table as one JSON object.
 * In Power BI Power Query:
 *   1. Get Data > Web > http://localhost:3000/api/all
 *   2. Click "data" field (Record)
 *   3. Click each table name (e.g. "receipt") -> List
 *   4. Convert to Table -> expand columns
 */
router.get('/', async (req, res, next) => {
    try {
        const result = {}
        await Promise.all(
            TABLES.map(async (table) => {
                try {
                    const [rows] = await db.execute(`SELECT * FROM ${table}`, {})
                    result[table] = rows
                } catch {
                    result[table] = []   // table missing or no access — skip
                }
            })
        )
        sendSuccess(res, result, 'All tables loaded')
    } catch (err) { next(err) }
})

/**
 * GET /api/all/:table
 * Returns just the raw array for a single table.
 * Useful for Power BI "New Table from Web" queries.
 * Example: GET /api/all/customer -> [{ CUSTOMER_ID:1001, FNAME:'Somchai', ... }]
 */
router.get('/:table', async (req, res, next) => {
    try {
        const name = req.params.table.toLowerCase()
        if (!TABLES.includes(name)) {
            return res.status(404).json({ success: false, message: `Unknown table: ${name}` })
        }
        const [rows] = await db.execute(`SELECT * FROM ${name}`, {})
        sendSuccess(res, rows, `Table: ${name}`)
    } catch (err) { next(err) }
})

module.exports = router
