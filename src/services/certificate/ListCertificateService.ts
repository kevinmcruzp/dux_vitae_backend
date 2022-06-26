import prismaClient from "../../prisma";

class ListCertificateService {
  async execute() {
    const certificates = await prismaClient.certificate.findMany({
      include: {
        nutritionist: true,
      },
    });

    return certificates;
  }
}

export { ListCertificateService };
