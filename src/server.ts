import express, { Response, Request } from 'express'
import * as dotenv from 'dotenv'

import UserController from './users/users.controller'
import { AppDataSource } from './data-source'
console.log('UserController:', UserController)

dotenv.config()

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!')
  })
  .catch((err) => {
    console.error('Error during Data Source initialization:', err)
  })

const app = express()
const port = process.env.PORT || 3000

const userController = new UserController()
app.get('/users', userController.findAll)

app.listen(port, () => {
  console.log(`Server listening on the port  ${port}`)
})
