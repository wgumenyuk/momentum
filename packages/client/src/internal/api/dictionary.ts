import { request } from "$internal/api/request";
import { Response, DictionaryCategoryType, DictionaryTopicType } from "@momentum/shared";

type GetAllCategoriesResponse = {
  categories: DictionaryCategoryType[];
};

type GetTopicsByCategoryResponse = {
  topics: DictionaryTopicType[];
};

type GetTopicDetailResponse = {
  topic: DictionaryTopicType;
};

export const DictionaryService = {
  getCategories: () => request<Response<GetAllCategoriesResponse>>("GET", "/dictionary/categories"),
  getTopicsByCategory: (category: string) => request<Response<GetTopicsByCategoryResponse>>("GET", `/dictionary/topics/${category}`),
  getTopicDetail: (id: string) => request<Response<GetTopicDetailResponse>>("GET", `/dictionary/topic/${id}`)
};
