import prismaClient from "../../prisma";

class ListFileByRutService {
  async execute(rut: string) {
    const nutritionist = await prismaClient.nutritionist.findFirst({
      where: {
        rut,
      },
    });

    const client = await prismaClient.client.findFirst({
      where: {
        rut,
      },
    });

    if (nutritionist) {
      let listFile = await prismaClient.file.findMany({
        where: {
          nutritionistRut: rut,
        },
      });

      return listFile;
    }

    if (client) {
      let listFile = await prismaClient.file.findMany({
        where: {
          clientRut: rut,
        },
      });

      return listFile;
    }

    return null;
  }
}

export { ListFileByRutService };
