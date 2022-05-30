import cors from "cors";
import express from "express";
import http from "http";
import { Server } from "socket.io";
import { router } from "./routes";

const app = express();

app.use(express.json());

app.use((request, response, next) => {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "*");
  response.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  app.use(cors());
  next();
});

app.use(router);

//agregando propiedades de express a httpServer
const httpServer = http.createServer(app);

//Instanciando el IO
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

export { app, httpServer, io };
