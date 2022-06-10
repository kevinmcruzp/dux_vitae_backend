import prismaClient from "../../prisma";

class DeleteAppointmentService {
  async execute(id: string) {
    try {
      const appointment = await prismaClient.appointment.delete({
        where: {
          idAppointment: id,
        },
      });
      console.log(appointment);
      return appointment;
    } catch (error) {}
  }
}

export { DeleteAppointmentService };
