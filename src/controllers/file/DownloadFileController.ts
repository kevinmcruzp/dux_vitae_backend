import { Request, Response } from "express";

class DownloadFileController {
  async handle(request: Request, response: Response) {
    const { file } = request.params;

    response.download(`./minuteUploads/${file}`);
  }
}

export { DownloadFileController };
