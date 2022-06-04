import { httpServer } from "./http";
import "./websocket/websocket";

//Buscar datos del usuario

httpServer.listen(3333, () => {
  console.log("Server running on port 3333");
});
