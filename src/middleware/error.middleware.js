const errorMiddleware = (err, req, res, next) => {
    console.error(`[ERROR] ${req.method} ${req.originalUrl}:`, err.message)

    const statusCode = err.statusCode || 500
    const message = err.message || 'Internal Server Error'

    return res.status(statusCode).json({
        success: false,
        message,
        data: null
    })
}

module.exports = errorMiddleware
