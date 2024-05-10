import Koa from "koa";
import cors from "@koa/cors";
import { bodyParser } from "@koa/bodyparser";

// Intern
import { initRedis } from "$internal/redis";
import { log } from "$internal/logger";
import { logRequest } from "$api/middleware/log-request";
import { handleError } from "$api/middleware/handle-error";
import { router } from "$api/v1";

const {
  PORT = 3000,
  ORIGIN = "*"
} = process.env;

// Datenbanken initialisieren.
await initRedis();

const app = new Koa();

app.use(
  cors({
    origin: ORIGIN
  })
);

app.use(logRequest);
app.use(handleError);

app.use(
  bodyParser({
    encoding: "utf-8",
    onError: (_err, ctx) => {
      ctx.throw(400);
    }
  })
);

app.use(router.routes());

app.listen(PORT, () => {
  log.info(`server listening on port ${PORT}`);
});
