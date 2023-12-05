import { Article } from "../models/Article";
import { http } from "./http";

const API_KEY = "dbcc466ed21d4b03abb7c5ac82c4527a";

export const ArticleService = {
  getTopHeadlines: () => {
    try {
      return http.get<{ articles: Article[] }>(`top-headlines`, {
        params: {
          sources: "google-news-br",
          apiKey: API_KEY,
        },
      });
    } catch (error) {
      throw new Error("Erro ao buscar artigos na API Google News");
    }
  },
};
