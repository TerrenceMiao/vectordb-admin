import { handler } from "./handler";
import { endpoints } from "@api/routers";
import * as configure from "./configure";
import express from "express";
import cors from "cors";

const server = express();

server.use(cors());
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

configure.serverBefore?.(server);

const {
  HOST = "0.0.0.0",
  PORT = 3000,
  BASE = API_ROUTES.BASE,
  BASE_API = API_ROUTES.BASE_API,
  PUBLIC_DIR = API_ROUTES.PUBLIC_DIR,
} = process.env;

const SERVER_URL = `http://${HOST}:${PORT}${BASE}`;

server.use(BASE, express.static(PUBLIC_DIR));
server.use(BASE_API, handler);

configure.serverAfter?.(server);

server.listen(PORT, HOST, (error) => {
  if (error) {
    console.error(`Error at ${SERVER_URL}`, error);
    configure.serverError?.(server, error);
  } else {
    console.log(`Ready at ${SERVER_URL}`);
    configure.serverListening?.(server, endpoints);
  }
});
