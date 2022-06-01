import { Request, Response } from "express";
import { UpdateClientService } from "../../services/client/UpdateClientService";

class UpdateClientController {
  async handle(request: Request, response: Response) {
    const { rut } = request.params;
    const { name, lastname, email, password } = request.body;
    console.log(rut);
    const service = new UpdateClientService();

    const client = await service.execute(rut, {
      name,
      lastname,
      email,
      password,
    });

    return response.status(200).json(client);
  }
}

export { UpdateClientController };
