import Koa from "koa";

// Intern
import { log } from "$internal/logger";
import { loadMongoDb } from "$internal/mongodb";
import { router } from "$api/v1";

/**
  Port, auf dem die API läuft.
*/
const PORT = process.env.PORT || 3000;

// Mit MongoDB verbinden.
await loadMongoDb();

const app = new Koa();

app.use(router.routes());

app.listen(PORT, function() {
  log.info(`listening on port ${PORT}`);
});