import jwt from "jsonwebtoken";
import { auth } from "./config";
import { createRefreshToken } from "./controllers/TokenController";

export async function generateJwtAndRefreshToken(
  email: string,
  payload: object = {}
) {
  const token = jwt.sign(payload, auth.secret, {
    subject: email,
    expiresIn: 60 * 60, // 60 minutes
  });

  const refreshToken = await createRefreshToken(email);
  return {
    token,
    refreshToken,
  };
}
