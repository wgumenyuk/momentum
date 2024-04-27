import Koa from "koa";
import cors from "@koa/cors";

// Intern
import { log } from "$internal/logger";
import { loadMongoDb } from "$internal/mongodb";
import { router } from "$api/v1";

const {
  PORT = 3000,
  CORS_ORIGIN = "*"
} = process.env;

// Mit MongoDB verbinden.
await loadMongoDb();

const app = new Koa();

app.use(
  cors({
    origin: CORS_ORIGIN
  })
);

app.use(router.routes());

app.listen(PORT, function() {
  log.info(`listening on port ${PORT}`);
});