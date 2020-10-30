module.exports = () => {
  const env = process.env.NODE_ENV || 'development'
  if (env === 'development') {
    if (process.env.DEV_DATABASE_URL) {
      return {
        connectionString: process.env.DEV_DATABASE_URL,
        ssl: { rejectUnauthorized: false }
      }
    }
    return {
      host: process.env.DEV_DB_HOST,
      database: process.env.DEV_DB_DATABASE,
      user: process.env.DEV_DB_USER,
      port: process.env.DEV_DB_PORT,
      password: process.env.DEV_DB_PASSWORD,
      ssl: true
    }
  } else {
    if (env === 'production') {
      if (process.env.DATABASE_URL) {
        return {
          connectionString: process.env.DATABASE_URL
        }
      }
      return {
        host: process.env.DB_HOST,
        database: process.env.DB_DATABASE,
        user: process.env.DB_USER,
        port: process.env.DB_PORT,
        password: process.env.DB_PASSWORD
      }
    } else {
      if (process.env.TEST_DATABASE_URL) {
        return {
          connectionString: process.env.TEST_DATABASE_URL,
          ssl: { rejectUnauthorized: false }
        }
      }
      return {
        host: process.env.TEST_DB_HOST,
        database: process.env.TEST_DB_DATABASE,
        user: process.env.TEST_DB_USER,
        port: process.env.TEST_DB_PORT,
        password: process.env.TEST_DB_PASSWORD,
        ssl: true
      }
    }
  }
}
