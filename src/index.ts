import express from "express";
import config from "../config";
import { routes } from "./routes/routes";
import { log } from "./utils/logger";

const app = express();
const port = config.port;

app.listen(port, () => {
  log.info(`server started ${port}`);
  log.info("updated!");
  routes(app);
});
