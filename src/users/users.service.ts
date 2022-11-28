import { AppDataSource } from '../data-source'
import User from './users.entity'

export default class UserService {
  public findAll() {
    return AppDataSource.getRepository(User).find()
  }
}
