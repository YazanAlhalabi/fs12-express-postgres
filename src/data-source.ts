import { DataSource } from 'typeorm'
import Student from './users/users.entity'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'db',
  port: 5432,
  username: 'demo',
  password: 'demo',
  database: 'demo',
  logging: true,
  entities: [Student],
})
