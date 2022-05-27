import cors from "cors";
import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();

app.use(express.json());
app.use(cors());

//agregando propiedades de express a httpServer
const httpServer = http.createServer(app);

//Instanciando el IO
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

export { app, httpServer, io };
