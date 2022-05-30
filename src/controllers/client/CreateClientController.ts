import { Request, Response } from "express";
import { CreateClientService } from "../../services/client/CreateClientService";

class CreateClientController {
  async handle(request: Request, response: Response) {
    const client = request.body;

    const service = new CreateClientService();

    const newClient = await service.execute(client);

    return response.json(newClient);
  }
}

export { CreateClientController };
