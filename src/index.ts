import "dotenv/config";
import { Hono } from "hono";
import { init } from "./middlewares";
import routes from "./routes";

const app = new Hono();

init(app);
routes(app);

export default app;
