import { Request, Response } from "express";
import { DeleteClientService } from "../../services/client/DeleteClientService";

class DeleteClientController {
  async handle(request: Request, response: Response) {
    const { rut } = request.params;

    const service = new DeleteClientService();

    await service.execute(rut);

    return response.status(200).json({
      message: "Client deleted with success",
      status: 200,
    });
  }
}

export { DeleteClientController };
