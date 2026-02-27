require('dotenv').config()
const app = require('./src/app')
const db = require('./src/config/db')

const PORT = process.env.PORT || 3000

const start = async () => {
    try {
        // Initialize Oracle connection pool
        await db.init()
        console.log(`\n✅ Database connected successfully (${process.env.DB_SERVICE}@${process.env.DB_HOST}:${process.env.DB_PORT || 1521})`)
    } catch (err) {
        console.error(`\n❌ Database connection failed:`, err.message)
        process.exit(1)
    }

    app.listen(PORT, () => {
        console.log(`\n🚀 Server running at  http://localhost:${PORT}`)
        console.log(`📦 API base URL       http://localhost:${PORT}/api\n`)
        console.log('Available routes:')
        console.log(`  http://localhost:${PORT}/api/receipts`)
        console.log(`  http://localhost:${PORT}/api/customers`)
        console.log(`  http://localhost:${PORT}/api/employees`)
        console.log(`  http://localhost:${PORT}/api/deliveries`)
        console.log(`  http://localhost:${PORT}/api/products`)
        console.log(`  http://localhost:${PORT}/api/warehouses`)
        console.log(`  http://localhost:${PORT}/api/transports\n`)
    })
}

start()