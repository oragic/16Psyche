import { Request, Response } from 'express';
import CreateVoluntaryService from '../services/CreateUser.service';

export default class CreateUserController {
  async handle(req: Request, res: Response) {
    const { user_id,pipedrive_token,bling_token} = req.body;

    const createVoluntaryService = new CreateVoluntaryService();

    const user = await createVoluntaryService.execute({
      user_id,
      pipedrive_token,
      bling_token
    });

    return res.json(user);
  }
}
