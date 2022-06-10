import { Request, Response } from "express";
import { DeleteAppointmentService } from "../../services/appointment/DeleteAppointmentService";

class DeleteAppointmentController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    console.log(id, "dentro de id");
    const service = new DeleteAppointmentService();

    const appointment = await service.execute(id);

    return response.status(200).json(appointment);
  }
}

export { DeleteAppointmentController };
