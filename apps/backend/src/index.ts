import { getLogger } from "logger";
import { createServer } from "./server";

const port = process.env.PORT || 5000;
const server = createServer();
const logger = getLogger({ name: "App" });

server.listen(port, () => {
    logger.info(`api running on ${port}`);
});
