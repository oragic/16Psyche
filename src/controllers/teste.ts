import { Request, Response } from 'express';
import CreateVoluntaryService from '../services/CreateUser.service';
import axios from 'axios';

export default class Teste {
  async handle(req: Request, res: Response) {
    const { user_id,pipedrive_token,bling_token} = req.body;

    const getAllOrders = await axios.get(`https://bling.com.br/Api/v2/pedidos/json/&apikey=fdfbcb8690601254652798cb2d36ebb69220cb229d480d8baf6b6b3bb08522b7c7d38bee`);

    res.status(200).json(getAllOrders.data)
  }
}
