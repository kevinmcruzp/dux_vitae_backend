import prismaClient from "../../prisma";

type UpdateNutritionistProps = {
  name: string;
  lastName: string;
  email: string;
  password: string;
};

class UpdateNutritionistService {
  async execute(
    rut: string,
    { name, lastName, email, password }: UpdateNutritionistProps
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
      },
    });

    return nutritionist;
  }
}

export { UpdateNutritionistService };
