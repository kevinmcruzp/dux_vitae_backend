import { Request, Response } from "express";
import { generateJwtAndRefreshToken } from "../auth";
import { RefreshService } from "../services/RefreshService";
import { checkRefreshTokenIsValid } from "./TokenController";

class RefreshController {
  async handle(request: Request, response: Response) {
    const email = request.user;
    const { refreshToken } = request.body;

    const service = new RefreshService();

    const user = await service.execute(email);

    if (!user) {
      return response.status(401).json({
        error: true,
        message: "User not found.",
      });
    }

    if (!refreshToken) {
      return response
        .status(401)
        .json({ error: true, message: "Refresh token is required." });
    }

    const isValidRefreshToken = await checkRefreshTokenIsValid(
      email,
      refreshToken
    );

    console.log(isValidRefreshToken, "dentro del checkRefreshTokenIsValid");

    if (!isValidRefreshToken) {
      return response
        .status(401)
        .json({ error: true, message: "Refresh token is invalid." });
    }

    // invalidateRefreshToken(email, refreshToken);
    console.log("cerca de generate jwt");
    const { token, refreshToken: newRefreshToken } =
      await generateJwtAndRefreshToken(email, {
        roles: user.role,
      });

    console.log(token, "token", newRefreshToken, "newRefreshToken");

    return response.json({
      token,
      refreshToken: newRefreshToken,
      roles: user.role,
    });
  }
}

export { RefreshController };
