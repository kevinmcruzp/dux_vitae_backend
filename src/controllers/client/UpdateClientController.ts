import { Request, Response } from "express";
import { UpdateClientService } from "../../services/client/UpdateClientService";

class UpdateClientController {
  async handle(request: Request, response: Response) {
    const { rut } = request.params;
    const { name, lastName, birthday, gender, phone, description } =
      request.body;
    const service = new UpdateClientService();

    const client = await service.execute(rut, {
      name,
      lastName,
      birthday,
      gender,
      phone,
      description,
    });

    return response.json(client);
  }
}

export { UpdateClientController };
