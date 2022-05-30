import prismaClient from "../../prisma";

class DeleteNutritionistService {
  async execute(rut: string) {
    const cliente = await prismaClient.nutritionist.delete({
      where: {
        rut,
      },
    });

    return cliente;
  }
}

export { DeleteNutritionistService };
