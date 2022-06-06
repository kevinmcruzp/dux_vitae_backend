import prismaClient from "../prisma";

class RefreshService {
  async execute(email: string) {
    const client = await prismaClient.client.findFirst({
      where: {
        email,
      },
    });

    const nutritionist = await prismaClient.nutritionist.findFirst({
      where: {
        email,
      },
    });

    const admin = await prismaClient.admin.findFirst({
      where: {
        email,
      },
    });

    if (client !== null) {
      return client;
    }

    if (admin !== null) {
      return admin;
    }

    if (nutritionist !== null) {
      return nutritionist;
    }

    return null;
  }
}

export { RefreshService };
