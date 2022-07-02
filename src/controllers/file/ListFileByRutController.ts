import { Request, Response } from "express";
import { ListFileByRutService } from "../../services/file/ListFileByRutService";

class ListFileByRutController {
  async handle(request: Request, response: Response) {
    const { rut } = request.params;

    const service = new ListFileByRutService();

    const listFile = await service.execute(rut);

    return response.json(listFile);
  }
}

export { ListFileByRutController };
