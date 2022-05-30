import prismaClient from "../../prisma";

class ListNutritionistService {
  async execute() {
    const list = prismaClient.nutritionist.findMany();

    return list;
  }
}

export { ListNutritionistService };
