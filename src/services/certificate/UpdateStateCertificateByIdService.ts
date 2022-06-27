import prismaClient from "../../prisma";

class UpdateStateCertificateByIdService {
  async execute(id: string) {
    const certificate = await prismaClient.certificate.update({
      where: {
        idCertificate: id,
      },
      data: {
        state: true,
      },
    });
    return certificate;
  }
}

export { UpdateStateCertificateByIdService };
