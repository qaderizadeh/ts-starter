import { Context, Next } from "hono";

export default async function error(c: Context, next: Next) {
  try {
    return await next();
  } catch (error: any) {
    return c.json({ error: error.message }, error?.status || 500);
  }
}
