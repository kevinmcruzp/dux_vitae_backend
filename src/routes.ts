import { Router } from "express";
import { CreateClientController } from "./controllers/client/CreateClientController";
import { DeleteClientController } from "./controllers/client/DeleteClientController";
import { ListClientByRutController } from "./controllers/client/ListClientByRutController";
import { ListClientController } from "./controllers/client/ListClientController";
import { UpdateClientController } from "./controllers/client/UpdateClientController";
import { CreateNutritionistController } from "./controllers/nutritionist/CreateNutritionistController";
import { DeleteNutritionistController } from "./controllers/nutritionist/DeleteNutritionistController";
import { ListNutritionistByRutController } from "./controllers/nutritionist/ListNutritionistByRutController";
import { ListNutritionistController } from "./controllers/nutritionist/ListNutritionistController";
import { UpdateNutritionistController } from "./controllers/nutritionist/UpdateNutritionistController";

const router = Router();

//Ruta Clientes
router.post("/clients", new CreateClientController().handle);
router.get("/clients", new ListClientController().handle);
router.put("/clients/:rut", new UpdateClientController().handle);
router.delete("/clients/:rut", new DeleteClientController().handle);
router.get("/clients:rut", new ListClientByRutController().handle);

//Ruta nutricionista
router.post("/nutritionists", new CreateNutritionistController().handle);
router.get("/nutritionists", new ListNutritionistController().handle);
router.put("/nutritionists/:rut", new UpdateNutritionistController().handle);
router.delete("/nutritionists/:rut", new DeleteNutritionistController().handle);
router.get("/nutritionists/:rut", new ListNutritionistByRutController().handle);

export { router };
