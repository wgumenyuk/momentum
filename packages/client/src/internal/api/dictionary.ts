import { request } from "$internal/api/request";

// Types
import type { DictionaryCategoryType, DictionaryTopicType } from "@momentum/shared";
import type { Endpoint } from "$internal/api/request";

type GetCategoriesResponse = {
  categories: DictionaryCategoryType[];
};

type GetTopicsByCategoryResponse = {
  topics: DictionaryTopicType[];
};

type GetTopicDetailResponse = {
  topic: DictionaryTopicType;
};

/**
  Dictionary API.
*/
export const DictionaryService = {
  /**
    Fetches all dictionary categories.
  */
  getCategories: () => {
    return request<GetCategoriesResponse>("GET", "/dictionary/categories" as Endpoint);
  },

  /**
    Fetches all topics within a category.
  */
  getTopicsByCategory: (category: string) => {
    return request<GetTopicsByCategoryResponse>("GET", `/dictionary/topics/${category}` as Endpoint);
  },

  /**
    Fetches detailed information about a specific topic.
  */
  getTopicDetail: (id: string) => {
    return request<GetTopicDetailResponse>("GET", `/dictionary/topic/${id}` as Endpoint);
  }
};
