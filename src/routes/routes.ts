import { Router, Request, Response} from "express";
import EventsMundpagg from "../controllers/HandleWonDeal.controller";
import  CreateUserController from "../controllers/CreateUser.controller";
import Teste from '../controllers/teste'
const routes =  Router();

const eventsMundpagg = new EventsMundpagg();
const createUserController = new CreateUserController();
const  teste = new Teste()

routes.post('/deal/events',eventsMundpagg.handle);
routes.post('/user/create',createUserController.handle);
routes.get('/teste',teste.handle);

export default routes;
