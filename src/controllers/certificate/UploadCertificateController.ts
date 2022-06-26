import { Request, Response } from "express";

class UploadCertificateController {
  async handle(request: Request, response: Response) {
    const { file } = request;
    const fileName = file?.filename;
    if (request.file) {
      return response.status(200).json(fileName);
    }

    return response.status(400).send("No se pudo agregar el certificado");
  }
}

export { UploadCertificateController };
