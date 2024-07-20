import { Hono } from "hono";
import { cors } from "hono/cors";
import page from "./page";
import error from "./error";

export function init(app: Hono) {
  app.use(cors());
  app.use(page);
  app.use(error);
}
