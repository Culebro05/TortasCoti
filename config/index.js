require('dotenv').config()

const config = {
    dev: process.env.NODE_ENV !== 'production',
    port: process.env.PORT,
    cors: process.env.CORS,
    dbUSER: process.env.DB_USER,
    dbPassword: process.env.BD_PASSWORD,
    dbHost: process.env.DB_HOST,
    dbName: process.env.DB_NAME
}

module.exports = { config }
