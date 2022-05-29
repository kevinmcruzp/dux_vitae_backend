import prismaClient from "../prisma";

type CreateClientProps = {
  rut: string;
  name: string;
  lastname: string;
  email: string;
  password: string;
};

class CreateClientService {
  async execute({ rut, name, lastname, email, password }: CreateClientProps) {
    const user = prismaClient.client.create({
      data: {
        rut,
        name,
        lastname,
        email,
        password,
      },
    });

    return user;
  }
}

export { CreateClientService };
