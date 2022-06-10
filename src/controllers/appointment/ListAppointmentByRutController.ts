import { Request, Response } from "express";
import { ListAppointmentByRutService } from "../../services/appointment/ListAppointmentByRutService";

class ListAppointmentByRutController {
  async handle(request: Request, response: Response) {
    const { rut } = request.params;
    const service = new ListAppointmentByRutService();
    const appointment = await service.execute(rut);

    return response.json(appointment);
  }
}

export { ListAppointmentByRutController };
