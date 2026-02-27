const express = require('express')
const cors = require('cors')

const receiptRoutes = require('./modules/receipt/receipt.route')
const customerRoutes = require('./modules/customer/customer.route')
const employeeRoutes = require('./modules/employee/employee.route')
const deliveryRoutes = require('./modules/delivery/delivery.route')
const productRoutes = require('./modules/product/product.route')
const warehouseRoutes = require('./modules/warehouse/warehouse.route')
const transportRoutes = require('./modules/transport/transport.route')
const schemaRoutes = require('./modules/schema/schema.route')
const allRoutes = require('./modules/all/all.route')

const errorMiddleware = require('./middleware/error.middleware')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/receipts', receiptRoutes)
app.use('/api/customers', customerRoutes)
app.use('/api/employees', employeeRoutes)
app.use('/api/deliveries', deliveryRoutes)
app.use('/api/products', productRoutes)
app.use('/api/warehouses', warehouseRoutes)
app.use('/api/transports', transportRoutes)
app.use('/api/schema', schemaRoutes)
app.use('/api/all', allRoutes)

app.use(errorMiddleware)

module.exports = app