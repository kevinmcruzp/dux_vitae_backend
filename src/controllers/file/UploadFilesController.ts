import { Request, Response } from "express";

class UploadFileController {
  async handle(request: Request, response: Response) {
    const { file } = request;

    if (!file) {
      return response.status(400).send("No file received");
    }

    response.status(200).json(file);
  }
}

export { UploadFileController };
