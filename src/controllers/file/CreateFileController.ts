import { Request, Response } from "express";
import { CreateFileService } from "../../services/file/CreateFileService";

class CreateFileController {
  async handle(request: Request, response: Response) {
    const { filename, originalname, clientRut, nutritionistRut } = request.body;

    const data = {
      filename,
      originalname,
      clientRut,
      nutritionistRut,
    };

    const service = new CreateFileService();
    const responseCreateFile = await service.execute(data);

    return response.status(200).json(responseCreateFile);
  }
}

export { CreateFileController };
