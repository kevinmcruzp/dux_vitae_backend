import prismaClient from "../../prisma";

type CreateNutritionistProps = {
  rut: string;
  name: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
};

class CreateNutritionistService {
  async execute({
    rut,
    name,
    lastName,
    email,
    password,
    role = "nutritionist",
  }: CreateNutritionistProps) {
    const nutritionist = prismaClient.nutritionist.create({
      data: {
        rut,
        name,
        lastName,
        email,
        password,
        role,
      },
    });

    return nutritionist;
  }
}

export { CreateNutritionistService };
