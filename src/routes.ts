import { Router } from "express";
import { CreateClientController } from "./controllers/client/CreateClientController";
import { ListClientController } from "./controllers/client/ListClientController";
import { UpdateClientController } from "./controllers/client/UpdateClientController";
import { CreateNutritionistController } from "./controllers/nutritionist/CreateNutritionistController";
import { ListNutritionistController } from "./controllers/nutritionist/ListNutritionistController";
import { UpdateNutritionistController } from "./controllers/nutritionist/UpdateNutritionistController";

const router = Router();

//Ruta Clientes
router.get("/client/list", new ListClientController().handle);
router.post("/client/register", new CreateClientController().handle);
router.put("/client/:rut", new UpdateClientController().handle);

//Ruta nutricionista
router.post(
  "/nutritionist/register",
  new CreateNutritionistController().handle
);
router.get("/nutritionist/list", new ListNutritionistController().handle);
router.put("/nutritionist/:rut", new UpdateNutritionistController().handle);

export { router };
