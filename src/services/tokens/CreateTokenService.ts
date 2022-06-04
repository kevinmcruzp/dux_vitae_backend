import { v4 as uuid } from "uuid";
import prismaClient from "../../prisma";

class CreateTokenService {
  async execute(email: string) {
    const client = await prismaClient.client.findFirst({
      where: {
        email,
      },
    });

    const nutritionist = await prismaClient.nutritionist.findFirst({
      where: {
        email,
      },
    });

    const admin = await prismaClient.admin.findFirst({
      where: {
        email,
      },
    });

    console.log(admin);
    const refreshToken = uuid();

    if (admin !== null) {
      const adminUser = await prismaClient.token.findFirst({
        where: {
          email,
        },
      });

      if (adminUser == null) {
        const user = await prismaClient.token.create({
          data: {
            email,
            token: refreshToken,
          },
        });
        console.log(user, "create admin");
      } else {
        const user = await prismaClient.token.update({
          where: {
            email: email,
          },
          data: {
            token: refreshToken,
          },
        });
        console.log(user, "update admin");
      }
      console.log("adminUser");
      return refreshToken;
    }

    if (nutritionist !== null) {
      const nutritionistUser = await prismaClient.token.findFirst({
        where: {
          email,
        },
      });

      if (nutritionistUser == null) {
        const user = await prismaClient.token.create({
          data: {
            email,
            token: refreshToken,
          },
        });
        console.log(user, "create nutritionist");
      } else {
        const user = await prismaClient.token.update({
          where: {
            email,
          },
          data: {
            token: refreshToken,
          },
        });

        console.log(user, "update nutritionist");
      }
      console.log("nutritionistUser");
      return refreshToken;
    }

    if (client !== null) {
      const clientUser = await prismaClient.token.findFirst({
        where: {
          email,
        },
      });

      if (clientUser == null) {
        let user = await prismaClient.token.create({
          data: {
            email,
            token: refreshToken,
          },
        });
        console.log(user, "create user");
      } else {
        let user = await prismaClient.token.update({
          where: {
            email,
          },
          data: {
            token: refreshToken,
          },
        });
        console.log(user, "update user");
      }

      return refreshToken;
    }
    return refreshToken;
  }
}

export { CreateTokenService };
