import prismaClient from "../prisma";

class LoginService {
  async execute(email: string, password: string) {
    const client = await prismaClient.client.findFirst({
      where: {
        email,
        password,
      },
    });

    const nutritionist = await prismaClient.nutritionist.findFirst({
      where: {
        email,
        password,
      },
      include: {
        certificate: true,
      },
    });

    const admin = await prismaClient.admin.findFirst({
      where: {
        email,
        password,
      },
    });

    if (admin !== null) {
      return admin;
    }

    if (nutritionist !== null) {
      return nutritionist;
    }

    if (client !== null) {
      return client;
    }
    return null;
  }
}

export { LoginService };
