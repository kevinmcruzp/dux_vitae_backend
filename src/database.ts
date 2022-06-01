import { v4 as uuid } from "uuid";
import { RefreshTokensStore, UsersStore } from "./types";

export const users: UsersStore = new Map();

export const tokens: RefreshTokensStore = new Map();

export function seedUserStore() {
  users.set("kevin_mcp@outlook.com", {
    password: "123456",
    permissions: ["users.list", "users.create", "metrics.list"],
    roles: ["administrator"],
  });

  users.set("nutritionist@inacap.cl", {
    password: "123456",
    permissions: ["users.list", "metrics.list"],
    roles: ["nutritionist"],
  });

  users.set("client@inacap.cl", {
    password: "123456",
    permissions: ["users.list", "metrics.list"],
    roles: ["client"],
  });
}

//Agregar base de datos de refresh token
export function createRefreshToken(email: string) {
  const currentUserTokens = tokens.get(email) ?? [];
  const refreshToken = uuid();

  tokens.set(email, [...currentUserTokens, refreshToken]);

  return refreshToken;
}

//Areglar el check de refresh token
export function checkRefreshTokenIsValid(email: string, refreshToken: string) {
  const storedRefreshTokens = tokens.get(email) ?? [];

  return storedRefreshTokens.some((token) => token === refreshToken);
}

//areglar el refresh token invalido
export function invalidateRefreshToken(email: string, refreshToken: string) {
  const storedRefreshTokens = tokens.get(email) ?? [];

  tokens.set(
    email,
    storedRefreshTokens.filter((token) => token !== refreshToken)
  );
}
