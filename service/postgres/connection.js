const { Pool } = require('pg')
const logger = require('../../util/logger')

const credentials = () => {
  if (process.env.DATABASE_URL) {
    return {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false }
    }
  }
  return {
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD,
    ssl: true
  }
}
const pool = new Pool(credentials())

pool.on('connect', (client) => {
  client.query('SET DATESTYLE = iso, mdy')
  logger.info('Postgres DB Connected!')
})
// the pool will emit an error on behalf of any idle clients
// it contains if a backend error or network partition happens
pool.on('error', (err, client) => {
  logger.error('Unexpected error on idle client', err)
  client.release()
  pool.end()
})

const query = async (query, variables, callback) => {
  try {
    const start = Date.now()
    await pool.connect().then((client) => {
      return client
        .query(query(variables))
        .then((res) => {
          const duration = Date.now() - start
          logger.info(
            `DB query:\n${JSON.stringify(variables)} => ${query(variables)}=> ${
              res.rowCount
            } rows, in ${duration} ms`
          )
          client.release()
          callback(null, {
            ok: true,
            data: res.rows
          })
        })
        .catch((error) => {
          logger.error(
            `DB query Error:\n${JSON.stringify(variables)} => ${query(
              variables
            )} =>\n${error.message}:\n${error.stack}`
          )
          client.release()
          callback(error, {
            ok: false,
            data: error.message
          })
        })
    })
  } catch (error) {
    logger.error(`DB Query Internal Error:\n${error.message}\n${error.stack}`)
    pool.end()
    callback(error, {
      ok: false,
      data: error.message
    })
  }
}

module.exports = query
