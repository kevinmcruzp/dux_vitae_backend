import prismaClient from "../../prisma";

type UpdateNutritionistProps = {
  name: string;
  lastName: string;
  email: string;
  password: string;
  nameCategory: string;
};

class UpdateNutritionistService {
  async execute(
    rut: string,
    { name, lastName, email, password, nameCategory }: UpdateNutritionistProps
  ) {
    const nutritionist = prismaClient.nutritionist.update({
      where: {
        rut: rut,
      },
      data: {
        name,
        lastName,
        email,
        password,
        category: {
          create: {
            name: nameCategory,
          },
        },
      },
    });

    return nutritionist;
  }
}

export { UpdateNutritionistService };
