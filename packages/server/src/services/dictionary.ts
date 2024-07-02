import { Context } from "koa";
import { DictionaryCategory, DictionaryTopic } from "$models/dictionary";
import { ok, nok } from "$api/response";
import { StatusCode, ErrorCode } from "@momentum/shared";

export const getCategories = async (ctx: Context) => {
  try {
    const categories = await DictionaryCategory.find({}, "-_id -__v");
    ok(ctx, StatusCode.Success, { categories });
  } catch(error) {
    nok(ctx, StatusCode.InternalError, ErrorCode.InternalError);
  }
};

export const getTopicsByCategory = async (ctx: Context, category: string) => {
  try {
    const topics = await DictionaryTopic.find({ category }, "-_id -__v");
    ok(ctx, StatusCode.Success, { topics });
  } catch(error) {
    nok(ctx, StatusCode.InternalError, ErrorCode.InternalError);
  }
};

export const getTopicDetail = async (ctx: Context, id: string) => {
  try {
    const topic = await DictionaryTopic.findOne({ id }, "-_id -__v");
    if(!topic) {
      nok(ctx, StatusCode.NotFound, ErrorCode.NotFound);
    } else {
      ok(ctx, StatusCode.Success, { topic });
    }
  } catch(error) {
    nok(ctx, StatusCode.InternalError, ErrorCode.InternalError);
  }
};
