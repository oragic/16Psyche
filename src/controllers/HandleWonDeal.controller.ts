'use strict'
import { Request, Response } from "express";
import DealHandleEvents from "../services/DealHandleEvents.service";


export default class EventsDeal {
  async handle(req: Request, res: Response) {
    //const createUserService = new CreateVoluntaryService
    const {meta} = req.body;

    const dealHandleEvents = new DealHandleEvents();

    const deal = await dealHandleEvents.execute({
      meta,
    });
  }
}
