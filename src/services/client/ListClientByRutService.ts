import prismaClient from "../../prisma";

class ListClientByRutService {
  async execute(rut: string) {
    const listClient = await prismaClient.client.findUnique({
      where: {
        rut,
      },
    });

    return listClient;
  }
}

export { ListClientByRutService };
