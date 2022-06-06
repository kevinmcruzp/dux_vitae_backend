import prismaClient from "../../prisma";

class DeleteNutritionistService {
  async execute(rut: string) {
    const client = await prismaClient.nutritionist.delete({
      where: {
        rut,
      },
    });

    return client;
  }
}

export { DeleteNutritionistService };
