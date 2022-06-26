import { Router } from "express";
import { CreateAppointmentController } from "./controllers/appointment/CreateAppointmentController";
import { DeleteAppointmentController } from "./controllers/appointment/DeleteAppointmentController";
import { ListAppointmentByRutController } from "./controllers/appointment/ListAppointmentByRutController";
import { UpdateAppointmentController } from "./controllers/appointment/UpdateAppointmentController";
import { SearchChatController } from "./controllers/chat/SearchChatController";
import { CheckUserController } from "./controllers/CheckUserController";
import { CreateClientController } from "./controllers/client/CreateClientController";
import { DeleteClientController } from "./controllers/client/DeleteClientController";
import { ListClientByRutController } from "./controllers/client/ListClientByRutController";
import { ListClientController } from "./controllers/client/ListClientController";
import { UpdateClientController } from "./controllers/client/UpdateClientController";
import { LoginController } from "./controllers/LoginController";
import { CreateNutritionistController } from "./controllers/nutritionist/CreateNutritionistController";
import { DeleteNutritionistController } from "./controllers/nutritionist/DeleteNutritionistController";
import { ListNutritionistByRutController } from "./controllers/nutritionist/ListNutritionistByRutController";
import { ListNutritionistController } from "./controllers/nutritionist/ListNutritionistController";
import { UpdateNutritionistController } from "./controllers/nutritionist/UpdateNutritionistController";
import { RefreshController } from "./controllers/RefreshController";
import { UploadCertificateController } from "./controllers/upload/UploadCertificateController";
import { addUserInformationToRequest } from "./middleware/addUserInformationToRequest";
import { checkAuthMiddleware } from "./middleware/checkAuthMiddleware";

import multer from "multer";
import { DownloadCertificateController } from "./controllers/upload/DownloadCertificateController";

const router = Router();
const upload = multer({
  storage: multer.diskStorage({
    destination: "./certificateUploads",
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now();
      cb(null, file.originalname + "-" + uniqueSuffix);
    },
  }),
});

//Ruta Clientes
router.post("/clients", new CreateClientController().handle);
router.get("/clients", new ListClientController().handle);
router.put("/clients/:rut", new UpdateClientController().handle);
router.delete("/clients/:rut", new DeleteClientController().handle);
router.get("/clients/:rut", new ListClientByRutController().handle);

//Ruta nutricionista
router.post("/nutritionists", new CreateNutritionistController().handle);
router.get("/nutritionists", new ListNutritionistController().handle);
router.put("/nutritionists/:rut", new UpdateNutritionistController().handle);
router.delete("/nutritionists/:rut", new DeleteNutritionistController().handle);
router.get("/nutritionists/:rut", new ListNutritionistByRutController().handle);

//Ruta de appointments
router.post("/appointments", new CreateAppointmentController().handle);
router.get("/appointments/:rut", new ListAppointmentByRutController().handle);
router.put("/appointments/:id", new UpdateAppointmentController().handle);
router.delete("/appointments/:id", new DeleteAppointmentController().handle);

//Ruta de files
router.post(
  "/certificate",
  upload.single("file"),
  new UploadCertificateController().handle
);
router.get("/certificate", new DownloadCertificateController().handle);

//Ruta de chat
router.get("/chat/:room", new SearchChatController().handle);

//Login
router.post("/sessions", new LoginController().handle);

//refresh token
router.post(
  "/refresh",
  addUserInformationToRequest,
  new RefreshController().handle
);

//Chequea la validez del token y devuelve mis datos (A traves de los tokens)
router.get("/me", checkAuthMiddleware, new CheckUserController().handle);

export { router };
