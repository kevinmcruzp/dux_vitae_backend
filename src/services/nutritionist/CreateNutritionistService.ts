import prismaClient from "../../prisma";

type CreateNutritionistProps = {
  rut: string;
  name: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
  adminRut: any;
  file: string;
};

class CreateNutritionistService {
  async execute({
    rut,
    name,
    lastName,
    email,
    password,
    role = "nutritionist",
    adminRut = "20683938-4",
    file,
  }: CreateNutritionistProps) {
    const nutritionist = prismaClient.nutritionist.create({
      data: {
        rut,
        name,
        lastName,
        email,
        password,
        role,
        certificate: {
          create: {
            file,
            adminRut,
          },
        },
      },
    });

    return nutritionist;
  }
}

export { CreateNutritionistService };
