import Koa from "koa";
import cors from "@koa/cors";

// Intern
import { log } from "$internal/logger";

const {
  PORT = 3000,
  ORIGIN = "*"
} = process.env;

const app = new Koa();

app.use(
  cors({
    origin: ORIGIN
  })
);

app.listen(PORT, () => {
  log.info(`server listening on port ${PORT}`);
});
