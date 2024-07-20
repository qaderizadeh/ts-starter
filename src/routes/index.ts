import { Hono } from "hono";

export default function routes(app: Hono) {
  app.get("/", (c) => c.text("Hono!"));
}
