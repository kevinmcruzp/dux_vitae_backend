import prismaClient from "../../prisma";

class ListNutritionistByRutService {
  async execute(rut: string) {
    const nutritionist = await prismaClient.nutritionist.findUnique({
      where: {
        rut,
      },
      include: {
        client: true,
        category: true,
      },
    });

    return nutritionist;
  }
}

export { ListNutritionistByRutService };
