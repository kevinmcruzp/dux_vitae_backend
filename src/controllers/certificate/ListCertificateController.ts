import { Request, Response } from "express";
import { ListCertificateService } from "../../services/certificate/ListCertificateService";

class ListCertificateController {
  async handle(request: Request, response: Response) {
    const service = new ListCertificateService();
    const certificates = await service.execute();

    return response.status(200).json(certificates);
  }
}

export { ListCertificateController };
