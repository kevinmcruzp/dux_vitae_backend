import { Request, Response } from "express";
import { UpdateStateCertificateByIdService } from "../../services/certificate/UpdateStateCertificateByIdService";

class UpdateStateCertificateByIdController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const service = new UpdateStateCertificateByIdService();

    const certificate = await service.execute(id);

    return response.status(200).json(certificate);
  }
}

export { UpdateStateCertificateByIdController };
