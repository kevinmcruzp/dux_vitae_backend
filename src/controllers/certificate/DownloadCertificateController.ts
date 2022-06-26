import { Request, Response } from "express";

class DownloadCertificateController {
  async handle(request: Request, response: Response) {
    console.log("Hola desde download");
    const { file } = request.params;

    response.download(`./certificateUploads/${file}`);
  }
}

export { DownloadCertificateController };
