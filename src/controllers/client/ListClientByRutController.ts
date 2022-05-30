import { Request, Response } from "express";
import { ListClientByRutService } from "../../services/client/ListClientByRutService";

class ListClientByRutController {
  async handle(request: Request, response: Response) {
    const { rut } = request.params;
    const service = new ListClientByRutService();

    const clients = await service.execute(rut);

    return response.status(200).json(clients);
  }
}

export { ListClientByRutController };
