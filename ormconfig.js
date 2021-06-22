/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config()
const path = require('path')

const migrationsPath = path.resolve('src', 'infra', 'database', 'migrations')
const entitiesPath = path.resolve('src', 'entities')

module.exports = {
  type: 'mariadb',
  host: '127.0.0.1',
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  migrations: [`${migrationsPath}/*.ts`],
  entities: [`${entitiesPath}/*.ts`],
  cli: {
    migrationsDir: migrationsPath,
    entitiesDir: entitiesPath
  }
}
