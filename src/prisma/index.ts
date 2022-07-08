import { PrismaClient } from "@prisma/client";
import { fieldEncryptionMiddleware } from "prisma-field-encryption";

const prismaClient = new PrismaClient();
prismaClient.$use(
  fieldEncryptionMiddleware({
    encryptionKey: "k1.aesgcm256.DbQoar8ZLuUsOHZNyrnjlskInHDYlzF3q6y1KGM7DUM=",
    decryptionKeys: [
      "k1.aesgcm256.DbQoar8ZLuUsOHZNyrnjlskInHDYlzF3q6y1KGM7DUM=",
    ],
  })
);

export default prismaClient;
