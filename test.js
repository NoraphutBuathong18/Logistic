require('dotenv').config()
const db = require('./src/config/db')

async function test() {
    await db.init()  // initialize Oracle connection pool first

    // Note: Oracle uses FETCH FIRST n ROWS ONLY instead of LIMIT
    const [rows] = await db.execute('SELECT * FROM receipt FETCH FIRST 10 ROWS ONLY', {})
    console.log(rows)

    process.exit(0)
}

test().catch(err => {
    console.error(err.message)
    process.exit(1)
})