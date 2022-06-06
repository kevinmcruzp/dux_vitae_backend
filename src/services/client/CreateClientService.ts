import prismaClient from "../../prisma";

type CreateClientProps = {
  rut: string;
  name: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
};

class CreateClientService {
  async execute({
    rut,
    name,
    lastName,
    email,
    password,
    role = "client",
  }: CreateClientProps) {
    const client = await prismaClient.client.create({
      data: {
        rut,
        name,
        lastName,
        email,
        password,
        role,
      },
    });

    return client;
  }
}

export { CreateClientService };
