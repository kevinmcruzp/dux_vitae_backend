import prismaClient from "../../prisma";

type UpdateNutritionistProps = {
  name: string;
  lastname: string;
  email: string;
  password: string;
};

class UpdateNutritionistService {
  async execute(
    rut: string,
    { name, lastname, email, password }: UpdateNutritionistProps
  ) {
    const nutritionist = prismaClient.nutritionist.update({
      where: {
        rut: rut,
      },
      data: {
        name,
        lastname,
        email,
        password,
      },
    });

    return nutritionist;
  }
}

export { UpdateNutritionistService };
