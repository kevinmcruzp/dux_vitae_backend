import prismaClient from "../../prisma";

class CheckRefreshTokenService {
  async execute(email: string) {
    const user = await prismaClient.token.findFirst({
      where: {
        email,
      },
    });

    return user?.token;
  }
}

export { CheckRefreshTokenService };
