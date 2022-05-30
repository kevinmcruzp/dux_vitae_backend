import { Request, Response } from "express";
import { ListNutritionistByRutService } from "../../services/nutritionist/ListNutritionistByRutService";

class ListNutritionistByRutController {
  async handle(request: Request, response: Response) {
    const { rut } = request.params;
    const service = new ListNutritionistByRutService();

    const nutritionist = await service.execute(rut);

    return response.status(200).json(nutritionist);
  }
}

export { ListNutritionistByRutController };
