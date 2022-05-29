import prismaClient from "../prisma";

type CreateNutritionistaProps = {
  rut: string;
  name: string;
  lastname: string;
  email: string;
  password: string;
};

class CreateNutritionistService {
  async execute({
    rut,
    name,
    lastname,
    email,
    password,
  }: CreateNutritionistaProps) {
    const nutritionist = prismaClient.nutritionist.create({
      data: {
        rut,
        name,
        lastname,
        email,
        password,
      },
    });

    return nutritionist;
  }
}

export { CreateNutritionistService };
