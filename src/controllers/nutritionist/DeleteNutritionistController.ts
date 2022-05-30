import { Request, Response } from "express";
import { DeleteNutritionistService } from "../../services/nutritionist/DeleteNutritionistService";

class DeleteNutritionistController {
  async handle(request: Request, response: Response) {
    const { rut } = request.params;

    const service = new DeleteNutritionistService();

    await service.execute(rut);

    return response.status(200).json({
      message: "Nutritionist deleted with success",
      status: 200,
    });
  }
}

export { DeleteNutritionistController };
