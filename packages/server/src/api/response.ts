import type { Context } from "koa";
import type { Response, StatusCodeValue, ErrorCodeValue } from "@momentum/shared";

/**
  Teilt dem Client mit, dass die Anfrage erfolgreich ausgeführt wurde.
*/
export const ok = <T extends Record<string, unknown> = Record<string, never>>(
  ctx: Context,
  statusCode: StatusCodeValue,
  data?: T
) => {
  const [ httpStatus, status ] = statusCode;
  ctx.status = httpStatus;
  ctx.body = {
    ok: true,
    status,
    data: (data as T) || {}
  } satisfies Response<T>;
};

/**
  Teilt dem Client mit, dass die Anfrage nicht ausgeführt wurde.
*/
export const nok = (
  ctx: Context,
  statusCode: StatusCodeValue,
  err: ErrorCodeValue
) => {
  const [ httpStatus, status ] = statusCode;
  ctx.status = httpStatus;
  ctx.body = {
    ok: false,
    status,
    err
  } satisfies Response;
};
