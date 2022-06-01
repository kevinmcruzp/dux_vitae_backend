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

export { RefreshService };
