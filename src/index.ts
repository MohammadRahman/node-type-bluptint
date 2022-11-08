import { config } from "./utils/config";
import { createServer } from "./utils/createServer";
import { connectDatabase } from "./utils/dbConfig";
import { log } from "./utils/logger";

function startServer() {
  const server = createServer();
  const port = config.PORT;
  server.listen(port, async () => {
    log.info(`server started ${port}`);
    await connectDatabase()
  });
}
startServer()