import { Request, Response } from "express";
import { ListClientService } from "../../services/client/ListClientService";

class ListClientController {
  async handle(request: Request, response: Response) {
    const service = new ListClientService();

    const client = await service.execute();

    return response.json(client);
  }
}

export { ListClientController };
