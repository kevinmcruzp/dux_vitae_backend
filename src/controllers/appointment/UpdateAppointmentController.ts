import { Request, Response } from "express";
import { UpdateAppointmentService } from "../../services/appointment/UpdateAppointmentService";

class UpdateAppointmentController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const service = new UpdateAppointmentService();

    const appointment = await service.execute(id);

    return response.json(appointment);
  }
}

export { UpdateAppointmentController };
