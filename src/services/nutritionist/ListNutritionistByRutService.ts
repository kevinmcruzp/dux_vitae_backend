import prismaClient from "../../prisma";

class ListNutritionistByRutService {
  async execute(rut: string) {
    const cliente = await prismaClient.nutritionist.findUnique({
      where: {
        rut,
      },
    });

    return cliente;
  }
}

export { ListNutritionistByRutService };
