import prismaClient from "../../prisma";

type CreateFileData = {
  filename: string;
  originalname: string;
  clientRut: string;
  nutritionistRut: string;
};

class CreateFileService {
  async execute(fileData: CreateFileData) {
    const file = await prismaClient.file.create({
      data: {
        filename: fileData.filename,
        originalname: fileData.originalname,
        clientRut: fileData.clientRut,
        nutritionistRut: fileData.nutritionistRut,
      },
    });

    return file;
  }
}

export { CreateFileService };
