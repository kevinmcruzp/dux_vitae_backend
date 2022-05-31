import prismaClient from "../../prisma";

type CreateNutritionistaProps = {
  rut: string;
  name: string;
  lastname: string;
  email: string;
  password: string;
  role: string;
};

class CreateNutritionistService {
  async execute({
    rut,
    name,
    lastname,
    email,
    password,
    role = "nutritionist",
  }: CreateNutritionistaProps) {
    const nutritionist = prismaClient.nutritionist.create({
      data: {
        rut,
        name,
        lastname,
        email,
        password,
        role,
      },
    });

    return nutritionist;
  }
}

export { CreateNutritionistService };
