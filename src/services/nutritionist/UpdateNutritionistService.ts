import prismaClient from "../../prisma";

type UpdateNutritionistProps = {
  name: string;
  lastName: string;
  birthday?: string;
  gender?: string;
  phone?: string;
  category?: string;
  description?: string;
};

class UpdateNutritionistService {
  async execute(
    rut: string,
    {
      name,
      lastName,
      birthday,
      gender,
      phone,
      category,
      description,
    }: UpdateNutritionistProps
  ) {
    const nutritionist = prismaClient.nutritionist.update({
      where: {
        rut: rut,
      },
      data: {
        name,
        lastName,
        birthday,
        gender,
        phone,
        category,
        description,
      },
    });

    return nutritionist;
  }
}

export { UpdateNutritionistService };
