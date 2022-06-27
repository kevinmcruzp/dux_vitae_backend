import { Request, Response } from "express";
import { generateJwtAndRefreshToken } from "../auth";
import { LoginService } from "../services/LoginService";
import { CreateSessionDTO } from "../types";

class LoginController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body as CreateSessionDTO;
    const service = new LoginService();

    const user: any = await service.execute(email, password);

    if (!user?.email || password !== user.password) {
      return response.status(401).json({
        error: true,
        message: "E-mail or password incorrect.",
      });
    }

    if (user.role === "nutritionist" && user.certificate?.state === false) {
      return response.status(401).json({
        error: true,
        message: "Nutritionist not approved.",
      });
    }

    const { token, refreshToken } = await generateJwtAndRefreshToken(email, {
      roles: user.role,
    });

    return response.json({
      rut: user.rut,
      name: user.name,
      lastName: user.lastName,
      token,
      refreshToken,
      roles: user.role,
    });
  }
}

export { LoginController };
