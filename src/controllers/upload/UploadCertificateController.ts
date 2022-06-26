import { Request, Response } from "express";

class UploadCertificateController {
  async handle(request: Request, response: Response) {
    if (request.file) {
      response.status(200).send("Se agrego el certificado");
    }

    response.status(400).send("No se pudo agregar el certificado");
  }
}

export { UploadCertificateController };
