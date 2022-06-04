import prismaClient from "../../prisma";

type CreateClientProps = {
  rut: string;
  name: string;
  lastname: string;
  email: string;
  password: string;
  role: string;
};

class CreateClientService {
  async execute({
    rut,
    name,
    lastname,
    email,
    password,
    role = "client",
  }: CreateClientProps) {
    const client = await prismaClient.client.create({
      data: {
        rut,
        name,
        lastname,
        email,
        password,
        role,
      },
    });

    return client;
  }
}

export { CreateClientService };
