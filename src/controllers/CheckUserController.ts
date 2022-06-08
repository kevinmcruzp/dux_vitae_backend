import { Request, Response } from "express";
import { RefreshService } from "../services/RefreshService";

//Crear el checkusercontroller para buscar los datos del usuario
//Ruta /me
class CheckUserController {
  async handle(request: Request, response: Response) {
    const email = request.user;

    const service = new RefreshService();
    const user = await service.execute(email);

    if (!user) {
      return response
        .status(400)
        .json({ error: true, message: "User not found." });
    }
    return response.json({
      name: user.name,
      lastName: user.lastName,
      email,
      roles: user.role,
    });
  }
}

export { CheckUserController };
