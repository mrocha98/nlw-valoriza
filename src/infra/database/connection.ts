import { createConnection } from 'typeorm'

export const getConnection = async () => createConnection()
