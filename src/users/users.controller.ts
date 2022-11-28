import { Response, Request } from 'express'
import UserService from './users.service'

export default class UserController {
  private userService: UserService = new UserService()

  public findAll = async (req: Request, res: Response) => {
    return res.json({ users: await this.userService.findAll() })
  }
}
