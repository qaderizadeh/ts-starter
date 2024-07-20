import { Context, Next } from "hono";

export default function page(c: Context, next: Next) {
  c.header("Access-Control-Expose-Headers", "X-Total-Count");
  return next();
}
