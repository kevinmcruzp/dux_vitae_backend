import prismaClient from "../prisma";

class LoginService {
  async execute(email: string, password: string) {
    const client = await prismaClient.client.findFirst({
      where: {
        email,
      },
    });

    const nutritionist = await prismaClient.nutritionist.findFirst({
      where: {
        email,
      },
      include: {
        certificate: true,
      },
    });

    const admin = await prismaClient.admin.findFirst({
      where: {
        email,
      },
    });

    if (admin !== null && password === admin.password) {
      return admin;
    }

    if (nutritionist !== null && password === nutritionist.password) {
      return nutritionist;
    }

    if (client !== null && password === client.password) {
      return client;
    }
    return null;
  }
}

export { LoginService };
